const fs = require('fs');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const classify = require('./intent-classifier');
const funcs = require('./function-registry');

const GT_PATH = path.join(__dirname, '../../../docs/ground-truth.json');
const LLM_URL = process.env.LLM_URL;

function groundPolicies(userQuery) {
  const kb = JSON.parse(fs.readFileSync(GT_PATH, 'utf8'));
  const q = userQuery.toLowerCase();
  const cat = q.includes('return') || q.includes('refund') ? 'returns'
    : q.includes('ship') ? 'shipping' : null;
  return cat ? kb.filter(p => p.category === cat) : [];
}

function validateCitations(text) {
  const kb = JSON.parse(fs.readFileSync(GT_PATH, 'utf8'));
  const ids = (text.match(/\[(\w+\d+\.\d+)\]/g) || []).map(s => s.slice(1, -1));
  const valid = ids.filter(id => kb.find(p => p.id === id));
  const invalid = ids.filter(id => !valid.includes(id));
  return { valid, invalid };
}

module.exports = async function assistantHandler(req, res) {
  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'message required' });

  const intent = classify(message);
  let context = {};

  if (intent === 'order_status') {
    const m = message.match(/([a-f0-9]{24})/i);
    if (m) context.order = await funcs.getOrderStatus({ orderId: m[1] });
  } else if (intent === 'product_search') {
    context.products = await funcs.searchProducts({ query: message, limit: 5 });
  } else if (intent === 'policy_question') {
    context.policies = groundPolicies(message);
  } else if (intent === 'complaint') {
    context.note = 'Be empathetic and propose a fix.';
  }

  const groundingText = (context.policies || []).map(p => `[${p.id}] ${p.answer}`).join('\n');
  const prompt = `You are Nova, a helpful support specialist. Never say you're an AI.
Intent: ${intent}
Grounding:
${groundingText || '(none)'}
User: ${message}
Answer with brief, clear steps and cite [PolicyX.Y] if policy info is used.`;

  let llmText = '(LLM not configured)';
  try {
    if (!LLM_URL) throw new Error('LLM_URL not set');
    const r = await fetch(LLM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, max_tokens: 400 })
    });
    const j = await r.json();
    llmText = j.text || String(j);
  } catch (e) {
    llmText = `Assistant offline. Intent: ${intent}. Context: ${JSON.stringify(context)}`;
  }

  const citationReport = validateCitations(llmText);
  res.json({ intent, context, citations: citationReport, text: llmText });
};

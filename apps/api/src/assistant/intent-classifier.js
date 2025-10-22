module.exports = function classify(text = '') {
  const t = text.toLowerCase();
  if (/(where|when).*(order|package|tracking|status)/.test(t)) return 'order_status';
  if (/(refund|return|exchange|warranty|shipping|policy)/.test(t)) return 'policy_question';
  if (/(find|search|show).*(product|item)/.test(t)) return 'product_search';
  if (/(complain|angry|issue|problem|bad)/.test(t)) return 'complaint';
  if (/(hi|hello|hey)/.test(t)) return 'chitchat';
  if (/(abuse|insult|hate)/.test(t)) return 'violation';
  return 'off_topic';
};

# Touchpoint Specs

## 1) Support assistant (FAQ QA + order status)

**Problem statement**  
Users ask repetitive questions (policies, returns, shipping times) and “where’s my order?”. Agents are overloaded. We need quick, grounded answers in-app with a safe human handoff when unclear.

**Happy path (6–10 steps)**
1. User opens Support and types a question (or “track order 12345”).  
2. App sends query + (optional) order id to backend.  
3. Backend retrieves top FAQ/Policy chunks (BM25/embeddings) and, if order id present, calls `order-status` API.  
4. Model generates a grounded answer citing the source sections.  
5. Guardrails redact PII and refuse outside policy scope.  
6. Response returns with short citations and “Was this helpful?”.  
7. If user says “no”, offer escalations (chat/email) with transcript.  
8. Log latency, confidence, and thumbs up/down.

**Grounding & guardrails**  
- **Source of truth:** Policies/FAQ markdown (versioned); `order-status` API.  
- **Retrieval scope:** top 5 chunks (≤3k tokens).  
- **Max context:** ~3.5k tokens; system prompt “only answer from provided context.”  
- **Refuse:** If answer isn’t in context, respond with a friendly refusal + contact options.

**Human-in-the-loop**  
- Triggers: low confidence, user thumbs-down, or order not found.  
- UI: “Escalate to human” button.  
- Reviewer: Tier-1 agent; **SLA:** respond within 1 business hour.

**Latency budget (p95 ≤ 1200 ms)**  
- Cache check (question hash): 10–20 ms  
- Retrieval (vector/BM25): 80–150 ms  
- `order-status` API (optional): 100–200 ms  
- LLM generation (≤200 tokens out): 650–800 ms  
- Compose/return: 30 ms

**Error & fallback**  
- Retrieval empty → return top FAQ links + search.  
- API error → “Order lookup unavailable” + escalate option.  
- Safety block → refuse and route to human.

**PII handling**  
- Only order id sent; redact email/phone/address before logging.  
- Don’t store full prompts with PII; keep 7-day aggregated telemetry.

**Success metrics**  
- Product: Auto-resolve rate = `auto_resolved / total_sessions`  
- Product: Helpfulness = `thumbs_up / (thumbs_up + thumbs_down)`  
- Business: Support contact rate ↓ = `tickets / 1000 sessions`

**Feasibility (3–5 lines)**  
FAQ markdown exists; order status API exists (id → status). Use embeddings + a small instruct model. Next step: prototype `/support/answer` with retrieval + model call and latency logging.

---

## 2) Typeahead search suggestions

**Problem statement**  
Users struggle to find products; slow/irrelevant suggestions hurt conversion. We need fast, high-quality suggestions that complete queries and nudge to high-intent terms.

**Happy path (6–10 steps)**
1. User types in the search box.  
2. Frontend sends partial query every 150 ms (debounced).  
3. Backend checks suggestion cache by `(prefix, locale)`.  
4. On miss, rank candidates from SKU titles + recent popular queries.  
5. (Optional) LLM rewrites to 3–5 cleaner suggestions.  
6. Return list in ≤300 ms; tap opens search results with that suggestion.  
7. Log click-through and end-to-end latency.

**Grounding & guardrails**  
- Sources: SKU titles/descriptions, recent queries.  
- Context cap: ≤200 tokens (top candidates only).  
- Refuse adult/policy-blocked terms → return safe defaults.

**Human-in-the-loop**  
- None in real time; daily review of bad suggestions via analytics.

**Latency budget (p95 ≤ 300 ms)**  
- Cache check: 5–10 ms (hit ~70%)  
- Candidate fetch/rank: 40–80 ms  
- (Optional) LLM rewrite: 120–160 ms (miss path only)  
- Compose/return: 10–20 ms

**Error & fallback**  
- If ranking fails → return top N popular queries.  
- If LLM fails → skip rewrite.

**PII handling**  
- No PII sent; logs store prefix + anonymized session id.

**Success metrics**  
- Product: Suggest CTR = `suggest_clicks / suggest_impressions`  
- Product: Search→Product view rate = `product_views_from_search / search_sessions`  
- Business: Conversion uplift = `orders_from_search / search_sessions`

**Feasibility (3–5 lines)**  
We have a SKU catalog and query logs. Start with prefix index + popularity; add a small LLM rewrite only for cache misses. Next step: build `/search/suggest` with Redis cache and prefix tree; measure latency.

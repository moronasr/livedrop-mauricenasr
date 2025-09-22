# AI Capability Map — ShopLite

> Goal: pick two near-term AI touchpoints that move KPIs and are feasible now.

| Capability | Intent (user) | Inputs (this sprint) | Risk 1–5 (tag) | p95 ms | Est. cost/action | Fallback | Selected |
|---|---|---|---|---:|---:|---|:---:|
| Support assistant (Policies/FAQ QA + order-status) | Get instant answers; track my order | Policies/FAQ markdown; `order-status` API by id | 2 | 1200 | low–med | Link to FAQ; escalate to human | **Yes** |
| Typeahead search suggestions | Find products faster | 10k SKU titles/descriptions; recent queries | 2 | 300 | low | Default to popular queries | **Yes** |
| Product Q&A on PDP | Ask natural questions on a product page | Product specs + FAQ slice | 3 | 800 | low–med | Show top 3 FAQ snippets |  |
| Review summarizer | “What do people like/dislike?” | Reviews corpus (if available) | 4 | 1500 | med | Show raw review filters |  |
| Auto-draft product descriptions | Speed up creator listings | Creator form input + examples | 3 | 1500 | med | Use template-only copy |  |
| Fraud/toxicity triage for reviews | Keep reviews clean | Review text stream | 3 | 500 | low | Rate-limit + manual review |  |

**Why these two (3–5 sentences):**  
We select **Support assistant** to reduce support contact rate and improve CSAT using data we already have (FAQ markdown + order-status API). We select **Typeahead** to increase search→product click-through and conversion using our existing SKU catalog and recent queries. Both have clear fallbacks and low integration risk. Latency targets follow the assignment defaults (Typeahead ≤300ms, Support ≤1200ms).  

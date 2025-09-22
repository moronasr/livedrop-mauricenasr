# ShopLite RFC (One Pager)

**Scope:** Near-term improvements to discovery & support.  
**Non-Goals:** Model training; long-term personalization.  
**APIs available:** `order-status` by id; catalog read.

## AI Touchpoints
See capability map: [`/docs/ai-first/ai-capability-map.md`](./ai-first/ai-capability-map.md)  

**Selected this sprint**
- **Support assistant** (FAQ + order status) — target p95 ≤ 1200 ms  
- **Typeahead search suggestions** — target p95 ≤ 300 ms

Rationale: moves support contact rate and search→product CTR with low integration risk using existing FAQ + catalog data. Defaults used per assignment for latency, traffic, and model pricing.

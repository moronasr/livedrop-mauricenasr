# Tradeoffs & Reasoning

- SQL for orders/inventory; Search index for browse.
- Atomic SQL decrement: simple & strong; Redis CAS if contention grows.
- Immediate commit: fast path; reservations only if payments are slow.
- Hybrid fanout: read for big blasts, write for user-specific.
- Cursor pagination: deterministic lists.
- Event-driven cache invalidation + short TTLs balance freshness & latency.

# Tradeoffs & Reasoning

- SQL for orders/inventory; Search index for browse.
- Atomic SQL decrement: simple & correct; Redis-Lua CAS if contention grows.
- Immediate commit path; reservations only if payment windows are long.
- Hybrid fanout (read for big blasts; write for user-specific events).
- Cursor pagination for deterministic lists.
- Event-driven cache invalidation + short TTLs for freshness & latency balance.
- Stateless services; single public API suitable for mobile/web.

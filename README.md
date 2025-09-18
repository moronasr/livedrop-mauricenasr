# Live Drops — Flash-Sale & Follow Platform

Creators run limited-inventory live drops. Users follow creators, get real-time alerts, browse products, and place orders with **no oversell** and **idempotent** ordering. This repo contains the full system design (architecture, data model, API, caching, concurrency, notifications, tradeoffs).

## Diagrams
- **Architecture:** see [`docs/architecture.md`](docs/architecture.md) (Mermaid)
- **Data Model:** see [`docs/data-model.md`](docs/data-model.md) (Mermaid)

## Design Docs
- **API** → [`docs/API.md`](docs/API.md)
- **Caching** → [`docs/caching.md`](docs/caching.md)
- **Concurrency (no oversell) & Idempotency** → [`docs/concurrency.md`](docs/concurrency.md)
- **Notifications** → [`docs/notifications.md`](docs/notifications.md)
- **Tradeoffs** → [`docs/tradeoffs.md`](docs/tradeoffs.md)

## Requirements Checklist (from assignment)
**Functional**
- [x] Follow/unfollow; list followers/following; check follow
- [x] Products & scheduled drops (start/end/stock)
- [x] Browse products & drops with pagination
- [x] Near real-time notifications: drop started, stock low, sold out, order confirmed
- [x] Place orders during live drops
- [x] No oversell (authoritative inventory)
- [x] Idempotent ordering (prevent duplicates)
- [x] Single public API; flexible browse with low-latency hot views

**Non-Functional**
- [x] Reads p95 ≤ 200ms; Orders ≤ 500ms; Notifications ≤ 2s
- [x] Throughput: 500 rps reads (bursts 1,500), 150 order attempts/sec
- [x] Celebrity creators handled without bottlenecks (sharding + hybrid fanout)
- [x] Stock status reflects authoritative data after important updates
- [x] Consistent, deterministic pagination for lists
- [x] Continues operating if any single stateless instance fails
- [x] Metrics for volume, latency, cache hit ratio, lock contention, follower-list perf
- [x] Access control: users only see their own orders/follows
- [x] Secure internal comms (mTLS/IAM)

## How to view diagrams locally
GitHub renders Mermaid automatically in `.md` files.

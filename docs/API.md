# Public API (REST)

Auth: `Authorization: Bearer <JWT>`  
Pagination: `?limit=50&cursor=...` (response header `X-Next-Cursor`)  
Idempotency (writes): `Idempotency-Key: <uuid>` (required for /orders)

## Follow
- POST /v1/creators/{creatorId}/follow        → { "following": true }
- DELETE /v1/creators/{creatorId}/follow      → { "following": false }
- GET   /v1/creators/{creatorId}/followers?limit=50&cursor=...
- GET   /v1/users/{userId}/following?limit=50&cursor=...
- GET   /v1/users/{userId}/following/{creatorId} → { "follows": true|false }

## Catalog & Drops
- POST /v1/products
- POST /v1/drops
- GET  /v1/products/{id}
- GET  /v1/drops/{id}
- GET  /v1/creators/{id}
- GET  /v1/browse/products?query=...&creatorId=...&sort=popularity&limit=20&cursor=...
- GET  /v1/browse/drops?status=live|scheduled|ended&creatorId=...&limit=20&cursor=...

## Orders (idempotent, no oversell)
- POST /v1/orders   (requires header Idempotency-Key)
- GET  /v1/orders/{orderId}
- GET  /v1/users/{userId}/orders?limit=50&cursor=...

## Realtime Notifications
- SSE: GET /v1/notifications/stream
- WS : wss://.../v1/notifications/socket
- Events: drop_started, stock_low, sold_out, order_confirmed

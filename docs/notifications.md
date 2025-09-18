# Notifications (≤2s delivery)

Events: drop_started, stock_low, sold_out, order_confirmed

Flow
1) Services write event to transactional outbox in same DB txn.
2) Publisher ships to event bus (Kafka/PubSub).
3) Notification service consumes and fans out:
   - Realtime: WebSockets (fallback SSE; supports resume)
   - Out-of-app: Push (APNs/FCM), email/SMS

Fanout strategy
- Creator blasts: fanout-on-read (store once in creator feed; clients subscribe).
- Per-user (order_confirmed): fanout-on-write (per-user queue).
- Dynamic threshold switches mode for celebrity creators.

Metrics
- End-to-end delivery latency, consumer lag, push success, WS errors.

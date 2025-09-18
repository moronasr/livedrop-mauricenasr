# Notifications (≤2s delivery)

Events: drop_started, stock_low, sold_out, order_confirmed

## Flow
- Services write events into transactional outbox.
- Publisher sends them onto the event bus (Kafka/PubSub).
- Notification service consumes and fans out.

## Fanout strategy
- Creator blasts → fanout-on-read (creator feed + WS subscriptions).
- Per-user events (order_confirmed) → fanout-on-write.

## Delivery channels
- Realtime: WebSockets (fallback SSE).
- Out-of-app: Push (APNs/FCM), email/SMS.

Guarantee: delivered within ~2s of event.

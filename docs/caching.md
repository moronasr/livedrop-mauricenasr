# Caching & Invalidation

Hot keys (Redis)
- stock:{dropId} → {available, updated_at}
- drop:{id}:status → scheduled|live|ended|sold_out
- creator:{id}:profile, creator:{id}:followers_count
- followers:list:{creatorId}:{cursor} (short TTL)

Invalidation via events (outbox → bus)
- order_confirmed → update/bust stock:{dropId}
- stock_low / sold_out → update drop status + stock
- drop_started / drop_ended → update drop status + bust browse pages

TTLs
- stock/status: 3–10s
- page caches: 10–30s

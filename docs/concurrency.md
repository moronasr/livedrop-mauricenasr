# Concurrency & Inventory

## No oversell (SQL atomic decrement)
UPDATE inventory
SET available_qty = available_qty - :q
WHERE drop_id = :d AND available_qty >= :q;

This ensures only one order succeeds when stock is low.

## Idempotent orders
- Client sends Idempotency-Key header.
- First request processes and stores result under that key.
- Retries with the same key return the stored result (no duplicates).

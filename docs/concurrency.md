# Concurrency & Inventory

## No oversell (atomic SQL)
UPDATE inventory
SET available_qty = available_qty - :q,
    updated_at = now()
WHERE drop_id = :d
  AND available_qty >= :q;
-- app checks rows_affected == 1

## Idempotent orders
- Client sends Idempotency-Key.
- First request processes and persists result under this key.
- Retries with the same key return the stored result (no duplicates).

## Failure handling
- If payment fails: increment stock back and mark order FAILED.
- Transactional outbox ensures notifications/cache updates are never lost.

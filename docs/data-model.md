# Data Model (Mermaid)

```mermaid
classDiagram
  class User {
    UUID id
    string email
    string name
    timestamptz created_at
  }

  class Creator {
    UUID id
    string handle
    string name
    timestamptz created_at
  }

  class Follow {
    UUID user_id
    UUID creator_id
    timestamptz created_at
    <<PK:(user_id,creator_id)>>
    <<IDX: (creator_id, created_at, user_id)>>
    <<IDX: (user_id, created_at, creator_id)>>
  }

  class Product {
    UUID id
    UUID creator_id
    string title
    text description
    int price_cents
    string media_url
    timestamptz created_at
    <<IDX:(creator_id, created_at)>>
  }

  class Drop {
    UUID id
    UUID product_id
    UUID creator_id
    timestamptz start_time
    timestamptz end_time
    int initial_stock
    string status  // scheduled|live|ended|sold_out
    int low_stock_threshold
    timestamptz updated_at
    <<IDX:(status, start_time DESC, id)>>
    <<IDX:(creator_id, status, start_time DESC)>>
  }

  class Inventory {
    UUID drop_id  // stock per drop to avoid hot row
    int available_qty  // CHECK >= 0
    timestamptz updated_at
    <<PK:(drop_id)>>
  }

  class Order {
    UUID id
    UUID user_id
    UUID creator_id
    UUID product_id
    UUID drop_id
    int quantity
    int amount_cents
    string status  // pending|paid|failed|canceled
    string payment_ref
    timestamptz created_at
    <<IDX:(user_id, created_at DESC)>>
    <<IDX:(drop_id, created_at DESC)>>
  }

  class IdempotencyKey {
    string key  // client-provided
    string request_hash
    UUID order_id
    string status  // in_progress|succeeded|failed
    timestamptz created_at
    timestamptz expires_at
    <<PK:(key)>>
  }

  User "1" --> "many" Follow : follows
  Creator "1" --> "many" Follow : followed_by
  Creator "1" --> "many" Product
  Product "1" --> "many" Drop
  Drop "1" --> "many" Order
  Drop "1" --> "1" Inventory
  User "1" --> "many" Order

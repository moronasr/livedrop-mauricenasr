# High-Level Architecture (Mermaid)

```mermaid
flowchart LR
  subgraph Clients
    W[Web] 
    I[iOS]
    A[Android]
  end

  W --> G
  I --> G
  A --> G

  subgraph Edge
    G[API Gateway / BFF]
  end

  G --> F[Follow Service]
  G --> C[Catalog Service]
  G --> D[Drop Service]
  G --> O[Order Service]
  G --> V[Inventory Service]
  G --> N[Notification Service]
  G --> S[Search/Browse Service]

  %% Data layer
  subgraph Data Stores
    DB[(SQL OLTP)]
    R[(Redis Cache)]
    ES[(Search Index)]
    OBJ[(Object Storage/CDN)]
  end

  C --- DB
  D --- DB
  F --- DB
  O --- DB
  V --- DB
  S --- ES
  C --- R
  D --- R
  F --- R
  O --- R

  %% Eventing
  subgraph Eventing
    K[(Event Bus)]
    OUT[(Transactional Outbox)]
  end

  D --> OUT
  O --> OUT
  V --> OUT
  OUT --> K

  K --> N
  K --> R

  %% Realtime
  N -->|WS/SSE| W
  N -->|WS/SSE| I
  N -->|WS/SSE| A

  OBJ -.images.-> W
  OBJ -.images.-> I
  OBJ -.images.-> A

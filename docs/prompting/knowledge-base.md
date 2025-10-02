# Shoplite Knowledge Base (RAG)

## Document 1: User Registration & Account Management
Shoplite lets users register as buyers or sellers. To create an account, users provide an email, a strong password (min 12 characters), and a display name. A verification email is sent and must be confirmed within 24 hours; otherwise the account remains inactive. Passwords are hashed with a modern algorithm and never stored in plain text. Two-factor authentication (2FA) via authenticator app is optional at signup and can be enabled later from Account → Security. Profile data includes country, language, and notification preferences. Users may delete their account at any time from Account → Privacy; deletion queues a 7-day grace period during which a user can cancel the request. Seller upgrades require business details (legal name, tax ID) and acceptance of the Seller Agreement. If a user forgets their password, the reset flow sends a time-boxed link (15 minutes) to the verified email. Support can assist with locked accounts after identity verification.

---

## Document 2: Product Search, Filters & Typeahead
Shoplite offers keyword search with real-time typeahead suggestions. Results can be filtered by category, price range, condition, shipping time, and seller rating. The “In-stock only” toggle hides out-of-stock listings. Sorting options include relevance (default), newest, price low→high, and rating. Typeahead surfaces popular queries and category matches after two characters; suggestions are localized per user language and region. For accessibility, keyboard users can navigate suggestions with ↑/↓ and Enter. Synonym expansion (e.g., “hoodie” ≈ “sweatshirt”) improves recall while preserving precision with field boosts to titles over descriptions. When multiple words are typed, the engine prioritizes phrase matches. Search history is stored locally for guests and on the server for signed-in users, so recent searches sync across devices.

---

## Document 3: Cart & Checkout Overview
The cart supports items from multiple sellers. Users can adjust quantities, remove items, and save for later. Taxes and shipping are estimated per item; totals update instantly. During checkout, Shoplite supports cards, Apple/Google Pay (where available), and gift codes. Address book entries can be edited or added on the fly; the default address is preselected. Fraud safeguards include CVV and address verification (AVS). Discounts apply before tax; only one promo code is active per order unless noted. If an item goes out of stock during checkout, the system alerts the user and removes the item from the order; other items proceed. Orders move to “Processing” once payment is authorized, then “Shipped” after carrier handoff. Users receive email confirmations and can find invoices under Orders → Details. Refunds are issued to the original payment method.

---

# Ground Truth Q&A with Retrieval Context (20 items)

### Q01: How do I verify my Shoplite account after signup?
**Expected retrieval context:** Document 1: User Registration & Account Management  
**Authoritative answer:** After registering, open the verification email sent to your inbox and click the link within 24 hours; otherwise the account remains inactive until re-sent and confirmed.  
**Required keywords in LLM response:** ["verification email", "24 hours", "inactive"]  
**Forbidden content:** ["phone verification required", "no email needed"]

### Q02: Which search features help me narrow results quickly?
**Expected retrieval context:** Document 2: Product Search, Filters & Typeahead  
**Authoritative answer:** Use category, price, shipping time, and rating filters; enable “In-stock only”; and rely on typeahead suggestions which appear after two characters and reflect popular/localized queries.  
**Required keywords in LLM response:** ["filters", "typeahead", "In-stock only"]  
**Forbidden content:** ["no filters", "manual browsing only"]

### Q03: What happens if an item goes out of stock during checkout, and how are totals calculated?
**Expected retrieval context:** Document 3: Cart & Checkout Overview + Document 2: Product Search, Filters & Typeahead  
**Authoritative answer:** If an item goes out of stock at checkout, Shoplite removes it and notifies you; other items continue. Totals update instantly with tax and shipping estimates per item; discounts apply before tax.  
**Required keywords in LLM response:** ["out of stock", "removed", "totals update"]  
**Forbidden content:** ["order canceled entirely", "backorder guaranteed"]

### Q04: How do I reset my password if I forgot it?
**Expected retrieval context:** Document 1: User Registration & Account Management  
**Authoritative answer:** Use “Forgot password” to receive a time-boxed reset link (15 minutes) at your verified email, then set a new password.  
**Required keywords in LLM response:** ["Forgot password", "15 minutes", "verified email"]  
**Forbidden content:** ["support will tell you your old password", "no email needed"]

<!-- Add Q05–Q20 following the same template -->

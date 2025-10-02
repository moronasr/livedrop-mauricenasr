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

### Q05: What is the same-day shipping cut-off and how are tracking updates sent?
**Expected retrieval context:** Document 4: Shipping & Delivery  
**Authoritative answer:** Orders placed before 3pm local warehouse time qualify for same-day handoff; after that they ship next business day. A tracking link is emailed when the label is created and updates as the carrier scans the parcel.  
**Required keywords in LLM response:** ["3pm", "same-day", "tracking link"]  
**Forbidden content:** ["overnight always available", "no email tracking"]

### Q06: How long is the return window and who pays for the label?
**Expected retrieval context:** Document 5: Returns & Refunds  
**Authoritative answer:** Most items can be returned within 30 days of delivery. When the reason qualifies for free returns we provide a prepaid label; otherwise the label cost is deducted from the refund.  
**Required keywords in LLM response:** ["30 days", "prepaid label", "deducted"]  
**Forbidden content:** ["returns any time", "seller always pays"]

### Q07: When is my card charged and how are partial shipments handled?
**Expected retrieval context:** Document 6: Payments & Wallets  
**Authoritative answer:** We place an authorization at checkout and capture payment when each shipment leaves the warehouse; partial shipments create partial captures and refunds if applicable.  
**Required keywords in LLM response:** ["authorization", "capture", "partial shipments"]  
**Forbidden content:** ["charged immediately for full amount always"]

### Q08: Can promo codes be combined, and when are discounts applied?
**Expected retrieval context:** Document 7: Discounts & Promo Codes  
**Authoritative answer:** Codes generally cannot be combined; the best eligible one applies. Discounts are calculated before tax and shipping, and exclusions may apply.  
**Required keywords in LLM response:** ["cannot be combined", "before tax", "exclusions"]  
**Forbidden content:** ["all codes stack", "after tax"]

### Q09: What notification channels can I manage, and are transactional emails optional?
**Expected retrieval context:** Document 8: Notifications  
**Authoritative answer:** You can manage email and push notifications for Marketing, Product Updates, and Transactional categories. Transactional emails (like receipts) can’t be fully disabled due to legal obligations.  
**Required keywords in LLM response:** ["email and push", "Transactional", "cannot be fully disabled"]  
**Forbidden content:** ["turn off all emails", "SMS required"]

### Q10: What do I need to become a seller and how fast is verification?
**Expected retrieval context:** Document 9: Seller Onboarding  
**Authoritative answer:** Provide legal business name, tax ID, payout banking, and accept the Seller Agreement. Identity verification may be required and typically completes within hours, up to 2 business days.  
**Required keywords in LLM response:** ["tax ID", "payout", "Seller Agreement", "2 business days"]  
**Forbidden content:** ["instant approval always"]

### Q11: Name three prohibited listing behaviors.
**Expected retrieval context:** Document 10: Listing Policy  
**Authoritative answer:** Prohibited behaviors include selling counterfeit items, keyword stuffing or duplicate listings to game search, and using images with watermarks or contact info.  
**Required keywords in LLM response:** ["counterfeit", "duplicate listings", "watermarks"]  
**Forbidden content:** ["any listing allowed"]

### Q12: Who can leave reviews and what happens to policy-violating reviews?
**Expected retrieval context:** Document 11: Ratings & Reviews Policy  
**Authoritative answer:** Only verified buyers can review. Spam, profanity, or off-topic content is filtered; violating reviews are removed and do not affect the rating.  
**Required keywords in LLM response:** ["verified buyers", "filtered", "removed"]  
**Forbidden content:** ["anyone can review", "violations stay up"]

### Q13: How are non-delivery disputes handled?
**Expected retrieval context:** Document 12: Disputes & Chargebacks  
**Authoritative answer:** Contact the seller first; if unresolved in 3 business days, escalate to Support. We verify carrier status and address accuracy and proceed per evidence. Bank chargebacks pause our process while we submit evidence.  
**Required keywords in LLM response:** ["3 business days", "carrier status", "chargebacks pause"]  
**Forbidden content:** ["automatic refund always"]

### Q14: How can I request data export or deletion?
**Expected retrieval context:** Document 13: Privacy & Data  
**Authoritative answer:** Go to Account → Privacy to request a data export or deletion. Deletion removes personal identifiers but may retain aggregated order metrics to meet legal obligations.  
**Required keywords in LLM response:** ["Account → Privacy", "export", "deletion"]  
**Forbidden content:** ["we sell personal data", "cannot delete"]

### Q15: What security practices are recommended for my account?
**Expected retrieval context:** Document 14: Security & 2FA  
**Authoritative answer:** Enable 2FA with an authenticator app, use strong passwords, review active sessions, and respond to unusual activity alerts. Support will never ask for one-time codes.  
**Required keywords in LLM response:** ["2FA", "authenticator app", "one-time codes"]  
**Forbidden content:** ["share codes with support"]

### Q16: How are taxes and duties handled for international orders?
**Expected retrieval context:** Document 15: Taxes & VAT  
**Authoritative answer:** Taxes are estimated at checkout by destination and category. Some lanes support Delivered-Duty-Paid (collected at checkout); otherwise duties may be collected on delivery by the carrier.  
**Required keywords in LLM response:** ["estimated at checkout", "Delivered-Duty-Paid", "carrier"]  
**Forbidden content:** ["no taxes ever"]

### Q17: What happens if the carrier marks delivered but I can’t find my package?
**Expected retrieval context:** Document 4: Shipping & Delivery  
**Authoritative answer:** We ask you to check with neighbors and wait 24 hours, then we open a carrier investigation and proceed based on the result.  
**Required keywords in LLM response:** ["24 hours", "carrier investigation"]  
**Forbidden content:** ["instant refund always"]

### Q18: How fast is return inspection and refund timing?
**Expected retrieval context:** Document 5: Returns & Refunds  
**Authoritative answer:** After the carrier scans the return, inspection at our facility typically completes within 2–5 business days; refunds then post to the original payment method in about 3–7 business days depending on the bank.  
**Required keywords in LLM response:** ["2–5 business days", "3–7 business days", "original payment method"]  
**Forbidden content:** ["cash refund at store"]

### Q19: Are gift cards discounted or taxed?
**Expected retrieval context:** Document 6: Payments & Wallets + Document 7: Discounts & Promo Codes + Document 15: Taxes & VAT  
**Authoritative answer:** Gift cards are not discounted by promo codes. They’re typically not taxed when purchased but are taxed when redeemed on taxable items.  
**Required keywords in LLM response:** ["not discounted", "not taxed when purchased", "taxed when redeemed"]  
**Forbidden content:** ["stack with all codes"]

### Q20: Can I disable all emails?
**Expected retrieval context:** Document 8: Notifications  
**Authoritative answer:** You can manage categories, but transactional emails like receipts and password resets cannot be fully disabled due to legal obligations.  
**Required keywords in LLM response:** ["manage categories", "transactional emails", "cannot be fully disabled"]  
**Forbidden content:** ["turn off everything"]

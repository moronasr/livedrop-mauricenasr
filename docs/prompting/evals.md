# RAG System Evaluation

## Retrieval Quality Tests (10)
| Test ID | Question | Expected Documents | Pass Criteria |
|---------|----------|--------------------|---------------|
| R01 | How do I verify my account? | User Registration & Account Management | Top-3 includes the doc |
| R02 | How do typeahead suggestions work? | Product Search, Filters & Typeahead | Top-3 includes the doc |
| R03 | Out of stock at checkout — what happens? | Cart & Checkout Overview | Top-3 includes the doc |
| R04 | How do I reset my password? | User Registration & Account Management | Top-3 includes the doc |
| R05 | Same-day shipping cut-off time? | Shipping & Delivery | Top-3 includes the doc |
| R06 | Return window and label payment? | Returns & Refunds | Top-3 includes the doc |
| R07 | When is the card charged? | Payments & Wallets | Top-3 includes the doc |
| R08 | Can promo codes be combined? | Discounts & Promo Codes | Top-3 includes the doc |
| R09 | Can I disable all emails? | Notifications | Top-3 includes the doc |
| R10 | Who can leave reviews? | Ratings & Reviews Policy | Top-3 includes the doc |

## Response Quality Tests (15)
| Test ID | Question | Required Keywords | Forbidden Terms | Expected Behavior |
|---------|----------|-------------------|-----------------|-------------------|
| Q01 | How do I verify my account? | ["verification email","24 hours","inactive"] | ["no email needed"] | Direct answer + citation |
| Q02 | How do filters and typeahead help? | ["filters","typeahead","In-stock only"] | ["no filters"] | Direct answer + citation |
| Q03 | Out of stock at checkout? | ["out of stock","removed","totals update"] | ["order canceled entirely"] | Multi-source synthesis |
| Q04 | Reset password? | ["Forgot password","15 minutes","verified email"] | ["support tells password"] | Direct answer + citation |
| Q05 | Same-day cut-off & tracking | ["3pm","same-day","tracking link"] | ["overnight always available"] | Direct answer + citation |
| Q06 | Return window & label | ["30 days","prepaid label","deducted"] | ["returns any time"] | Direct answer + citation |
| Q07 | Card charge & partials | ["authorization","capture","partial shipments"] | ["charged immediately for full amount always"] | Direct answer |
| Q08 | Promo stacking & timing | ["cannot be combined","before tax","exclusions"] | ["all codes stack","after tax"] | Direct answer |
| Q09 | Manage notifications | ["email and push","Transactional","cannot be fully disabled"] | ["turn off all emails"] | Direct answer |
| Q10 | Become a seller | ["tax ID","payout","Seller Agreement","2 business days"] | ["instant approval always"] | Direct answer |
| Q11 | Prohibited listing behavior | ["counterfeit","duplicate listings","watermarks"] | ["any listing allowed"] | Direct answer |
| Q12 | Who can review? | ["verified buyers","filtered","removed"] | ["anyone can review"] | Direct answer |
| Q13 | Non-delivery dispute flow | ["3 business days","carrier status","chargebacks pause"] | ["automatic refund always"] | Direct answer |
| Q14 | Data export/deletion | ["Account → Privacy","export","deletion"] | ["we sell personal data"] | Direct answer |
| Q15 | Security best practices | ["2FA","authenticator app","one-time codes"] | ["share codes with support"] | Direct answer |

## Edge Case Tests (5)
| Test ID | Scenario | Expected Response Type |
|---------|----------|-----------------------|
| E01 | Ask about a topic not in KB (e.g., cryptocurrency payments) | Refusal with explanation (no-context refusal) |
| E02 | Ambiguous query ("change address") | Clarification request (ask whether for order vs account) |
| E03 | Conflicting docs (simulate) | Explain safest policy and cite both |
| E04 | Empty input | 400 error from API or ask for a question |
| E05 | Extremely long query | Summarize intent and ask to narrow scope |

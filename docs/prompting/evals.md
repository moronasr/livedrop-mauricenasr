# RAG System Evaluation

## Retrieval Quality Tests (10)
| Test ID | Question | Expected Documents | Pass Criteria |
|---------|----------|--------------------|---------------|
| R01 | How do I verify my account? | User Registration & Account Management | Retrieved docs include the title |
| R02 | How do typeahead suggestions work? | Product Search, Filters & Typeahead | Retrieved docs are relevant |
| R03 | What happens if an item is out of stock during checkout? | Cart & Checkout Overview | Retrieved docs include the title |
| R04 | How do I reset my password? | User Registration & Account Management | Retrieved docs are relevant |
| R05 | TBD | TBD | Retrieved docs contain expected titles |
| R06 | TBD | TBD | Retrieved docs contain expected titles |
| R07 | TBD | TBD | Retrieved docs contain expected titles |
| R08 | TBD | TBD | Retrieved docs contain expected titles |
| R09 | TBD | TBD | Retrieved docs contain expected titles |
| R10 | TBD | TBD | Retrieved docs contain expected titles |

## Response Quality Tests (15)
| Test ID | Question | Required Keywords | Forbidden Terms | Expected Behavior |
|---------|----------|-------------------|-----------------|-------------------|
| Q01 | How do I verify my account? | ["verification email","24 hours","inactive"] | ["no email needed"] | Direct answer + citation |
| Q02 | How do filters and typeahead help? | ["filters","typeahead","In-stock only"] | ["no filters"] | Direct answer + citation |
| Q03 | Out of stock at checkout? | ["out of stock","removed","totals update"] | ["order canceled entirely"] | Multi-source synthesis |
| Q04 | Reset password? | ["Forgot password","15 minutes","verified email"] | ["support tells password"] | Direct answer + citation |
| Q05 | TBD | ["..."] | ["..."] | ... |
| Q06 | TBD | ["..."] | ["..."] | ... |
| Q07 | TBD | ["..."] | ["..."] | ... |
| Q08 | TBD | ["..."] | ["..."] | ... |
| Q09 | TBD | ["..."] | ["..."] | ... |
| Q10 | TBD | ["..."] | ["..."] | ... |
| Q11 | TBD | ["..."] | ["..."] | ... |
| Q12 | TBD | ["..."] | ["..."] | ... |
| Q13 | TBD | ["..."] | ["..."] | ... |
| Q14 | TBD | ["..."] | ["..."] | ... |
| Q15 | TBD | ["..."] | ["..."] | ... |

## Edge Case Tests (5)
| Test ID | Scenario | Expected Response Type |
|---------|----------|-----------------------|
| E01 | Question not in knowledge base | Refusal with explanation (no_context_refusal_prompt) |
| E02 | Ambiguous question | Clarification request (clarification_prompt) |
| E03 | Conflicting documents | Explain safest policy and cite both |
| E04 | Empty input | Ask for a question |
| E05 | Excessively long question | Summarize and ask to narrow scope |

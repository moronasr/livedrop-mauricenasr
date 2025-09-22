# Cost Model

## Assumptions (from assignment defaults)
- Model: **Llama 3.1 8B Instruct** at **$0.05/1K prompt**, **$0.20/1K completion**  (example price)  
- Support assistant (miss): Avg tokens in: **1200**, out: **300**, Requests/day: **1000**, Cache hit: **30%**  
- Typeahead (miss): Avg tokens in: **120**, out: **20**, Requests/day: **50000**, Cache hit: **70%**  

## Calculation
Cost/action = (tokens_in/1000 * prompt_price) + (tokens_out/1000 * completion_price)  
Daily cost = Cost/action * Requests/day * (1 - cache_hit_rate)

### Support assistant
- Cost/action = (1.2 * 0.05) + (0.3 * 0.20) = **$0.06 + $0.06 = $0.12**
- Daily cost = $0.12 * 1000 * (1 - 0.30) = **$84.00 / day**

### Typeahead
- Cost/action = (0.12 * 0.05) + (0.02 * 0.20) = **$0.006 + $0.004 = $0.010**
- Daily cost = $0.010 * 50000 * (1 - 0.70) = **$150.00 / day**

## Cost levers if over budget
- Trim context (e.g., Support 1200 → 800 tokens)  
- More aggressive cache on Typeahead miss path  
- Use smaller/cheaper models for low-risk prefixes

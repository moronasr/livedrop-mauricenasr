#!/usr/bin/env python3
import sys, json, time, requests
from datetime import datetime

def prompt_base_url():
    url = input("Enter your ngrok base URL (e.g., https://abcd-1234.ngrok-free.app): ").strip().rstrip("/")
    return url

def main():
    base = prompt_base_url()
    log_path = "chat_log.jsonl"
    print("Type 'exit' to quit.")
    while True:
        q = input("> ").strip()
        if not q:
            continue
        if q.lower() in ("exit","quit"):
            print("Bye!")
            break
        try:
            print("[Retrieving context & calling LLM...]")
            t0 = time.time()
            resp = requests.post(f"{base}/chat", json={"query": q}, timeout=60)
            latency = (time.time() - t0) * 1000
            if resp.status_code != 200:
                print(f"[Error {resp.status_code}] {resp.text}")
                continue
            data = resp.json()
            answer = data.get("answer","(no answer)")
            sources = ", ".join(data.get("sources", [])) or "None"
            conf = data.get("confidence","unknown")
            print(f"\nAnswer: {answer}\nSources: {sources}\nConfidence: {conf}\n(p95-ish latency: {latency:.0f} ms)\n")
            with open(log_path,"a",encoding="utf-8") as f:
                f.write(json.dumps({"ts": datetime.utcnow().isoformat(), "q": q, "resp": data}, ensure_ascii=False) + "\n")
        except requests.exceptions.RequestException as e:
            print(f"[Connection error] {e}\nCheck your ngrok URL or notebook.")
        except Exception as e:
            print(f"[Unexpected error] {e}")

if __name__ == "__main__":
    main()

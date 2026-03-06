"""
Check that the environment is set up: tweepy, python-dotenv, and BEARER_TOKEN.
Run: python check_env.py
"""
import sys

def main():
    print("Checking environment...")
    try:
        import tweepy
        print("  OK: tweepy is installed")
    except ImportError:
        print("  ERROR: tweepy not found. Run: pip install tweepy")
        sys.exit(1)

    try:
        from dotenv import load_dotenv
        load_dotenv()
        print("  OK: python-dotenv is installed and .env loaded")
    except ImportError:
        print("  ERROR: python-dotenv not found. Run: pip install python-dotenv")
        sys.exit(1)

    import os
    token = os.getenv("BEARER_TOKEN")
    if not token or token == "your_bearer_token_here":
        print("  WARNING: BEARER_TOKEN is not set or still the placeholder.")
        print("  Create a .env file with BEARER_TOKEN=your_real_token")
        sys.exit(1)
    print("  OK: BEARER_TOKEN is set")
    print("\nAll set! You can run 02-first-request/main.py next.")

if __name__ == "__main__":
    main()

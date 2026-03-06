"""
First request to the Twitter API: authenticate and search recent tweets.
Run: python main.py
Requires: .env in this folder (or parent) with BEARER_TOKEN=...
"""
import os
from dotenv import load_dotenv
import tweepy

load_dotenv()
bearer = os.getenv("BEARER_TOKEN")
if not bearer or bearer == "your_bearer_token_here":
    print("Please set BEARER_TOKEN in a .env file. See 01-setup-env.")
    exit(1)

client = tweepy.Client(bearer_token=bearer)

# Search for recent tweets (free tier: limited volume)
response = client.search_recent_tweets(
    query="python programming -is:retweet lang:en",
    max_results=10,
    tweet_fields=["created_at"],
)

if not response.data:
    print("No tweets returned. Try another query or check your API access.")
    exit(0)

print(f"Found {len(response.data)} tweet(s):\n")
for tweet in response.data:
    text_preview = (tweet.text[:60] + "...") if len(tweet.text) > 60 else tweet.text
    print(f"  {tweet.id}  {tweet.created_at}")
    print(f"  {text_preview}\n")

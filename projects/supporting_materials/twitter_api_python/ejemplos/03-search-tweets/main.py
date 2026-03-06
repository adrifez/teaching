"""
Search recent tweets with query filters and get author usernames and metrics.
Run: python main.py
Requires: .env with BEARER_TOKEN=...
"""
import os
from dotenv import load_dotenv
import tweepy

load_dotenv()
client = tweepy.Client(bearer_token=os.getenv("BEARER_TOKEN"))

response = client.search_recent_tweets(
    query="data science -is:retweet lang:en",
    max_results=10,
    tweet_fields=["created_at", "public_metrics"],
    user_fields=["username"],
    expansions=["author_id"],
)

tweets_list = []
users = {}
if response.includes and response.includes.get("users"):
    users = {u.id: u for u in response.includes["users"]}

for tweet in response.data or []:
    author = users.get(tweet.author_id)
    tweets_list.append({
        "id": tweet.id,
        "text": tweet.text,
        "created_at": tweet.created_at,
        "username": author.username if author else None,
        "like_count": tweet.public_metrics.get("like_count", 0) if tweet.public_metrics else 0,
    })

print(f"Collected {len(tweets_list)} tweets:\n")
for t in tweets_list:
    print(f"  @{t['username']} | likes: {t['like_count']} | {t['text'][:50]}...")

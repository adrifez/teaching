"""
Search recent tweets and save results to a CSV file (for Excel or Google Sheets).
Run: python main.py
Output: tweets.csv in this folder.
Requires: .env with BEARER_TOKEN=...
"""
import os
import csv
from dotenv import load_dotenv
import tweepy

load_dotenv()
client = tweepy.Client(bearer_token=os.getenv("BEARER_TOKEN"))

response = client.search_recent_tweets(
    query="business analytics -is:retweet lang:en",
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
        "id": str(tweet.id),
        "text": tweet.text,
        "created_at": str(tweet.created_at),
        "username": author.username if author else "",
        "like_count": tweet.public_metrics.get("like_count", 0) if tweet.public_metrics else 0,
    })

out_path = "tweets.csv"
with open(out_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(
        f,
        fieldnames=["id", "text", "created_at", "username", "like_count"],
    )
    writer.writeheader()
    writer.writerows(tweets_list)

print(f"Saved {len(tweets_list)} tweets to {out_path}")
print("Open it in Excel or Google Sheets for analysis.")

---
theme: seriph
background: '#1a1a1a'
class: text-center
transition: slide-left
mdc: true
title: Python and the Twitter API
info: |
  ## Getting data from Twitter with Python
  A beginner-friendly guide for business and social research.
duration: 40min
---

<style>
:global(:root) {
  --slidev-transition-duration: 0.2s;
}
.slidev-layout h1,
.slidev-layout h2 { color: #ffffff !important; }

.slidev-layout .slide-callout {
  background-color: #2d2d2d;
  color: #fff;
}
.slidev-layout .slide-preview-box {
  background-color: #1e1e1e;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.3);
}
html:not(.dark) .slidev-layout .slide-callout {
  background-color: #e5e7eb;
  color: #1a1a1a;
}
html:not(.dark) .slidev-layout .slide-preview-box {
  background-color: #f4f4f5;
  color: #1a1a1a;
  border-color: #e5e7eb;
}
</style>

# Python and the Twitter API

## Getting data from Twitter for research and analysis

<!--
Audience: Master's student, little Python, business background. Focus on clear steps, API keys, first request, search, and exporting to CSV for use in Excel/Sheets.
-->

---
layout: default
---

# Structure of this session

<div class="grid grid-cols-1 gap-4 text-xl">

1. Why get data from Twitter?
2. What you need: accounts and keys
3. Just enough Python to follow along
4. Setting up your environment
5. Your first request to the Twitter API
6. Searching tweets and saving results
7. Exporting to CSV for analysis
8. Rate limits and good practices
9. Resources and next steps

</div>

<!--
Logical flow: motivation → prerequisites → minimal Python → setup → first call → search → export → limits → resources.
-->

---
layout: default
---

# How to use the examples

<div class="overflow-x-auto">

| Folder | Concept |
|--------|---------|
| `01-setup-env` | Virtual environment, install tweepy & python-dotenv, `.env` for keys |
| `02-first-request` | Authenticate with Bearer Token, search recent tweets |
| `03-search-tweets` | Query with filters, get usernames and metrics, build a list |
| `04-export-csv` | Save tweet list to CSV for Excel/Sheets |

</div>

<div class="mt-6">

In each folder, create a <code>.env</code> with <code>BEARER_TOKEN=your_token</code>, then run <code>python main.py</code> (or the script named in the folder).

</div>

---
layout: section
class: text-center
---

# WHY GET DATA FROM TWITTER?

---
layout: default
---

# Why use the Twitter API?

<div class="grid grid-cols-1 gap-6 text-xl">

- **Research:** sentiment, trends, public opinion, crisis communication.
- **Business:** brand mentions, competitor monitoring, campaign reach.
- **Policy / NGOs:** public debate, misinformation, engagement metrics.

</div>

<div class="mt-6 p-4 rounded-lg slide-callout text-left">
  <div class="font-bold mb-2">The API gives you structured data</div>
  <p class="m-0">You get tweets, users, and metadata in a format you can store (e.g. CSV, JSON) and analyse in Excel, Python, or other tools — instead of copying from the website by hand.</p>
</div>

<!--
Emphasise value for business/research: reproducible, scalable, compliant with Twitter's terms.
-->

---
layout: section
class: text-center
---

# WHAT YOU NEED

---
layout: default
---

# Prerequisites: accounts and keys

<div class="grid grid-cols-1 gap-4 text-xl">

1. **Twitter / X account** — to sign in to the developer portal.
2. **Developer account** — free at [developer.twitter.com](https://developer.twitter.com). Choose “Hobby” or “Making a bot” to start.
3. **A “Project” and “App”** — inside the portal you create an app to get **API keys**.
4. **Keys you will use:**
   - **API Key** (Consumer Key) and **API Key Secret** (Consumer Secret)
   - **Bearer Token** — used for read-only requests (e.g. search, get tweets).

</div>

<div class="mt-6 p-4 rounded-lg slide-callout text-left">
  <strong>Important:</strong> Never share these keys or commit them to Git. We will store them in a <code>.env</code> file that stays on your computer.
</div>

<!--
Keep it simple: one app, Bearer Token for read-only. No OAuth 1.0a for this intro.
-->

---
layout: section
class: text-center
---

# JUST ENOUGH PYTHON

---
layout: default
---

# Python concepts we will use

<div class="text-xl mb-4">You only need a few ideas to run the examples:</div>

<div class="slide-preview-box rounded-lg p-4 text-left text-base">
  <ul class="m-0 list-disc pl-6 space-y-2">
    <li><strong>Variables</strong> — names for values, e.g. <code>name = "Twitter"</code></li>
    <li><strong>Lists</strong> — ordered collections, e.g. <code>tweets = [ ... ]</code></li>
    <li><strong>Loops</strong> — <code>for tweet in tweets:</code> to go through each item</li>
    <li><strong>Dictionaries</strong> — key–value pairs, e.g. <code>{"id": 123, "text": "Hello"}</code></li>
    <li><strong>Reading/writing files</strong> — we will use the <code>csv</code> and <code>json</code> modules to save data.</li>
  </ul>
</div>

<div class="mt-4 p-4 rounded-lg slide-callout text-left">
  You can run every example by opening a terminal in the example folder and typing: <code>python main.py</code> (or the script name shown in the slide).
</div>

<!--
Reassure non-technical audience: we only use these few concepts; the rest is copy-paste and run.
-->

---
layout: default
---

# Example: variables, list, loop

<div class="slide-preview-box rounded-lg p-4 mb-4">

```python
# Variables and a list of “tweet-like” dictionaries
query = "climate"
tweets = [
    {"id": 1, "text": "First tweet about climate.", "author": "user1"},
    {"id": 2, "text": "Another climate post.", "author": "user2"},
]

for tweet in tweets:
    print(tweet["author"], ":", tweet["text"])
```

</div>

<div class="slide-preview-box rounded-lg p-4 text-sm">
  <strong>Output:</strong><br/>
  user1 : First tweet about climate.<br/>
  user2 : Another climate post.
</div>

<div class="absolute bottom-6 left-12 right-12 text-sm opacity-90"><strong>Full example:</strong> <code>02-first-request</code></div>

<!--
Same structure as real API response: list of dicts with id, text, author. Prepares for the real code.
-->

---
layout: section
class: text-center
---

# SETTING UP YOUR ENVIRONMENT

---
layout: default
---

# Step 1: Python and a project folder

<div class="grid grid-cols-1 gap-4 text-xl">

- **Python 3.8+** — Check with <code>python3 --version</code> in a terminal. If needed, install from [python.org](https://www.python.org/downloads/).
- Create a folder for this project, e.g. <code>twitter_project</code>, and open a terminal in that folder.

</div>

<div class="mt-6 p-4 rounded-lg slide-callout text-left">
  <strong>Tip:</strong> We will use a “virtual environment” so the packages we install don’t affect other projects. Commands: <code>python3 -m venv venv</code>, then <code>source venv/bin/activate</code> (Mac/Linux) or <code>venv\Scripts\activate</code> (Windows).
</div>

<!--
One slide only for venv; details are in the 01-setup-env example.
-->

---
layout: default
---

# Step 2: Install libraries and keep keys safe

<div class="text-xl mb-4">In your activated virtual environment, run:</div>

```bash
pip install tweepy python-dotenv
```

<div class="mt-6 grid grid-cols-1 gap-4 text-lg">

- **tweepy** — Python library that talks to the Twitter API (handles authentication and requests).
- **python-dotenv** — Loads your API keys from a <code>.env</code> file so they never go into your code.

</div>

<div class="mt-6 p-4 rounded-lg slide-callout text-left">
  Create a file named <code>.env</code> in your project folder with your Bearer Token:<br/>
  <code>BEARER_TOKEN=your_bearer_token_here</code><br/>
  Add <code>.env</code> to <code>.gitignore</code> so it is never committed.
</div>

<div class="absolute bottom-6 left-12 right-12 text-sm opacity-90"><strong>Full example:</strong> <code>01-setup-env</code></div>

---
layout: section
class: text-center
---

# YOUR FIRST REQUEST

---
layout: default
---

# Authenticate and call the API

<div class="text-xl mb-4">Use the Bearer Token to authenticate. Then request something simple (e.g. your user or recent tweets).</div>

<div class="slide-preview-box rounded-lg p-4 text-sm overflow-x-auto">

```python
import os
from dotenv import load_dotenv
import tweepy

load_dotenv()
client = tweepy.Client(bearer_token=os.getenv("BEARER_TOKEN"))

# Get your own user (requires OAuth in production; here we use a simple lookup)
# For search we only need Bearer Token:
response = client.search_recent_tweets(query="python", max_results=10)
if response.data:
    for tweet in response.data:
        print(tweet.id, tweet.text[:50], "...")
```

</div>

<div class="mt-4 p-4 rounded-lg slide-callout text-left">
  <strong>Note:</strong> Free tier has limits (e.g. a small number of tweets per month). Search “Recent” is available on the free tier with limits.
</div>

<div class="absolute bottom-6 left-12 right-12 text-sm opacity-90"><strong>Full example:</strong> <code>02-first-request</code></div>

---
layout: default
---

# What you get back

<div class="text-xl mb-4">The API returns structured data. Each tweet has:</div>

<div class="slide-preview-box rounded-lg p-4 text-left text-base">

- <strong>id</strong> — unique tweet ID<br/>
- <strong>text</strong> — the tweet content<br/>
- <strong>created_at</strong> — timestamp<br/>
- <strong>author_id</strong> — user ID of the author (you can resolve to username with another call if needed)<br/>
- Optional: attachments, public metrics (likes, retweets), etc., depending on what you request.

</div>

<div class="mt-4 p-4 rounded-lg slide-callout text-left">
  We will put the fields you need (e.g. id, text, created_at, author_id) into a list of dictionaries, then save them to CSV or JSON.
</div>

---
layout: section
class: text-center
---

# SEARCHING TWEETS

---
layout: default
---

# Search recent tweets

<div class="text-xl mb-4">Use <code>search_recent_tweets</code> with a query string. You can use Twitter’s query language (keywords, hashtags, filters).</div>

<div class="slide-preview-box rounded-lg p-4 text-sm overflow-x-auto">

```python
response = client.search_recent_tweets(
    query="climate change -is:retweet lang:en",
    max_results=10,
    tweet_fields=["created_at", "public_metrics"],
    user_fields=["username"],
    expansions=["author_id"],
)
```

</div>

<div class="mt-4 p-4 rounded-lg slide-callout text-left">
  <code>-is:retweet</code> excludes retweets. <code>lang:en</code> limits to English. <code>expansions=["author_id"]</code> lets you get usernames in the same response.
</div>

<div class="absolute bottom-6 left-12 right-12 text-sm opacity-90"><strong>Full example:</strong> <code>03-search-tweets</code></div>

---
layout: default
---

# Building a list of results

<div class="slide-preview-box rounded-lg p-4 text-sm overflow-x-auto">

```python
tweets_list = []
users = {u.id: u for u in (response.includes.get("users", []) or [])}

for tweet in response.data or []:
    author = users.get(tweet.author_id)
    tweets_list.append({
        "id": tweet.id,
        "text": tweet.text,
        "created_at": tweet.created_at,
        "username": author.username if author else None,
        "like_count": tweet.public_metrics["like_count"] if tweet.public_metrics else 0,
    })
```

</div>

<div class="mt-4 text-lg">Then you can pass <code>tweets_list</code> to a CSV or JSON writer.</div>

<div class="absolute bottom-6 left-12 right-12 text-sm opacity-90"><strong>Full example:</strong> <code>03-search-tweets</code>, <code>04-export-csv</code></div>

---
layout: section
class: text-center
---

# EXPORTING TO CSV

---
layout: default
---

# Save results for Excel or Sheets

<div class="text-xl mb-4">Once you have a list of dictionaries (e.g. <code>tweets_list</code>), use Python’s <code>csv</code> module to write a file you can open in Excel or Google Sheets.</div>

<div class="slide-preview-box rounded-lg p-4 text-sm overflow-x-auto">

```python
import csv

with open("tweets.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["id", "text", "created_at", "username", "like_count"])
    writer.writeheader()
    writer.writerows(tweets_list)
```

</div>

<div class="mt-4 p-4 rounded-lg slide-callout text-left">
  <strong>UTF-8</strong> ensures special characters and emojis in tweets are saved correctly.
</div>

<div class="absolute bottom-6 left-12 right-12 text-sm opacity-90"><strong>Full example:</strong> <code>04-export-csv</code></div>

---
layout: section
class: text-center
---

# RATE LIMITS AND GOOD PRACTICES

---
layout: default
---

# Stay within limits and terms

<div class="grid grid-cols-1 gap-4 text-xl">

- **Rate limits** — The free tier allows a limited number of requests per 15-minute window. Tweepy can raise errors when you hit limits; handle them (e.g. wait and retry, or stop and try later).
- **Don’t store more than you need** — Keep only the fields required for your analysis (e.g. id, text, date, author, metrics).
- **Respect Twitter’s terms** — Use data for research or personal analysis; don’t redistribute raw tweet datasets or spam.

</div>

<div class="mt-6 p-4 rounded-lg slide-callout text-left">
  <strong>Tip:</strong> Add a short <code>time.sleep(1)</code> between requests when looping (e.g. when paginating) to avoid hitting rate limits too quickly.
</div>

---
layout: section
class: text-center
---

# RESOURCES

---
layout: default
---

# Where to go next

<div class="grid grid-cols-1 gap-4 text-xl">

- **Twitter API docs:** [developer.twitter.com/en/docs](https://developer.twitter.com/en/docs) — reference for endpoints, query language, and limits.
- **Tweepy docs:** [docs.tweepy.org](https://docs.tweepy.org) — Python client and examples.
- **Query language:** Use “Build a query” in the developer portal to learn operators (<code>from:</code>, <code>has:hashtags</code>, <code>until:</code>, etc.).

</div>

<div class="mt-8 p-4 rounded-lg slide-callout text-left">
  <strong>Examples in this deck:</strong> <code>01-setup-env</code>, <code>02-first-request</code>, <code>03-search-tweets</code>, <code>04-export-csv</code>. Run from each folder with <code>python main.py</code> (or the script name in the folder’s README). Put your <code>.env</code> in the same folder or in the parent <code>ejemplos</code> folder.
</div>

# Twitter API with Python — Supporting materials

This folder supports the slide deck **Python and the Twitter API** (for Master's students with little Python experience).

## Quick start

1. Get a **Bearer Token** from [developer.twitter.com](https://developer.twitter.com) (create a project and app, then copy the Bearer Token).
2. Go to **`ejemplos/01-setup-env`** and follow the README to create a virtual environment, install dependencies, and create a `.env` file with `BEARER_TOKEN=your_token`.
3. Run the examples in order: `02-first-request`, `03-search-tweets`, `04-export-csv` — in each folder run `python main.py` (with `.env` in that folder or in `ejemplos/`).

## Contents

- **`ejemplos/01-setup-env`** — Environment setup and `check_env.py` to verify keys.
- **`ejemplos/02-first-request`** — First API call: search recent tweets.
- **`ejemplos/03-search-tweets`** — Search with filters, usernames, and metrics.
- **`ejemplos/04-export-csv`** — Save results to CSV for Excel/Sheets.

Slides: `projects/generated_slides/twitter_api_python.md`.

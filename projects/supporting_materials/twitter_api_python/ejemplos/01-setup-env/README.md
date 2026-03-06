# 01-setup-env — Environment setup

This folder shows how to set up Python and keep your API keys safe.

## Steps

1. **Create a virtual environment** (in this folder or the parent `ejemplos` folder):
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # Mac/Linux
   # or: venv\Scripts\activate   # Windows
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
   Or from the parent folder: `pip install -r ../requirements.txt` if you have a shared `requirements.txt` there.

3. **Create a `.env` file** (copy from `.env.example` and fill in your token):
   ```
   BEARER_TOKEN=your_bearer_token_here
   ```
   Never commit `.env` to Git. Add `.env` to `.gitignore`.

4. **Run the check script:**
   ```bash
   python check_env.py
   ```
   It will confirm that `tweepy` and `python-dotenv` are installed and that `BEARER_TOKEN` is set (without calling the API).

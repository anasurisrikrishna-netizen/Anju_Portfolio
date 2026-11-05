# Miss Asia Model Portfolio

- index.html: the portfolio (single file, image embedded). Edit the `P` object near the bottom to add your name, stats, journey, platform and contact links. Values in [brackets] are treated as "not provided".
- avatar.webp: the portrait used on the page (already embedded in index.html).
- backend/: AI Recruiter API (Node + Express + OpenAI SDK).

## Run the backend
1. cd backend
2. cp .env.example .env  (then put your real OPENAI_API_KEY in .env; never commit it)
3. npm install
4. npm start
5. Update backend/knowledge.json with verified facts.

## Notes
- In index.html the chat uses Claude's built-in sample capability, which works only on claude.ai. For your own hosting, change the `ask()` function to POST {message, history} to /api/ai-recruiter/chat and show `answer`.
- Set ALLOWED_ORIGIN in .env to your production domain.
- Not tested: backend with a real key, and production deployment.

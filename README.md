# Miss Asia Model Portfolio

- index.html: the portfolio (single file, image embedded). Edit the `P` object near the bottom to add your name, stats, journey, platform and contact links. Values in [brackets] are treated as "not provided".
- avatar.webp: the portrait used on the page (already embedded in index.html).
- backend/: AI Recruiter API (Node + Express + OpenAI SDK).

## Run the backend
1. `cd backend`
2. Copy `.env.example` to `.env` and set your real `OPENAI_API_KEY` (never commit it).
3. Run `npm install`, then `npm start`.
4. Update `backend/knowledge.json` with verified facts.

## Deploy to Vercel
- Keep the Vercel project Root Directory set to the repository root. `vercel.json` selects Vercel's "Other" preset so the static portfolio and `api/ai-recruiter/chat.js` function deploy without Express app auto-detection.
- Add `OPENAI_API_KEY` in Vercel Project Settings → Environment Variables. `OPENAI_MODEL` and `ALLOWED_ORIGIN` are optional.
- Redeploy after setting environment variables. The portfolio chat posts to `/api/ai-recruiter/chat`.
- The AI Recruiter is limited to five questions per chat and answers only portfolio and booking-related questions. It replies in the visitor's language when supported, and cannot confirm appointments.

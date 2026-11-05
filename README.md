# Miss Asia Model Portfolio

- index.html: the portfolio (single file, image embedded). Edit the `P` object near the bottom to add your name, stats, journey, platform and contact links. Values in [brackets] are treated as "not provided".
- avatar.webp: the portrait used on the page (already embedded in index.html).
- backend/: AI Recruiter API (Node + Express + Google Gemini API).

## Run the backend
1. `cd backend`
2. Copy `.env.example` to `.env` and set your real `GEMINI_API_KEY` from Google AI Studio (never commit it).
3. Run `npm install`, then `npm start`.
4. Update `backend/knowledge.json` with verified facts.

## Deploy to Vercel
- Keep the Vercel project Root Directory set to the repository root. `vercel.json` selects Vercel's "Other" preset so the static portfolio and `api/ai-recruiter/chat.js` function deploy without Express app auto-detection.
- Add `GEMINI_API_KEY` in Vercel Project Settings → Environment Variables. `GEMINI_MODEL` is optional (defaults to `gemini-3.5-flash-lite`); `ALLOWED_ORIGIN` is optional.
- Redeploy after setting environment variables. The portfolio chat posts to `/api/ai-recruiter/chat`.
- The AI Recruiter is limited to five questions per chat and answers only portfolio and booking-related questions. It replies in the visitor's language when supported, and cannot confirm appointments.

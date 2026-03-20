# StyleBot — AI Fashion Accessory Recommender

Upload an outfit photo. Get five styled accessory recommendations via Gemini Vision AI.

## Stack
React 19 · TypeScript · Vite 8 · Tailwind CSS 3 · Google Gemini 1.5 Flash

## Setup
1. `git clone https://github.com/Fr0sTnUb/AI-Chatbot && cd AI-Chatbot`
2. `npm install`
3. `cp .env.example .env.local` — paste your Gemini API key
4. `npm run dev` — opens on http://localhost:5173

## Get a Gemini API Key
1. Go to https://aistudio.google.com/app/apikey
2. Create a new key
3. Paste it in `.env.local` as `VITE_GEMINI_API_KEY=your_key`

## Architecture
```
src/api/analyze.ts       — Gemini API integration + response parser
src/hooks/useAnalyze.ts  — state machine for the analyze flow
src/components/          — Navbar, Hero, UploadPanel, Cards, Skeleton, Particles
src/types/index.ts       — shared TypeScript interfaces
```

## Features
- React 19 with useCallback, useState, discriminated union state machine
- Vite 8 with esbuild minification — sub-second HMR
- Animated dark glamour UI: shimmer gold, scan lines, rising particles
- Drag-and-drop upload (react-dropzone) with 5MB validation
- Structured Gemini prompt with parsed recommendations
- Typed error handling with user-friendly messages

---

*Dev by Fr0sTnUb · 2026*

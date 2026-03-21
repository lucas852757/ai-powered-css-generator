# AI-Powered CSS Generator

A small React app to generate HTML/CSS from text instructions using GitHub AI/OpenAI inference.

## 🚀 Overview

This app lets a user type a short visual instruction (for example, "blue ball jumping"), then clicks "Code generator" and receives a pure HTML + CSS answer from an AI model. The app shows:

- raw generated code in a viewer (`CodeViewer`)
- live preview in an iframe (`Action`)

### Main flow

- `Title`: app title
- `Description`: short app instruction text
- `Instructions`: user prompt input
- `CodeGenerator`: fetches code from AI at `codeFetcher.js`
- `CodeViewer`: shows generated snippet
- `Action`: renders `srcDoc` in `iframe`

## 🧩 Project structure

- `src/App.jsx` : orchestrates the UI state
- `src/Instructions.jsx` : prompt textarea
- `src/CodeGenerator.jsx` : triggers AI generation
- `src/codeFetcher.js` : OpenAI/GitHub inference request
- `src/CodeViewer.jsx` : displays generated code
- `src/Action.jsx` : iframe preview
- `src/index.css` : application styles

## ⚙️ Prerequisites

- Node.js 18+ (or compatible)
- npm
- GitHub AI token via `REACT_APP_GITHUB_TOKEN`

## 🛠️ Setup and run

1. Install dependencies:

```bash
npm install
```

2. Add your token (in `.env` or environment):

```bash
REACT_APP_GITHUB_TOKEN=your_token_here
```

3. Start development server:

```bash
npm start
```

4. Open: `http://localhost:3000`

## 🧪 Scripts

- `npm start`
- `npm run build`
- `npm test`
- `npm run eject`

## 📡 codeFetcher behavior

`src/codeFetcher.js` uses:

- endpoint: `https://models.github.ai/inference`
- model: `openai/gpt-4o`
- system prompt: strict "HTML + CSS only" response format

It sends the user text from `Instructions` to AI and returns `response.choices[0].message.content`.

## 🔧 Notes

- Must use `REACT_APP_GITHUB_TOKEN`, otherwise API fails.
- If preview is empty, confirm generated content is not blank and `CodeViewer` got the response.
- This is a proof-of-concept generator; you can extend with history, syntax highlighting, and saving.

## 📦 Improvements

- add prompt history and favorites
- handle generation loading state and errors elegantly
- use `PrismJS`/`Monaco` for code highlighting
- limit max token usage and prompt length

## 📝 License

MIT

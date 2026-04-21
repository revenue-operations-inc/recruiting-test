---
description: 
alwaysApply: true
---

# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this repo is

A **recruiting exercise scaffold**. Candidates receive this repo and build a sub-agent
system that, given an enriched contact, decides:

1. **Who on our side should reach out**, and
2. **What the message should say**.

**Both email and LinkedIn are fixed.** The system must be designed for both channels.
Channel is not a variable the candidate picks or passes in — every run produces outputs
for email and LinkedIn. The only real questions are who and what.

The repo itself does not implement that logic. It provides:

- `mock-sdr-api/` — a standalone workspace package that mocks the full data layer
  (target orgs, contacts, signals, prior interactions, the outbound team, closed-won
  deals, lifecycle messaging, meeting transcripts, a mock send endpoint). All data is
  in-memory TypeScript; every function is async with 50–200 ms simulated latency. See
  `mock-sdr-api/README.md` for the endpoint reference and a worked example.
- A minimal Next.js scaffold (fonts, typography tokens, a landing page with the brief)
  that candidates can optionally build a UI on top of — or ignore and write scripts.

**No similarity matching, scoring, sender selection, or message generation is included
in `mock-sdr-api` on purpose.** That is the candidate's job.

## Mandatory rules

### 1. Keep it minimal

This is a recruiting scaffold, not a product. Do not add new dependencies, frameworks,
or infrastructure unless explicitly asked. Do not re-introduce databases, ORMs,
background workers, or auth — the project was deliberately stripped of those.

### 2. 250 line maximum per source file

The mock dataset files in `mock-sdr-api/src/data/` are exempt. Split real code.

### 3. Typography

For UI, import from `@/components/typography`. See `CLAUDE.typography.md`.

### 4. Do not modify `mock-sdr-api/` unless asked

It is the candidate-facing contract. Changes there change the exercise.

## Project structure

```
.
├── CLAUDE.md                 # this file
├── CLAUDE.typography.md      # UI typography guidance
├── Makefile                  # `make dev` → shoreman
├── Procfile                  # single process: `bun run dev`
├── next.config.ts
├── package.json              # root workspace; includes mock-sdr-api
├── tailwind.config.ts
├── tsconfig.json
├── fonts/
│   ├── RetniSans/            # sans (body)
│   └── Signifier/            # serif (display)
├── public/
│   ├── icon.png
│   └── icon.svg
├── scripts/
│   └── shoreman.sh           # Procfile runner used by `make dev`
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx        # fonts + root metadata
│   │   └── page.tsx          # candidate-facing brief
│   ├── components/
│   │   └── typography/       # semantic type scale (Body, Heading1, typo, …)
│   └── lib/
│       └── utils.ts          # cn() — clsx + tailwind-merge
└── mock-sdr-api/             # standalone workspace package (see its README)
    ├── package.json
    ├── README.md
    ├── examples/walkthrough.ts
    └── src/
        ├── index.ts          # barrel — import from here
        ├── types.ts
        ├── api/              # endpoint implementations
        └── data/             # in-memory dataset
```

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Signifier (serif), Retni Sans (sans)
- **Package manager:** Bun (workspaces)
- **Model (suggested for candidates):** Claude via `@anthropic-ai/sdk` — but the
  scaffold does not pin a choice. Candidates pick whatever SDK/runtime they prefer.

## Development

```bash
bun install          # installs root + mock-sdr-api workspace
make dev             # starts Next dev server via shoreman (logs → dev.log)
make tail-log        # last 100 lines of dev.log (ANSI stripped)
make clean           # removes dev.log / dev-prev.log / .shoreman.pid
```

Shoreman pipes all stdout/stderr into `dev.log`. Previous session is preserved in
`dev-prev.log` on restart.

## Using the mock API

`mock-sdr-api` is a workspace package. Import by name:

```ts
import {
  getTargetContact,
  getTargetOrganization,
  getSignals,
  getPriorInteractions,
  getSenders,
  getClosedWonDeals,
  getClosedWonMessagingByDeal,
  getMeetingTranscript,
  sendMessage,
} from "mock-sdr-api";
```

Every function is async. `sendMessage` fails ~5% of the time
(`rate_limited` or `invalid_recipient`) — handle both.

Full endpoint reference, dataset notes, and a worked example live in
`mock-sdr-api/README.md`. Start there before writing any agent code.

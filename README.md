# Recruiting Exercise — Outbound Sub-Agent System

## The exercise

Given an **enriched contact** and a **list of senders**, design a sub-agent system that
decides:

1. **Who on our side should reach out**, and
2. **What the message should say**.

The system must be architected to work across **both email and LinkedIn**. Channel is
not an input to your agents and not a variable you pick from — every run produces
outputs for email *and* LinkedIn. The only real questions are **who** and **what**.

We care more about **how you string agents together** than polished copy. The
architecture, where you split responsibility, what each sub-agent receives as context,
and how the pieces compose across channels — that's the work.

## What's provided

- **`mock-sdr-api/`** — a mock data layer for an AI SDR targeting mortgage lenders.
  Enriched orgs and contacts, buying signals, prior outreach, the outbound team,
  closed-won deals, full lifecycle messaging, meeting transcripts, and a mock send
  endpoint. All in-memory TypeScript with 50–200 ms simulated latency. `sendMessage`
  fails ~5% of the time (`rate_limited` | `invalid_recipient`) — handle both.
- **A minimal Next.js scaffold** (fonts, typography tokens, landing page). Build a UI
  on top or ignore it and write scripts — up to you.

**No similarity matching, scoring, sender selection, or message generation is
included.** That's the part you build.

See `mock-sdr-api/src/index.ts` for the exported endpoints and
`mock-sdr-api/examples/walkthrough.ts` for a worked example calling each one.

## Inputs and outputs

**Input**

```ts
{
  contact_id: string;   // passed to getTargetContact → enriched person + org + signals + prior interactions
  senders:    Sender[]; // from getSenders() — 6 people, specialties, tenure, schools, quota, reply rates
}
```

**Output (per run)**

```ts
{
  email:    { sender_id: string; subject: string; body: string; send_at: string; /* … */ };
  linkedin: { sender_id: string;                  body: string; send_at: string; /* … */ };
}
```

The sender chosen for email does not have to match the one chosen for LinkedIn. Add any
other fields on either output that you think matter.

**We are not handling the reply case.** You only need to produce the first outbound
touch per channel. What happens after the prospect responds is out of scope.

## Things to think about

- **Who reaches out** is a real decision. Senders differ in what they know well, who
  they've worked with before, who they're already connected to, how much capacity
  they have left, and how often people reply to them. Shared connections matter more
  for LinkedIn than for email.
- **What to say** should be grounded in the contact's situation and — critically —
  in what has actually worked before. Each closed-won deal includes the full message
  history, and exactly one message per deal is marked as the one that got the first
  reply leading to a meeting. That's the strongest signal for what to emulate.
- **Finding the right past deals to learn from is your job.** The data was set up so
  that a target who looks a lot like a past customer should surface that past
  customer. How you decide "looks like" is up to you.
- **Prior interactions** exist for some contacts. If we've already used a sender,
  reached out twice with no reply, or gotten an unsubscribe — the system should
  notice.
- **The data is intentionally messy.** Some fields are missing, some senders are out
  of capacity, some deals closed in unusual ways. Your logic should handle it rather
  than assume clean inputs.
- **Email and LinkedIn are different mediums.** Email can be longer and more
  specific, and has a subject line. LinkedIn is shorter, has no subject, and depends
  more on who you already know in common. The same underlying insight should render
  correctly into each.

## Running

```bash
bun install        # installs root + mock-sdr-api workspace
make dev           # Next dev server via shoreman (logs → dev.log)
make tail-log      # last 100 lines of dev.log
make clean         # removes logs + pid
```

The mock API is a workspace package — import by name:

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

Every function is async. See `mock-sdr-api/examples/walkthrough.ts` for an
end-to-end call sequence against one target.

## Ground rules

- **Use a deliberately weak model for this exercise** — e.g., Auto or Composer 1.5 in
  Cursor. We want to see how you question, think through, and work around a challenge
  when the model isn't doing the thinking for you. This is the most important rule.

## What to hand back

You don't need to write the code. Hand back:

- **A simple agent diagram.** A graph showing the agents you'd build and the
  sub-agents each one launches. Keep it readable — boxes and arrows are fine.
- **Why you're building each agent.** For every agent in the diagram, a sentence or
  two on what it's responsible for and why it exists as its own agent.
- **Your assumptions.** What you think is important for this problem, what you're
  choosing to optimize for, what you're choosing to ignore, and why.

Alongside the diagram, **narrate your thinking as you go**. We want to see you speak
out loud — what you're considering, what's confusing, what trade-offs you're
weighing — and then **ask us the questions you'd need answered to actually build
this well**. The questions you ask are part of what we're evaluating.

import type { MeetingTranscript } from '../types';

// Transcripts of first-meeting discovery calls for each closed-won deal.
// Realistic but condensed — they sample the key beats of a 20–40 min call.

export const MEETING_TRANSCRIPTS: MeetingTranscript[] = [
  // ============================================================
  // Cascade Ridge Lending
  // ============================================================
  {
    deal_id: 'deal_cascade_ridge',
    meeting_date: '2025-06-05',
    duration_minutes: 32,
    attendees: [
      { name: 'Priya Natarajan', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Hector Diaz', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Linh Tran', role: 'VP Operations', company: 'Cascade Ridge Lending', is_internal: false },
      { name: 'Derek Whitman-Kosta', role: 'UW Director', company: 'Cascade Ridge Lending', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:00:30', speaker: 'Priya Natarajan', text: "Thanks for the time, Linh and Derek. Hector will do most of the product talk — I'm mostly here to make sure we keep it grounded in the UW reality since that was my life before this role." },
      { timestamp: '00:01:15', speaker: 'Linh Tran', text: "Good context. For reference, we're doing about 730 loans a month across 14 states, Encompass-native. Our UW team is ~42 people. Self-employed is around 22% of volume." },
      { timestamp: '00:03:40', speaker: 'Derek Whitman-Kosta', text: "My team's biggest complaint is income calc variance. Two UWs on the same file will sometimes come out $700 apart on qualifying income. That gap becomes condition requests, and condition requests become 3-day loops with the LO." },
      { timestamp: '00:05:20', speaker: 'Hector Diaz', text: "That's the pattern. Most lenders your size are running 35–45 minutes of UW touch time on self-employed files, and 60% of that is income calc + doc review. Our output gives UW a consistent calc in seconds — your UWs review and confirm rather than calculate." },
      { timestamp: '00:08:05', speaker: 'Derek Whitman-Kosta', text: "How do you handle Schedule C variability? Partnerships with K-1s? Our credit policy treats those differently than our competitors." },
      { timestamp: '00:09:50', speaker: 'Hector Diaz', text: "All of that is policy-configurable. You give us the rules — two-year averaging, K-1 treatment, add-backs — and the output adheres. You're not inheriting our opinion of credit." },
      { timestamp: '00:13:00', speaker: 'Linh Tran', text: "Integration with Encompass — what does that look like on our side? We don't have LOS engineering bandwidth for a big project." },
      { timestamp: '00:13:45', speaker: 'Hector Diaz', text: "Via the Partner Connect layer, it's configuration only on your side. Our team handles the eFolder hooks. Median time-to-first-live-file across Encompass IMBs is about 3 weeks." },
      { timestamp: '00:18:10', speaker: 'Derek Whitman-Kosta', text: "What about the condition-clearing piece — can it actually close a condition or does it just flag that the doc is there?" },
      { timestamp: '00:19:00', speaker: 'Hector Diaz', text: "It clears content-readable conditions — paystub present and matches UW amount, W-2 year matches, borrower name spelled consistently, that kind of thing. We don't auto-clear appraisal or manual-review conditions." },
      { timestamp: '00:22:30', speaker: 'Linh Tran', text: "Pricing? Ballpark." },
      { timestamp: '00:23:00', speaker: 'Hector Diaz', text: "For your volume band, annual contract lands in the $400–$550K range depending on which modules. We size from your volume, not per-file." },
      { timestamp: '00:27:40', speaker: 'Linh Tran', text: "Next step — we want to see a live file walk-through with Derek's team, and get 1–2 Encompass IMB references." },
      { timestamp: '00:28:20', speaker: 'Priya Natarajan', text: "Cypress Point said yes to a peer call last month — I'll set that up, and schedule the file walk-through for week of June 23." },
      { timestamp: '00:30:00', speaker: 'Derek Whitman-Kosta', text: "One concern — our UW team is going to worry you're replacing them. How do we handle that messaging internally?" },
      { timestamp: '00:30:30', speaker: 'Hector Diaz', text: "We can give you the internal comms deck our other customers have used. The frame is: we remove the math, UWs make the credit decisions. It's not a headcount play." },
    ],
    summary:
      "Cascade Ridge (Encompass, 730 loans/mo, 22% self-employed) is feeling acute pain on income calc variance and condition clearing. They want a peer call with another Encompass IMB, a live file walkthrough with the UW team, and internal-change-management support. Pricing indicative $400–550K.",
    identified_pain_points: [
      'Income calc variance across UW team (~$700 swings on same file)',
      'Condition clearing loops of 3 days per cycle',
      'No LOS engineering bandwidth for big integration projects',
      'UW team anxiety about automation displacement',
    ],
    next_steps_discussed: [
      'Peer reference call with Cypress Point Mortgage',
      'Live file walkthrough with UW team (week of June 23)',
      'Share internal change-management / comms deck',
      'Scope and send pricing proposal',
    ],
  },

  // ============================================================
  // Cypress Point Mortgage
  // ============================================================
  {
    deal_id: 'deal_cypress_point',
    meeting_date: '2025-06-30',
    duration_minutes: 38,
    attendees: [
      { name: 'Jordan Park', role: 'SDR (booking)', company: 'Ledgerline', is_internal: true },
      { name: 'Sahana Iyer', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Marta Alvarez', role: 'CLO', company: 'Cypress Point Mortgage', is_internal: false },
      { name: 'Joachim Mendel', role: 'UW Director', company: 'Cypress Point Mortgage', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:00:45', speaker: 'Jordan Park', text: "Marta, Joachim — thanks. I'll let Sahana drive; she's been talking to a lot of Encompass IMBs this quarter." },
      { timestamp: '00:02:00', speaker: 'Marta Alvarez', text: "We're at roughly 260 files a month on Encompass, SimpleNexus front-end, Optimal Blue for pricing. UW team is 28 people. Condition-clearing is our biggest choke point." },
      { timestamp: '00:04:15', speaker: 'Joachim Mendel', text: "Our condition count per file is running around 11. Industry median is somewhere around 8. That delta is costing us a full day on average in the clear-to-close window." },
      { timestamp: '00:06:00', speaker: 'Sahana Iyer', text: "Most of those extra conditions come from either missing doc content or mismatches between what's in the doc and what's in the LOS. Both are machine-readable. About 70% of conditions we see are clearable without UW judgment." },
      { timestamp: '00:08:30', speaker: 'Joachim Mendel', text: "I'll push back — UW judgment is where our shop differentiates. I don't want to outsource credit thinking to a black box." },
      { timestamp: '00:09:10', speaker: 'Sahana Iyer', text: "Agreed, we don't remove judgment — we remove data entry. The UW still opens the file, still signs off. They just don't spend 10 minutes typing things that were already on page 2 of the paystub." },
      { timestamp: '00:13:40', speaker: 'Marta Alvarez', text: "What about the self-employed borrowers? Our mix is 19% self-employed. We've seen five vendors claim to handle bank statements and all of them punt on the credit policy layer." },
      { timestamp: '00:14:30', speaker: 'Sahana Iyer', text: "Our CFA engine is policy-configurable. Your credit team tells us how you treat NSFs, transfers, 12 vs 24 month averaging, commingling — and we produce against that. Not against our opinion." },
      { timestamp: '00:19:50', speaker: 'Marta Alvarez', text: "What's the implementation risk? We can't afford an LOS disruption during Q3 lock season." },
      { timestamp: '00:20:20', speaker: 'Sahana Iyer', text: "We can sequence go-live outside your lock season. Integration is non-invasive — eFolder hooks via Partner Connect. Median time-to-first-live-file is 3 weeks across Encompass shops your size." },
      { timestamp: '00:24:30', speaker: 'Joachim Mendel', text: "Audit trail is critical. For every condition we clear via automation, I need a log my auditors can trace." },
      { timestamp: '00:25:00', speaker: 'Sahana Iyer', text: "Every extraction, every clear, every reason. Exportable to your data lake. We built this explicitly for auditor defensibility." },
      { timestamp: '00:31:40', speaker: 'Marta Alvarez', text: "Next steps — send the peer audit, the condition-clearing use cases, and let's schedule the live file walkthrough with Joachim's team." },
      { timestamp: '00:33:15', speaker: 'Jordan Park', text: "Will do. I'll also loop in your LOS admin on the Encompass integration scoping." },
    ],
    summary:
      "Cypress Point (Encompass IMB, 260 files/mo, 28 UWs) has an acute condition-clearing problem (~11 conditions/file vs 8 median). Joachim (UW Director) is the skeptic, focused on protecting credit judgment; Marta (CLO) is the buyer. Biggest concerns: audit trail defensibility, LOS disruption, self-employed CFA depth. Next step: live file walkthrough + peer audit share.",
    identified_pain_points: [
      '~11 conditions per file vs industry ~8',
      'Full extra day in clear-to-close window',
      'Self-employed CFA depth — prior vendors punted on credit policy',
      'UW team skeptical of automation touching credit judgment',
      'Cannot afford LOS disruption in Q3 lock season',
    ],
    next_steps_discussed: [
      'Share peer audit doc (anonymized)',
      'Send condition-clearing use-case library',
      'Schedule live file walkthrough with UW team',
      'Loop in LOS admin on Encompass integration scope',
    ],
  },

  // ============================================================
  // Longhorn Wholesale
  // ============================================================
  {
    deal_id: 'deal_longhorn_wholesale',
    meeting_date: '2025-05-06',
    duration_minutes: 28,
    attendees: [
      { name: 'Priya Natarajan', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Amara Onyekwere', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Wes Barnes', role: 'CLO', company: 'Longhorn Wholesale Mortgage', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:00:40', speaker: 'Wes Barnes', text: "Alright, I've got 25 minutes. Priya, you mentioned Fairmont — start there." },
      { timestamp: '00:01:20', speaker: 'Priya Natarajan', text: "Fairmont's problem was broker-submitted docs failing UW-ready checks about 30% of the time. UW was becoming QA for broker submissions. We put Ledgerline at the broker portal upload point — tampered, incomplete, or non-matching docs bounce back with a specific reason before UW ever sees them. Their UW rework-tied-to-broker-intake dropped 54%." },
      { timestamp: '00:04:10', speaker: 'Wes Barnes', text: "That's nearly our number — our UW team estimates a third of their rework is broker-driven. We have 4,500 active brokers. Variance is huge." },
      { timestamp: '00:06:30', speaker: 'Amara Onyekwere', text: "At that broker count, you've likely got a long tail of lower-quality submitters. The fraud-signal benefits scale with tail count — we're catching synthetic bank statements and tampered paystubs that manual review misses." },
      { timestamp: '00:09:15', speaker: 'Wes Barnes', text: "Synthetic statements are showing up more. I've had three flagged in the last 90 days — all caught late, two after funding." },
      { timestamp: '00:11:20', speaker: 'Amara Onyekwere', text: "The cost of catching those post-funding is massive — repurchase risk, investor relationships. Pre-UW is the right catch point." },
      { timestamp: '00:15:40', speaker: 'Wes Barnes', text: "Integration — we're on Byte. Brokers submit via our portal. Where does Ledgerline live in that flow?" },
      { timestamp: '00:16:15', speaker: 'Amara Onyekwere', text: "At the portal upload step. Your dev team integrates once; we handle every doc type after that. Nina owns your portal — we'll scope with her." },
      { timestamp: '00:21:00', speaker: 'Wes Barnes', text: "Pricing model on wholesale is different — we're sensitive to per-file economics because our margins are thinner than retail." },
      { timestamp: '00:21:30', speaker: 'Amara Onyekwere', text: "We size from your annual volume — not per-file. Annual contract protects your margin on any single file." },
      { timestamp: '00:25:20', speaker: 'Wes Barnes', text: "Next step — introduce Nina, send the Fairmont case study in detail, scope the broker portal integration." },
    ],
    summary:
      "Longhorn (wholesale, Byte, 4,500 brokers) is bleeding UW capacity on broker-driven rework (~30%) and has had 3 synthetic-statement fraud events in 90 days — 2 caught post-funding. Needs Ledgerline at the broker portal upload point. Nina (tech) owns portal integration.",
    identified_pain_points: [
      '~30% of UW rework driven by broker-submitted doc quality',
      '3 synthetic bank statement events in 90 days, 2 caught post-funding',
      'Wholesale margin sensitivity to per-file costs',
      'No single quality bar across 4,500 brokers',
    ],
    next_steps_discussed: [
      'Intro to Nina (broker portal owner) for integration scoping',
      'Share Fairmont case study in full detail',
      'Scope broker portal integration timeline',
    ],
  },

  // ============================================================
  // Blackstone Ridge Capital
  // ============================================================
  {
    deal_id: 'deal_blackstone_ridge',
    meeting_date: '2025-07-17',
    duration_minutes: 40,
    attendees: [
      { name: 'Elena Morozov', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Damian Strickland', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Aliyah Washington', role: 'CLO', company: 'Blackstone Ridge Capital', is_internal: false },
      { name: 'Marco Benedetti', role: 'VP Capital Markets', company: 'Blackstone Ridge Capital', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:01:00', speaker: 'Aliyah Washington', text: "Elena sent a spec doc that was actually useful — that's why you got the meeting. Let's skip the standard pitch and get to how you handle a 24-month CFA that rating agencies can defend." },
      { timestamp: '00:02:40', speaker: 'Damian Strickland', text: "Straight to it — our bank-statement analysis runs full CFA against a configured credit policy. NSF exclusions, transfer removal, business-vs-personal commingling, rolling average logic, income stability flags. Everything is parameterized to your policy, not ours." },
      { timestamp: '00:06:00', speaker: 'Marco Benedetti', text: "We securitize 2–3 times a year. What rating agencies care about is that two loans with the same borrower profile and same docs produce the same income conclusion every time. What does consistency look like in your output?" },
      { timestamp: '00:07:40', speaker: 'Damian Strickland', text: "Determinism is a first-class output of our pipeline. Same doc, same policy, same version of the model produces identical output. We version-pin models per customer so your pool from March doesn't get re-scored by a different model in September." },
      { timestamp: '00:12:30', speaker: 'Marco Benedetti', text: "Model versioning is exactly what the agencies asked about last deal. Can you share how that's exposed in the loan tape?" },
      { timestamp: '00:13:15', speaker: 'Damian Strickland', text: "Each record carries the model version and policy version that produced it. We can deliver that in your tape export. We've done this with two other securitizing originators already." },
      { timestamp: '00:19:00', speaker: 'Aliyah Washington', text: "Bank-statement loans are 85% of our volume. We also have some DSCR and jumbo. Priority is bank statement — but I don't want to re-integrate for DSCR in 6 months." },
      { timestamp: '00:20:00', speaker: 'Damian Strickland', text: "DSCR is same platform, different modules. No re-integration. We can start bank-statement only and add DSCR when you're ready." },
      { timestamp: '00:26:15', speaker: 'Aliyah Washington', text: "Pricing. Don't dance around it." },
      { timestamp: '00:26:40', speaker: 'Damian Strickland', text: "For your volume and the bank-statement + DSCR scope, we're indicatively at $650–$750K annual. Fixed, not per-file." },
      { timestamp: '00:32:00', speaker: 'Marco Benedetti', text: "I want references from non-QM originators who've put Ledgerline-scored income into a rated securitization." },
      { timestamp: '00:32:30', speaker: 'Damian Strickland', text: "Two available. I'll set up both calls this week." },
      { timestamp: '00:37:30', speaker: 'Aliyah Washington', text: "OK — kick off security review in parallel, references this week, and get me a draft MSA. Don't bring me a slide deck next time, bring me the contract." },
    ],
    summary:
      "Blackstone Ridge (non-QM, $1.7B, securitizes 2–3x/yr) needs a bank-statement CFA that rating agencies can defend deal-to-deal. Aliyah (CLO) and Marco (Cap Markets) are both in the room. Determinism, model versioning, and rated-deal references are the key buying criteria. Indicative pricing $650–750K for bank-statement + DSCR.",
    identified_pain_points: [
      'Rating agencies demanding doc-level consistency across securitizations',
      'Prior vendors handled classification but not CFA depth',
      'Version control across pools was an explicit agency ask on last deal',
      '24-month CFA manual review does not scale with volume growth',
    ],
    next_steps_discussed: [
      'Two non-QM securitization reference calls this week',
      'Kick off security review in parallel with contracting',
      'Deliver draft MSA (Aliyah wants contract, not another deck)',
    ],
  },

  // ============================================================
  // Silvercreek Non-QM
  // ============================================================
  {
    deal_id: 'deal_silvercreek_nonqm',
    meeting_date: '2025-09-26',
    duration_minutes: 25,
    attendees: [
      { name: 'Elena Morozov', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Damian Strickland', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Ezra Klein', role: 'CLO', company: 'Silvercreek Non-QM', is_internal: false },
      { name: 'Kiara Osei', role: 'Director Credit Policy', company: 'Silvercreek Non-QM', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:01:00', speaker: 'Ezra Klein', text: "We're only here because of the Blackstone Ridge reference. Walk us through how theirs played out on rating side." },
      { timestamp: '00:02:00', speaker: 'Damian Strickland', text: "Their last two rated deals priced cleanly with zero income-data exceptions flagged by the agencies. We delivered model and policy versioning in the loan tape exactly the way the agencies asked." },
      { timestamp: '00:06:30', speaker: 'Kiara Osei', text: "Our credit policy on NSF treatment is aggressive — we exclude more than most. Prior vendors wanted us to soften it. That's a no." },
      { timestamp: '00:07:15', speaker: 'Damian Strickland', text: "Policy is yours. We don't negotiate on your credit — we implement it. We'll run a few files through your policy config in UAT to prove that." },
      { timestamp: '00:12:00', speaker: 'Ezra Klein', text: "Implementation — what's realistic for a team our size (180 people)?" },
      { timestamp: '00:12:40', speaker: 'Damian Strickland', text: "Three weeks to first live file is typical. We don't require LOS engineering — we integrate at the doc-intake layer." },
      { timestamp: '00:17:30', speaker: 'Kiara Osei', text: "Rating agency scrutiny is getting tighter. I want a written statement on how model versioning is exposed in your exports." },
      { timestamp: '00:18:10', speaker: 'Damian Strickland', text: "I'll get that in a formal doc signed by our VP of Risk. Standard delivery on new non-QM customers." },
      { timestamp: '00:22:45', speaker: 'Ezra Klein', text: "Good. MSA, UAT file-run, model-versioning doc. Let's move." },
    ],
    summary:
      "Silvercreek (non-QM, $1.1B) referred in by Blackstone Ridge. Ezra (CLO) and Kiara (Credit Policy) want policy configurability (aggressive NSF treatment preserved), UAT file-run to prove it, and a formal model-versioning statement for rating agencies.",
    identified_pain_points: [
      'Aggressive NSF exclusion policy that prior vendors wanted softened',
      'Rating-agency pressure on model versioning exposed in loan tape',
      'Small team (180) cannot absorb a heavy integration',
    ],
    next_steps_discussed: [
      'UAT file-run against Silvercreek credit policy',
      'Formal model-versioning statement signed by Ledgerline VP Risk',
      'MSA delivery this week',
    ],
  },

  // ============================================================
  // Great Lakes FCU
  // ============================================================
  {
    deal_id: 'deal_great_lakes_fcu',
    meeting_date: '2025-03-27',
    duration_minutes: 35,
    attendees: [
      { name: 'Derek Ashford', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Sahana Iyer', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Theo Lindgren', role: 'VP Home Lending', company: 'Great Lakes FCU', is_internal: false },
      { name: 'Ines Ramirez', role: 'COO', company: 'Great Lakes FCU', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:00:45', speaker: 'Ines Ramirez', text: "The member-experience piece is what I care most about. We don't want members redirected to third-party-looking pages. That kills NPS for us." },
      { timestamp: '00:02:00', speaker: 'Sahana Iyer', text: "Understood — it's a recurring concern with CUs. Our integration is server-side; the member stays on your branded flow. No logo swap, no redirect." },
      { timestamp: '00:05:20', speaker: 'Theo Lindgren', text: "We're expanding HELOC and the re-verification at draw time is our operational weak point. Members take a HELOC in May and draw in September and we're re-doing income from scratch." },
      { timestamp: '00:06:30', speaker: 'Sahana Iyer', text: "That's a clean fit — HELOC re-verification is one of our most common CU use cases. Income re-verified via bank statements or pay stubs, same borrower data on file, minutes not days." },
      { timestamp: '00:11:00', speaker: 'Ines Ramirez', text: "What about regulatory? NCUA examiners are picky on automated decisioning." },
      { timestamp: '00:11:40', speaker: 'Sahana Iyer', text: "We don't decision — we produce a verified income figure for your underwriter. The human makes the credit call. That framing has sat well with NCUA examiners at other CUs we work with." },
      { timestamp: '00:17:00', speaker: 'Theo Lindgren', text: "MeridianLink integration?" },
      { timestamp: '00:17:30', speaker: 'Sahana Iyer', text: "Via the MeridianLink marketplace integration. Your LOS admin configures, our team supports." },
      { timestamp: '00:23:00', speaker: 'Ines Ramirez', text: "Our board is risk-averse — they'll want a peer reference. A CU, not an IMB." },
      { timestamp: '00:23:40', speaker: 'Derek Ashford', text: "First Community CU (similar size, also MeridianLink) agreed to a 30-min reference call. I'll set it up." },
      { timestamp: '00:30:30', speaker: 'Theo Lindgren', text: "Pricing — CU economics are different, just flag that early." },
      { timestamp: '00:31:00', speaker: 'Sahana Iyer', text: "For your mortgage volume band, annual land is in the $220–$280K range. Locked at volume tier, not per file." },
    ],
    summary:
      "Great Lakes FCU (credit union, $610M volume, expanding HELOC) prioritizes member experience (no 3rd-party redirect), NCUA examiner comfort, and peer CU references. HELOC re-verification at draw time is a clean starter use case.",
    identified_pain_points: [
      'HELOC re-verification redone from scratch months after origination',
      'Member NPS hit from third-party-looking redirects',
      'NCUA examiner concerns on automated decisioning',
      'Board risk aversion — requires peer CU reference',
    ],
    next_steps_discussed: [
      'First Community CU reference call (30 min)',
      'MeridianLink integration scoping with LOS admin',
      'Formal pricing proposal at $220–$280K annual',
    ],
  },

  // ============================================================
  // Keystone Point Credit Union
  // ============================================================
  {
    deal_id: 'deal_keystone_point_cu',
    meeting_date: '2025-03-24',
    duration_minutes: 24,
    attendees: [
      { name: 'Derek Ashford', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Sahana Iyer', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Owen McGrath', role: 'VP Lending', company: 'Keystone Point CU', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:01:15', speaker: 'Owen McGrath', text: "We're small — $195M in mortgage volume. LO-driven shop. I don't need enterprise. I need something that makes our 6 LOs stop chasing docs." },
      { timestamp: '00:03:30', speaker: 'Sahana Iyer', text: "Right-sizing first — for your volume we'd start with paystub and W-2 parsing at upload. Not full bank-statement CFA. Smaller scope, smaller price, fast value." },
      { timestamp: '00:06:40', speaker: 'Owen McGrath', text: "Good. Our MortgageBot configuration is stock — anything that requires heavy config is a no-go." },
      { timestamp: '00:07:15', speaker: 'Sahana Iyer', text: "Finastra MortgageBot integration is pre-built. Our team handles the lift. You configure which doc types you want automated." },
      { timestamp: '00:11:00', speaker: 'Owen McGrath', text: "Board cycle is quarterly. I need to get approval in September for a Q1 go-live. What's your pricing on the narrow scope?" },
      { timestamp: '00:11:50', speaker: 'Sahana Iyer', text: "For paystub + W-2 only at your volume, indicative $140–$175K annual. We'll formalize after one more scoping call." },
      { timestamp: '00:17:20', speaker: 'Owen McGrath', text: "Peer reference. Another small CU using you on MortgageBot." },
      { timestamp: '00:17:50', speaker: 'Derek Ashford', text: "I can get you First Community CU — they're slightly larger but same LOS configuration." },
      { timestamp: '00:22:00', speaker: 'Owen McGrath', text: "Fine. Send me a 1-pager for my August committee pre-read." },
    ],
    summary:
      "Keystone Point (small CU, $195M volume, LO-driven) wants a narrow starter scope (paystub + W-2) to solve LO doc-chasing. Stock MortgageBot, no config tolerance, board cycle is quarterly (needs Sep approval for Q1 go-live).",
    identified_pain_points: [
      'Six LOs spending disproportionate time chasing income docs',
      'Zero LOS configuration tolerance — stock MortgageBot',
      'Quarterly board cycle creates hard approval windows',
    ],
    next_steps_discussed: [
      'Peer reference: First Community CU on MortgageBot',
      'Deliver 1-pager for August committee pre-read',
      'Formal pricing at $140–$175K annual on narrow scope',
    ],
  },

  // ============================================================
  // Pine Valley Home Loans
  // ============================================================
  {
    deal_id: 'deal_pine_valley',
    meeting_date: '2025-03-17',
    duration_minutes: 30,
    attendees: [
      { name: 'Elena Morozov', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Hector Diaz', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Sasha Vandermeer', role: 'Chief Product Officer', company: 'Pine Valley Home Loans', is_internal: false },
      { name: 'Reggie Park', role: 'Head of Operations', company: 'Pine Valley Home Loans', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:01:00', speaker: 'Sasha Vandermeer', text: "Our thesis at Pine Valley is that the stack should disappear. Right now Ledgerline would be a step — I need to hear how you minimize that UX drag for self-employed borrowers." },
      { timestamp: '00:02:30', speaker: 'Hector Diaz', text: "In Blend-native shops, we live under the hood. Borrower uploads to Blend — Ledgerline processes server-side — results come back into Blend tasks. Borrower sees Blend the whole time." },
      { timestamp: '00:07:20', speaker: 'Reggie Park', text: "Self-employed is about 28% of our volume. We lose conversion on that cohort because the doc ask is brutal — we want them to send 2 years of everything and most drop out." },
      { timestamp: '00:08:30', speaker: 'Hector Diaz', text: "The fix is right-sizing the doc ask. Bank statement analysis lets you validate income with less paper than a Schedule C + K-1 ask. Silverpeak cut self-employed conversion drop-off 18% with that repositioning." },
      { timestamp: '00:15:00', speaker: 'Sasha Vandermeer', text: "Silverpeak is a good comp — they're on Blend too. 21-day time-to-live Priya mentioned earlier — is that real?" },
      { timestamp: '00:15:40', speaker: 'Hector Diaz', text: "Yes, and it's because Blend Partner integration is config-only. No engineering lift on your side. Your team flips a few flags and our service is hot." },
      { timestamp: '00:22:00', speaker: 'Reggie Park', text: "UW team skepticism — any playbook for getting them bought in?" },
      { timestamp: '00:22:45', speaker: 'Hector Diaz', text: "Our customer success team runs a 2-session onboarding specifically for UW. Shows them how the output helps their job, not replaces it. Happy to walk through that." },
      { timestamp: '00:27:15', speaker: 'Sasha Vandermeer', text: "Send MSA this week, plan for May go-live. I want to be live before our peak volume push." },
    ],
    summary:
      "Pine Valley (digital IMB on Blend, 28% self-employed volume) wants server-side Ledgerline under a Blend-native UX to minimize friction on self-employed borrowers. Sasha (CPO) is the decision-maker. Target: live in May, before peak volume push. Silverpeak is the reference comp.",
    identified_pain_points: [
      '28% self-employed cohort — conversion drop-off on heavy doc ask',
      'Anything visible to borrower that looks non-Blend is unacceptable',
      'UW team needs structured onboarding to buy into automation',
    ],
    next_steps_discussed: [
      'MSA delivery this week',
      'Implementation kick-off for May go-live',
      'UW onboarding (2-session format) scheduled',
    ],
  },

  // ============================================================
  // Narragansett Savings Bank
  // ============================================================
  {
    deal_id: 'deal_narragansett',
    meeting_date: '2024-12-12',
    duration_minutes: 36,
    attendees: [
      { name: 'Marcus Delgado', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Amara Onyekwere', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Iwan Matysek', role: 'Head of Mortgage Technology', company: 'Narragansett Savings Bank', is_internal: false },
      { name: 'Claire Holloway', role: 'Director, Mortgage Risk', company: 'Narragansett Savings Bank', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:01:30', speaker: 'Claire Holloway', text: "The HMDA angle is the reason we took the meeting. We had two categories of findings last cycle that I do not want repeated." },
      { timestamp: '00:03:00', speaker: 'Amara Onyekwere', text: "Most HMDA findings we see in bank divisions come from doc-extracted data not matching what's in the LOS — debt ratios, income figures, property data. Ledgerline extracts at intake, so the LOS is seeded from the doc rather than from LO manual entry." },
      { timestamp: '00:08:00', speaker: 'Iwan Matysek', text: "That covers the reporting side. What about the ops efficiency for our UWs? The division is being asked to hit a margin target that's only achievable if we don't grow headcount." },
      { timestamp: '00:09:00', speaker: 'Amara Onyekwere', text: "Bank divisions your size typically see 25–35% UW capacity freed from document-content work. That buys you growth without hiring." },
      { timestamp: '00:16:20', speaker: 'Claire Holloway', text: "Bank risk will want a detailed vendor assessment — SOC 2, pen test, model risk documentation, data retention." },
      { timestamp: '00:17:00', speaker: 'Amara Onyekwere', text: "We have a standard bank-grade TPRM packet — SOC 2 Type II, external pen test, model validation documentation. Send to us early so procurement isn't the bottleneck." },
      { timestamp: '00:25:00', speaker: 'Iwan Matysek', text: "What about data residency? We have depositor data governance considerations." },
      { timestamp: '00:25:40', speaker: 'Amara Onyekwere', text: "US-only infrastructure. Dedicated tenancy for your data. We can provide an ASL for your bank risk committee." },
      { timestamp: '00:33:00', speaker: 'Iwan Matysek', text: "Risk review will take weeks. But the technical fit is clear. Let's get TPRM started now and keep commercial moving in parallel." },
    ],
    summary:
      "Narragansett (bank mortgage division, $1.9B) bought the HMDA-data-quality and UW efficiency story. Claire (risk) is gate-keeper on vendor assessment; Iwan (tech) is champion. Dedicated tenancy + US-only infrastructure are required. Risk review is the long pole.",
    identified_pain_points: [
      'HMDA findings from LO manual entry vs doc data mismatch',
      'Division margin target achievable only without headcount growth',
      'Depositor data governance requirements',
      'Multi-week bank risk review cycle',
    ],
    next_steps_discussed: [
      'Kick off TPRM packet review',
      'Move commercial in parallel with risk review',
      'Technical session with Iwan\'s data/risk team',
    ],
  },

  // ============================================================
  // Anchor Coast Bank
  // ============================================================
  {
    deal_id: 'deal_anchor_coast',
    meeting_date: '2025-09-25',
    duration_minutes: 33,
    attendees: [
      { name: 'Marcus Delgado', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Amara Onyekwere', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Tariq Abdelrahman', role: 'VP Mortgage Ops', company: 'Anchor Coast Bank', is_internal: false },
      { name: 'Soledad Vargas', role: 'Director Mortgage Risk', company: 'Anchor Coast Bank', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:01:00', speaker: 'Tariq Abdelrahman', text: "Narragansett's story hit home. We have our own HMDA exposure and ops efficiency pressure. Let's get to specifics." },
      { timestamp: '00:04:10', speaker: 'Amara Onyekwere', text: "For Anchor Coast — similar bank profile, Encompass, Blend — Narragansett's playbook maps well. The two risk categories that cleared there would likely clear here too." },
      { timestamp: '00:11:30', speaker: 'Soledad Vargas', text: "Our HMDA LAR has had data-integrity exceptions three years running. A fourth year creates real regulatory exposure. Timing matters — we need to be in production by Q4." },
      { timestamp: '00:12:15', speaker: 'Amara Onyekwere', text: "Q4 go-live is achievable. Sequence would be: TPRM Sep–Oct, implementation Oct–Nov, HMDA-relevant data flow live by early Q4." },
      { timestamp: '00:19:00', speaker: 'Tariq Abdelrahman', text: "Spring HMDA submission is our hard deadline. I need Ledgerline-extracted data in the LOS for at least the November origination month." },
      { timestamp: '00:19:40', speaker: 'Amara Onyekwere', text: "That's doable. Let's align the project plan to that milestone specifically." },
      { timestamp: '00:27:00', speaker: 'Soledad Vargas', text: "We'll need your vendor risk questionnaire responses in the next 2 weeks, not 4." },
      { timestamp: '00:28:00', speaker: 'Amara Onyekwere', text: "Understood. Expedite is a standard for time-sensitive deals. We'll deliver within 10 business days." },
    ],
    summary:
      "Anchor Coast (bank mortgage division, $2.3B) has a hard deadline: Ledgerline-extracted data must cover November-origination HMDA data for the spring LAR submission. Soledad (risk) is gating; Tariq (ops) is champion. Everything is timed against the HMDA milestone.",
    identified_pain_points: [
      'Three consecutive years of HMDA data-integrity exceptions',
      'Spring HMDA submission is immovable deadline',
      'Division margin pressure',
    ],
    next_steps_discussed: [
      'Expedited TPRM responses within 10 business days',
      'Project plan aligned to November-origination data coverage',
      'Implementation sequenced Oct–Nov for Q4 production',
    ],
  },

  // ============================================================
  // Delta Crest Mortgage
  // ============================================================
  {
    deal_id: 'deal_delta_crest',
    meeting_date: '2024-12-16',
    duration_minutes: 28,
    attendees: [
      { name: 'Jordan Park', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Sahana Iyer', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Margaux St-Pierre', role: 'CLO', company: 'Delta Crest Mortgage', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:01:00', speaker: 'Margaux St-Pierre', text: "We want to be the fastest IMB in the Southeast on clear-to-close. Right now we are not. Condition clearing is why." },
      { timestamp: '00:03:40', speaker: 'Sahana Iyer', text: "For IMBs in your volume band ($1.5–2B), condition-clear backlogs of 400–800 files are typical. You're carrying roughly how many?" },
      { timestamp: '00:04:00', speaker: 'Margaux St-Pierre', text: "Around 680. Aging median is 4.5 days." },
      { timestamp: '00:07:30', speaker: 'Sahana Iyer', text: "That aging median is what we pull down. 70% of conditions we audit are content-clearable — doc is there, matches, just needs a system to see it." },
      { timestamp: '00:13:20', speaker: 'Margaux St-Pierre', text: "Rollout — I want to pilot on two branches before full deployment. If the numbers hold there, I'll push company-wide." },
      { timestamp: '00:14:00', speaker: 'Sahana Iyer', text: "Branch pilots are a common rollout. We'll structure the contract to support pilot-to-expansion." },
      { timestamp: '00:21:00', speaker: 'Margaux St-Pierre', text: "Pricing — I don't want to overpay for pilot scope." },
      { timestamp: '00:21:30', speaker: 'Sahana Iyer', text: "Pilot economics are sized to the volume in scope. Indicative $340K annual for full deployment, pilot priced proportionally." },
    ],
    summary:
      "Delta Crest (IMB, $1.8B, Encompass) is positioning on speed-to-close in the Southeast. Margaux (CLO) is sole decision-maker. Wants 2-branch pilot, proven numbers, then company-wide expansion. Condition clearing aging median of 4.5 days is the target to beat.",
    identified_pain_points: [
      '680-file condition-clearing backlog with 4.5-day aging median',
      'Brand positioning depends on fastest-to-close in region',
    ],
    next_steps_discussed: [
      'Two-branch pilot structure in contract',
      'Proportional pricing for pilot scope',
      'Success metrics defined against aging median',
    ],
  },

  // ============================================================
  // Horizon Valley Mortgage — fast cycle (warm intro)
  // ============================================================
  {
    deal_id: 'deal_horizon_valley',
    meeting_date: '2026-02-22',
    duration_minutes: 22,
    attendees: [
      { name: 'Casey Liu', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Hector Diaz', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Felix Karabashev', role: 'VP Operations', company: 'Horizon Valley Mortgage', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:00:30', speaker: 'Felix Karabashev', text: "Marta at Cypress Point vouched for you — that's 90% of the sales call handled. I want paystub parsing, nothing fancier, deployed fast." },
      { timestamp: '00:02:00', speaker: 'Hector Diaz', text: "Paystub starter scope is our fastest deploy. 2 weeks from signature to live files, typical." },
      { timestamp: '00:05:00', speaker: 'Felix Karabashev', text: "Encompass, 220 people, we don't have time for a long implementation." },
      { timestamp: '00:05:30', speaker: 'Hector Diaz', text: "Partner Connect integration, no LOS engineering on your side. Starter scope, narrow price." },
      { timestamp: '00:10:15', speaker: 'Felix Karabashev', text: "$210K annual. Ok if scope stays paystub-only for year one." },
      { timestamp: '00:11:00', speaker: 'Hector Diaz', text: "Done. Year 2 expansion at customer discretion." },
      { timestamp: '00:17:00', speaker: 'Felix Karabashev', text: "Send the MSA this week. I'll sign next week." },
    ],
    summary:
      "Horizon Valley came in warm via Cypress Point referral. Felix (VP Ops) wanted narrow starter scope (paystub only), fast deploy, $210K price point. Minimal discovery — reference-based close.",
    identified_pain_points: [
      'Wants narrow, fast starter scope; no appetite for long implementation',
      'Manual paystub review is the immediate pain',
    ],
    next_steps_discussed: [
      'Send MSA this week',
      '2-week implementation target',
      'Year-1 scope capped at paystubs',
    ],
  },

  // ============================================================
  // Fairmont Wholesale
  // ============================================================
  {
    deal_id: 'deal_fairmont_wholesale',
    meeting_date: '2025-05-14',
    duration_minutes: 31,
    attendees: [
      { name: 'Priya Natarajan', role: 'SDR', company: 'Ledgerline', is_internal: true },
      { name: 'Amara Onyekwere', role: 'AE', company: 'Ledgerline', is_internal: true },
      { name: 'Alejandra Montes', role: 'CLO', company: 'Fairmont Wholesale', is_internal: false },
      { name: 'Dev Bhattacharya', role: 'Director Broker Tech', company: 'Fairmont Wholesale', is_internal: false },
    ],
    transcript: [
      { timestamp: '00:01:00', speaker: 'Alejandra Montes', text: "We have 2,800 brokers and the variance in doc quality is unacceptable. Our UWs are QA-ing broker work. That's a margin leak." },
      { timestamp: '00:03:30', speaker: 'Amara Onyekwere', text: "At the broker portal upload step is where this lives. Ledgerline tells the broker their submission is incomplete or mismatched before UW ever sees it. Broker fixes it, UW sees clean work." },
      { timestamp: '00:08:00', speaker: 'Dev Bhattacharya', text: "Our portal is Byte plus a custom wrapper. What's the integration look like technically?" },
      { timestamp: '00:08:40', speaker: 'Amara Onyekwere', text: "You call our API at upload, we return classification + extraction + validity + flags. Your wrapper decides whether to hold the upload or forward to UW." },
      { timestamp: '00:13:00', speaker: 'Alejandra Montes', text: "Fraud detection — we've had 2 synthetic paystub events in Q1. Our funding team caught both, but only because one was pattern-matched to a known fraud ring." },
      { timestamp: '00:14:00', speaker: 'Amara Onyekwere', text: "Doc-integrity and metadata anomalies are part of our default pipeline. Synthetic paystubs and tampered bank statements show up as risk flags with specific reasons." },
      { timestamp: '00:20:30', speaker: 'Dev Bhattacharya', text: "API throughput? We peak at about 4,000 uploads a day in month-end." },
      { timestamp: '00:21:00', speaker: 'Amara Onyekwere', text: "4K/day is well within our tier. Our month-end is everybody's month-end; we've been load-tested." },
      { timestamp: '00:28:00', speaker: 'Alejandra Montes', text: "Contract next week. Dev — you're the technical owner. Stay on their calendar." },
    ],
    summary:
      "Fairmont Wholesale (wholesale, $2.1B, 2,800 brokers) is losing margin to broker-driven UW rework and has had 2 synthetic-paystub fraud events in Q1. Alejandra (CLO) is decision-maker; Dev owns integration. Byte+custom portal integration via API.",
    identified_pain_points: [
      'UWs doing QA on broker submissions — margin leak',
      '2 synthetic paystub fraud events in Q1',
      'Peak 4K uploads/day at month-end',
    ],
    next_steps_discussed: [
      'Contract delivery next week',
      'Dev-led technical integration scoping (API into Byte+custom portal)',
    ],
  },
];

export function findMeetingTranscriptByDealId(deal_id: string): MeetingTranscript | undefined {
  return MEETING_TRANSCRIPTS.find((t) => t.deal_id === deal_id);
}

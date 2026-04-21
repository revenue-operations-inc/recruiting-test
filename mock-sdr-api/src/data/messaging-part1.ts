import type { ClosedWonMessaging } from '../types';

// Messaging for deals: cascade_ridge, cypress_point, longhorn_wholesale,
// blackstone_ridge, silvercreek_nonqm, great_lakes_fcu, keystone_point_cu

export const MESSAGING_PART_1: ClosedWonMessaging[] = [
  // ============================================================
  // Cascade Ridge Lending — IMB on Encompass, won by Priya (sender_02)
  // Primary champion: Linh Tran (VP Operations)
  // ============================================================
  {
    deal_id: 'deal_cascade_ridge',
    threads: [
      {
        thread_id: 'cw_cascade_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_cascade_linh',
        sender_id: 'sender_02',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'linh.tran@cascaderidgelending.com',
            subject: 'Self-employed files at Cascade Ridge',
            body:
              "Linh — I UW'd self-employed files for 4 years at Guaranteed Rate before moving to Ledgerline. The thing I could never fix from the UW seat was how much time income calc took on mixed-income borrowers. IMBs on Encompass at your volume tier typically get 35–45% of UW time back when they automate that layer. Worth 20 min?",
            sent_at: '2025-05-22T14:18:00Z',
          },
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'linh.tran@cascaderidgelending.com',
            subject: 'Re: Self-employed files at Cascade Ridge',
            body:
              "Bumping. Happy to send a 2-pager instead if that's cleaner.",
            sent_at: '2025-05-27T10:00:00Z',
          },
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'linh.tran@cascaderidgelending.com',
            subject: 'Cascade Ridge UW touch-time — what another Encompass IMB did',
            body:
              "Linh — pulling a specific comp. Cypress Point Mortgage (similar footprint, Encompass + SimpleNexus like you) pulled 37 minutes of average UW touch time out of self-employed files by automating income calc + condition generation. Their CLO said 'we stopped arguing about how to read a P&L.' Open to comparing notes?",
            sent_at: '2025-06-03T09:44:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'linh.tran@cascaderidgelending.com',
            to: 'priya.natarajan@ledgerline.com',
            subject: 'Re: Cascade Ridge UW touch-time — what another Encompass IMB did',
            body:
              "37 min is a specific number. Send a time next week — prefer Thursday afternoon.",
            sent_at: '2025-06-03T15:20:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_cascade_pre_li',
        channel: 'linkedin',
        contact_id: 'cw_ct_cascade_linh',
        sender_id: 'sender_02',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'Priya Natarajan (Ledgerline)',
            to: 'Linh Tran',
            body:
              "Not looking to dupe my email — just wanted to flag I'm ex-UW (Guaranteed Rate). Happy to skip the pitch and talk shop if you ever want.",
            sent_at: '2025-05-28T17:12:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_cascade_post_email',
        channel: 'email',
        contact_id: 'cw_ct_cascade_linh',
        sender_id: 'sender_02',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'linh.tran@cascaderidgelending.com',
            subject: 'Recap + materials from our call',
            body:
              "Linh — good call today. Recap:\n\n1. 40% of touch time on self-employed files is the target to beat.\n2. Encompass + Ledgerline integration is no-code from your side (Partner Connect).\n3. You want to see Cypress Point's before/after numbers.\n\nAttaching that benchmark doc and a 1-page integration diagram. Next step: bring UW director and LOS admin to a deeper session. I'll propose a time.",
            sent_at: '2025-06-12T18:02:00Z',
          },
          {
            direction: 'inbound',
            from: 'linh.tran@cascaderidgelending.com',
            to: 'priya.natarajan@ledgerline.com',
            subject: 'Re: Recap + materials from our call',
            body:
              "Got it. The Cypress comp will land with Derek (our UW Director). Propose two times the week of the 23rd.",
            sent_at: '2025-06-13T08:45:00Z',
          },
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'linh.tran@cascaderidgelending.com',
            subject: 'Re: Recap + materials from our call',
            body:
              "Tuesday 6/24 11am PT or Thursday 6/26 1pm PT — both block 45 min. Our AE Marcus will join. Let me know which works and I'll send the invite with agenda.",
            sent_at: '2025-06-13T10:12:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_cascade_post_li',
        channel: 'linkedin',
        contact_id: 'cw_ct_cascade_linh',
        sender_id: 'sender_02',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'Priya Natarajan (Ledgerline)',
            to: 'Linh Tran',
            body:
              "Saw your comment on the Scotsman piece about 1099 borrowers. Shared the bank-statement analysis methodology doc internally — thought it might be relevant to the UW session we're scoping.",
            sent_at: '2025-07-02T13:00:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_cascade_nurture',
        channel: 'email',
        contact_id: 'cw_ct_cascade_linh',
        sender_id: 'sender_02',
        phase: 'nurture',
        messages: [
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'linh.tran@cascaderidgelending.com',
            subject: 'Quick check-in — anything blocking on security review?',
            body:
              "Linh — know security review slowed last time. Happy to loop our InfoSec lead directly with your team if helpful. No rush.",
            sent_at: '2025-08-14T11:20:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Cypress Point Mortgage — IMB on Encompass, won by Jordan (sender_01)
  // ============================================================
  {
    deal_id: 'deal_cypress_point',
    threads: [
      {
        thread_id: 'cw_cypress_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_cypress_marta',
        sender_id: 'sender_01',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'jordan.park@ledgerline.com',
            to: 'marta.alvarez@cypresspointmtg.com',
            subject: 'Condition clearing cycles at Cypress Point',
            body:
              "Marta — condition clearing is the biggest silent tax on IMBs your size. Encompass shops tend to carry 6–10 avoidable conditions per file. Open to a 20-min comparison with peer IMBs?",
            sent_at: '2025-06-16T09:32:00Z',
          },
          {
            direction: 'outbound',
            from: 'jordan.park@ledgerline.com',
            to: 'marta.alvarez@cypresspointmtg.com',
            subject: 'Re: Condition clearing cycles at Cypress Point',
            body:
              "Marta, following up. One datapoint: in the 14 Encompass IMBs we audited last quarter, the median condition count per file was 8.4 — and 70% were document-content-readable, meaning a machine could clear them. Would love to share the full audit.",
            sent_at: '2025-06-23T10:10:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'marta.alvarez@cypresspointmtg.com',
            to: 'jordan.park@ledgerline.com',
            subject: 'Re: Condition clearing cycles at Cypress Point',
            body:
              "8.4 feels low honestly — we're higher. Send the audit. And a calendar link.",
            sent_at: '2025-06-23T16:40:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_cypress_pre_li',
        channel: 'linkedin',
        contact_id: 'cw_ct_cypress_marta',
        sender_id: 'sender_01',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'Jordan Park (Ledgerline)',
            to: 'Marta Alvarez',
            body:
              "Hey Marta — not looking to double up on your inbox. Just wanted to flag: I'll be in Raleigh in July if you'd ever prefer a coffee to a Zoom.",
            sent_at: '2025-06-24T15:12:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_cypress_post_email_1',
        channel: 'email',
        contact_id: 'cw_ct_cypress_marta',
        sender_id: 'sender_01',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'jordan.park@ledgerline.com',
            to: 'marta.alvarez@cypresspointmtg.com',
            subject: 'Recap + the audit doc you asked about',
            body:
              "Marta — great convo. The audit doc is attached (anonymized). Key recap from today:\n\n• You're running ~11 conditions/file on self-employed, above the peer median.\n• Income calc variance across UW team is your #1 pain, condition clearing #2.\n• Procurement timeline: you want to be live in Q4 for budget reasons.\n\nProposed next step: joint working session with Derek (UW Director) and Hana (LOS admin) to map the Encompass integration. I'll send options.",
            sent_at: '2025-07-02T17:22:00Z',
          },
          {
            direction: 'inbound',
            from: 'marta.alvarez@cypresspointmtg.com',
            to: 'jordan.park@ledgerline.com',
            subject: 'Re: Recap + the audit doc you asked about',
            body:
              "Audit is useful. Derek will push back on anything that adds UW steps — please be ready for that. Propose times for week of July 14.",
            sent_at: '2025-07-03T09:00:00Z',
          },
          {
            direction: 'outbound',
            from: 'jordan.park@ledgerline.com',
            to: 'marta.alvarez@cypresspointmtg.com',
            subject: 'Re: Recap + the audit doc you asked about',
            body:
              "Understood. The whole pitch for UW is that it removes steps, not adds. Will walk Derek through a live file.\n\nTuesday 7/15 10am ET or Thursday 7/17 2pm ET?",
            sent_at: '2025-07-03T11:30:00Z',
          },
          {
            direction: 'outbound',
            from: 'jordan.park@ledgerline.com',
            to: 'marta.alvarez@cypresspointmtg.com',
            subject: 'Security review materials',
            body:
              "Marta — SOC 2 Type II, pen test summary, and our standard MSA attached for your InfoSec team. Happy to do a direct intro.",
            sent_at: '2025-08-05T13:10:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_cypress_post_li',
        channel: 'linkedin',
        contact_id: 'cw_ct_cypress_marta',
        sender_id: 'sender_01',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'Jordan Park (Ledgerline)',
            to: 'Marta Alvarez',
            body:
              "Saw you spoke at the NC Mortgage Bankers event — shared the deck with our PMM team. Nice line on 'UW is the new battleground'.",
            sent_at: '2025-09-10T14:05:00Z',
          },
          {
            direction: 'inbound',
            from: 'Marta Alvarez',
            to: 'Jordan Park (Ledgerline)',
            body:
              "Ha — thanks. Contract is sitting with legal. Should land this week.",
            sent_at: '2025-09-12T20:11:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_cypress_nurture',
        channel: 'email',
        contact_id: 'cw_ct_cypress_marta',
        sender_id: 'sender_01',
        phase: 'nurture',
        messages: [
          {
            direction: 'outbound',
            from: 'jordan.park@ledgerline.com',
            to: 'marta.alvarez@cypresspointmtg.com',
            subject: 'HMDA reporting piece — thought of you',
            body:
              "Saw this piece on HMDA data quality and thought of the condition-clearing angle we'd talked about. Not urgent.",
            sent_at: '2025-08-20T09:00:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Longhorn Wholesale — won by Priya (sender_02)
  // ============================================================
  {
    deal_id: 'deal_longhorn_wholesale',
    threads: [
      {
        thread_id: 'cw_longhorn_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_longhorn_wes',
        sender_id: 'sender_02',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'wes.barnes@longhornwholesale.com',
            subject: 'Broker doc quality at Longhorn',
            body:
              "Wes — wholesale shops live and die by broker doc quality on intake. Seeing brokers send in partial paystubs and self-typed letters? Ledgerline normalizes doc intake at the broker submission layer — brokers stop calling UW, UW stops calling brokers.",
            sent_at: '2025-04-25T12:44:00Z',
          },
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'wes.barnes@longhornwholesale.com',
            subject: 'Re: Broker doc quality at Longhorn',
            body:
              "One more data point: Fairmont Wholesale cut UW rework tied to broker-submitted docs by 54% after putting Ledgerline at the intake point. Happy to share the play.",
            sent_at: '2025-05-02T10:30:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'wes.barnes@longhornwholesale.com',
            to: 'priya.natarajan@ledgerline.com',
            subject: 'Re: Broker doc quality at Longhorn',
            body:
              "Fairmont's our mirror, yeah. Let's talk. Calendly?",
            sent_at: '2025-05-02T14:08:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_longhorn_post_email',
        channel: 'email',
        contact_id: 'cw_ct_longhorn_wes',
        sender_id: 'sender_02',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'wes.barnes@longhornwholesale.com',
            subject: 'Recap + broker-intake proposal',
            body:
              "Wes — recap from today:\n\n• Pain: broker-submitted docs fail UW-ready checks ~30% of the time.\n• Goal: catch and surface fixes at broker portal step, not at UW.\n• Scope v1: bank statements + paystubs on broker portal uploads.\n\nSending proposal by EOW. Need intro to your CTO for the portal integration scope.",
            sent_at: '2025-05-14T17:55:00Z',
          },
          {
            direction: 'inbound',
            from: 'wes.barnes@longhornwholesale.com',
            to: 'priya.natarajan@ledgerline.com',
            subject: 'Re: Recap + broker-intake proposal',
            body:
              "Intro'd Nina on CC. She owns the broker portal.",
            sent_at: '2025-05-15T08:00:00Z',
          },
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'nina.ferreira@longhornwholesale.com',
            subject: 'Broker portal integration scope',
            body:
              "Nina — great to e-meet. Setting up 30 min with our Solutions team to scope the broker portal hook. Proposing 5/21 at 10 CT.",
            sent_at: '2025-05-15T10:40:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Blackstone Ridge Capital — non-QM, won by Elena Morozov (sender_06)
  // ============================================================
  {
    deal_id: 'deal_blackstone_ridge',
    threads: [
      {
        thread_id: 'cw_blackstone_pre_li',
        channel: 'linkedin',
        contact_id: 'cw_ct_blackstone_aliyah',
        sender_id: 'sender_06',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'Elena Morozov (Ledgerline)',
            to: 'Aliyah Washington',
            body:
              "Aliyah — your last Scotsman Guide piece on 24-month CFA consistency across non-QM securitizations basically described the problem we solve. Curious if you've looked at automating the calc layer rather than the doc classification layer.",
            sent_at: '2025-07-08T16:10:00Z',
          },
          {
            direction: 'inbound',
            from: 'Aliyah Washington',
            to: 'Elena Morozov (Ledgerline)',
            body:
              "We've looked. Most vendors handle the classification but bail on the calc. What's your approach?",
            sent_at: '2025-07-09T09:30:00Z',
          },
          {
            direction: 'outbound',
            from: 'Elena Morozov (Ledgerline)',
            to: 'Aliyah Washington',
            body:
              "We run full CFA against your credit policy rules — NSF treatment, transfer-exclusion, business-vs-personal commingling, all parameterized. Send a 2-page spec? Want real eyes on it before any meeting.",
            sent_at: '2025-07-09T14:22:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'Aliyah Washington',
            to: 'Elena Morozov (Ledgerline)',
            body:
              "Yes send it. If it holds up we'll book 30 min.",
            sent_at: '2025-07-10T08:50:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_blackstone_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_blackstone_aliyah',
        sender_id: 'sender_06',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'aliyah.washington@blackstoneridge.com',
            subject: 'CFA methodology spec (per LI)',
            body:
              "Aliyah — attaching the spec. Walks through treatment of NSFs, transfers, commingling, rolling averages, and how rating agencies have received it in prior deals. Look forward to your reactions.",
            sent_at: '2025-07-11T09:00:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_blackstone_post_email',
        channel: 'email',
        contact_id: 'cw_ct_blackstone_aliyah',
        sender_id: 'sender_06',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'aliyah.washington@blackstoneridge.com',
            subject: 'Recap + rating agency comfort',
            body:
              "Aliyah — thanks for the time. Action items:\n\n1. I'll get you 3 references from non-QM originators who've securitized with our CFA in the loan tape.\n2. We'll host a joint session with your credit + capital markets leads.\n3. Starting a security review in parallel so we don't get bottlenecked there.\n\n— Elena",
            sent_at: '2025-08-02T15:30:00Z',
          },
          {
            direction: 'inbound',
            from: 'aliyah.washington@blackstoneridge.com',
            to: 'elena.morozov@ledgerline.com',
            subject: 'Re: Recap + rating agency comfort',
            body:
              "Marco (Cap Markets) will own the securitization side. References would unblock most of our concerns.",
            sent_at: '2025-08-03T10:20:00Z',
          },
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'aliyah.washington@blackstoneridge.com',
            subject: 'References + draft MSA',
            body:
              "Three references booked for the week of 8/18. Draft MSA attached. Our deal desk is watching this one closely.",
            sent_at: '2025-08-12T09:45:00Z',
          },
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'aliyah.washington@blackstoneridge.com',
            subject: 'Re: Re: Recap',
            body:
              "Aliyah — checking in. Anything blocking on legal? Happy to get our GC on a call with yours.",
            sent_at: '2025-10-28T14:00:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_blackstone_post_li',
        channel: 'linkedin',
        contact_id: 'cw_ct_blackstone_aliyah',
        sender_id: 'sender_06',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'Elena Morozov (Ledgerline)',
            to: 'Aliyah Washington',
            body:
              "Saw your post on ATR-QM revisions. Forwarded internally — our policy team is tracking the same comment letter.",
            sent_at: '2025-09-22T11:30:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Silvercreek Non-QM — won by Elena Morozov (sender_06)
  // ============================================================
  {
    deal_id: 'deal_silvercreek_nonqm',
    threads: [
      {
        thread_id: 'cw_silvercreek_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_silvercreek_ezra',
        sender_id: 'sender_06',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'ezra.klein@silvercreeknonqm.com',
            subject: 'Securitization doc-level consistency at Silvercreek',
            body:
              "Ezra — rating agencies are increasingly asking for doc-level consistency on non-QM tapes. Watching non-QM shops get surprised by this 3 weeks before pricing is painful. Worth a quick talk?",
            sent_at: '2025-09-14T11:08:00Z',
          },
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'ezra.klein@silvercreeknonqm.com',
            subject: 'Re: Securitization doc-level consistency',
            body:
              "Ezra — one more nudge. Blackstone Ridge had the same concern last year, we built to it, and their last two deals priced cleanly. Happy to arrange a peer intro.",
            sent_at: '2025-09-23T09:20:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'ezra.klein@silvercreeknonqm.com',
            to: 'elena.morozov@ledgerline.com',
            subject: 'Re: Securitization doc-level consistency',
            body:
              "Peer intro is compelling. Can we do 20 min this week?",
            sent_at: '2025-09-23T14:40:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_silvercreek_post_email',
        channel: 'email',
        contact_id: 'cw_ct_silvercreek_ezra',
        sender_id: 'sender_06',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'ezra.klein@silvercreeknonqm.com',
            subject: 'Recap + Blackstone Ridge peer call',
            body:
              "Ezra — good call. Blackstone Ridge agreed to a 30-min peer chat next week. Also attaching the securitization-ready data spec we built with them.",
            sent_at: '2025-10-05T17:00:00Z',
          },
          {
            direction: 'inbound',
            from: 'ezra.klein@silvercreeknonqm.com',
            to: 'elena.morozov@ledgerline.com',
            subject: 'Re: Recap + Blackstone Ridge peer call',
            body:
              "Set it up — include Kiara.",
            sent_at: '2025-10-06T08:15:00Z',
          },
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'ezra.klein@silvercreeknonqm.com',
            subject: 'Contract + onboarding plan',
            body:
              "Contract is attached — redlines welcome. Proposed onboarding plan starts 11/4 with your credit policy team. Let's target first scored file by 12/15.",
            sent_at: '2025-12-18T10:10:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Great Lakes FCU — credit union, won by Derek (sender_05)
  // ============================================================
  {
    deal_id: 'deal_great_lakes_fcu',
    threads: [
      {
        thread_id: 'cw_greatlakes_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_greatlakes_theo',
        sender_id: 'sender_05',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'theo.lindgren@greatlakesfcu.org',
            subject: 'Member experience + income verification at Great Lakes',
            body:
              "Theo — I came from community bank commercial lending for 7 years before SaaS, so I appreciate how different the CU member experience is from an IMB funnel. Our income-verification automation is designed to keep the member experience warm (no third-party redirects). Worth a chat?",
            sent_at: '2025-02-12T13:00:00Z',
          },
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'theo.lindgren@greatlakesfcu.org',
            subject: 'Re: Member experience + income verification',
            body:
              "Theo, circling back. Happy to send over a 2-pager tailored for MeridianLink Mortgage shops specifically.",
            sent_at: '2025-02-21T11:15:00Z',
          },
          {
            direction: 'inbound',
            from: 'theo.lindgren@greatlakesfcu.org',
            to: 'derek.ashford@ledgerline.com',
            subject: 'Re: Member experience + income verification',
            body:
              "Send the 2-pager, will review with Ines.",
            sent_at: '2025-02-24T08:20:00Z',
          },
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'theo.lindgren@greatlakesfcu.org',
            subject: 'Re: Member experience + income verification',
            body:
              "2-pager attached. I pulled specific MeridianLink integration notes and two CU references.",
            sent_at: '2025-02-24T14:45:00Z',
          },
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'theo.lindgren@greatlakesfcu.org',
            subject: 'Quick follow-up — the HELOC angle',
            body:
              "Theo — one thing I noticed: you're expanding HELOC volume per your March board deck (public). HELOC-specific income reverification is where we see the biggest cycle-time compression for CUs. Happy to show you the exact flow.",
            sent_at: '2025-03-18T10:00:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'theo.lindgren@greatlakesfcu.org',
            to: 'derek.ashford@ledgerline.com',
            subject: 'Re: Quick follow-up — the HELOC angle',
            body:
              "HELOC is exactly what I needed to show Ines. Book 30 min for next week.",
            sent_at: '2025-03-19T09:10:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_greatlakes_post_email',
        channel: 'email',
        contact_id: 'cw_ct_greatlakes_theo',
        sender_id: 'sender_05',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'theo.lindgren@greatlakesfcu.org',
            subject: 'Recap — HELOC flow demo materials',
            body:
              "Theo — attached: HELOC flow walkthrough, MeridianLink integration sheet, and member-UX mockups. We also have a CU ref (First Community CU) willing to chat. Next step: joint session with your LOS admin and ops team.",
            sent_at: '2025-04-02T16:40:00Z',
          },
          {
            direction: 'inbound',
            from: 'theo.lindgren@greatlakesfcu.org',
            to: 'derek.ashford@ledgerline.com',
            subject: 'Re: Recap — HELOC flow demo materials',
            body:
              "Scheduling. CU ref is great — please set that up too.",
            sent_at: '2025-04-03T07:45:00Z',
          },
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'theo.lindgren@greatlakesfcu.org',
            subject: 'Security review kick-off',
            body:
              "Theo — sending over SOC 2, pen test, and MeridianLink partner attestation. Your IT Security team can book time with our InfoSec lead at their convenience.",
            sent_at: '2025-06-20T09:15:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_greatlakes_nurture',
        channel: 'linkedin',
        contact_id: 'cw_ct_greatlakes_theo',
        sender_id: 'sender_05',
        phase: 'nurture',
        messages: [
          {
            direction: 'outbound',
            from: 'Derek Ashford (Ledgerline)',
            to: 'Theo Lindgren',
            body:
              "Saw the CU Today piece on member digital experience. Thought the HELOC angle we discussed fit your vision. No rush on anything.",
            sent_at: '2025-07-15T14:00:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Keystone Point Credit Union — won by Derek (sender_05)
  // ============================================================
  {
    deal_id: 'deal_keystone_point_cu',
    threads: [
      {
        thread_id: 'cw_keystone_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_keystone_owen',
        sender_id: 'sender_05',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'owen.mcgrath@keystonepointcu.org',
            subject: 'Loan officers + doc intake',
            body:
              "Owen — small CUs on MortgageBot tend to lean on loan officers for a lot of doc chasing. Ledgerline bolts onto that workflow without uprooting Finastra. Happy to show you on a 15-min screenshare.",
            sent_at: '2025-03-07T12:00:00Z',
          },
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'owen.mcgrath@keystonepointcu.org',
            subject: 'Re: Loan officers + doc intake',
            body:
              "Bumping with a specific angle — First Community CU (similar size, also on MortgageBot) cut LO doc-chasing time by ~22% in the first quarter. I can get you a peer call if useful.",
            sent_at: '2025-03-17T09:30:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'owen.mcgrath@keystonepointcu.org',
            to: 'derek.ashford@ledgerline.com',
            subject: 'Re: Loan officers + doc intake',
            body:
              "22% is worth 20 min. Send times.",
            sent_at: '2025-03-18T14:50:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_keystone_post_email',
        channel: 'email',
        contact_id: 'cw_ct_keystone_owen',
        sender_id: 'sender_05',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'owen.mcgrath@keystonepointcu.org',
            subject: 'Recap + starter scope',
            body:
              "Owen — recap: LO doc chasing is the #1 pain. Starter scope: paystub + W-2 parsing at upload. First Community peer call on 4/2. Draft proposal follows.",
            sent_at: '2025-03-26T15:20:00Z',
          },
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'owen.mcgrath@keystonepointcu.org',
            subject: 'Board cycle question',
            body:
              "Owen — know your board approval cycle is quarterly. Do you want our proposal ready for the July board deck or September?",
            sent_at: '2025-05-14T10:10:00Z',
          },
          {
            direction: 'inbound',
            from: 'owen.mcgrath@keystonepointcu.org',
            to: 'derek.ashford@ledgerline.com',
            subject: 'Re: Board cycle question',
            body:
              "September. Don't rush it — we need a clean story.",
            sent_at: '2025-05-14T16:00:00Z',
          },
          {
            direction: 'outbound',
            from: 'derek.ashford@ledgerline.com',
            to: 'owen.mcgrath@keystonepointcu.org',
            subject: 'Re: Board cycle question',
            body:
              "Understood. I'll sync on a cadence that gets us there. Sending a 1-pager you can use in the August committee pre-read.",
            sent_at: '2025-05-15T11:30:00Z',
          },
        ],
      },
    ],
  },
];

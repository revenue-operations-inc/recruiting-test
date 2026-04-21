import type { ClosedWonMessaging } from '../types';

// Messaging for deals: pine_valley, narragansett, anchor_coast, delta_crest,
// horizon_valley, fairmont_wholesale

export const MESSAGING_PART_2: ClosedWonMessaging[] = [
  // ============================================================
  // Pine Valley Home Loans — digital IMB on Blend, won by Elena (sender_06)
  // ============================================================
  {
    deal_id: 'deal_pine_valley',
    threads: [
      {
        thread_id: 'cw_pine_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_pinevalley_sasha',
        sender_id: 'sender_06',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'sasha.vandermeer@pinevalleyhome.com',
            subject: 'Blend + Ledgerline — self-employed borrowers',
            body:
              "Sasha — if Pine Valley's Blend stack is doing its job on PLA, the remaining throughput hit is self-employed income. Ledgerline is a Blend Partner — it's 2 config steps to wire in. Keen to show you.",
            sent_at: '2025-02-28T10:40:00Z',
          },
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'sasha.vandermeer@pinevalleyhome.com',
            subject: 'Re: Blend + Ledgerline — self-employed borrowers',
            body:
              "Sasha — specific comp: Silverpeak Home Finance (same Blend-native setup) got to live on our bank-statement analysis in 21 days end-to-end. Worth looking at?",
            sent_at: '2025-03-09T14:15:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'sasha.vandermeer@pinevalleyhome.com',
            to: 'elena.morozov@ledgerline.com',
            subject: 'Re: Blend + Ledgerline — self-employed borrowers',
            body:
              "21 days is aggressive — curious what they cut. Book me 30 min.",
            sent_at: '2025-03-10T09:00:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_pine_pre_li',
        channel: 'linkedin',
        contact_id: 'cw_ct_pinevalley_sasha',
        sender_id: 'sender_06',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'Elena Morozov (Ledgerline)',
            to: 'Sasha Vandermeer',
            body:
              "Saw your post about 'your stack should disappear from the borrower's POV'. 100% — same with UW's view. Dropping you a short note over email.",
            sent_at: '2025-03-02T11:00:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_pine_post_email',
        channel: 'email',
        contact_id: 'cw_ct_pinevalley_sasha',
        sender_id: 'sender_06',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'sasha.vandermeer@pinevalleyhome.com',
            subject: 'Recap + 21-day playbook',
            body:
              "Sasha — recap:\n\n• Goal: live on bank-statement analysis in self-employed flow within 30 days.\n• Starter scope: bank statements only (add paystubs / W-2s phase 2).\n• Integration: Blend Partner — your LO team doesn't touch config.\n\nAttaching the 21-day playbook from Silverpeak. Let's schedule the kick-off.",
            sent_at: '2025-03-20T16:30:00Z',
          },
          {
            direction: 'inbound',
            from: 'sasha.vandermeer@pinevalleyhome.com',
            to: 'elena.morozov@ledgerline.com',
            subject: 'Re: Recap + 21-day playbook',
            body:
              "Kick-off works. Send legal the MSA this week. I want to be live for the May volume push.",
            sent_at: '2025-03-21T08:20:00Z',
          },
          {
            direction: 'outbound',
            from: 'elena.morozov@ledgerline.com',
            to: 'sasha.vandermeer@pinevalleyhome.com',
            subject: 'MSA sent',
            body:
              "MSA went to legal this morning. Redlines welcome. Implementation kick-off scheduled 3/31 at 10am MT.",
            sent_at: '2025-03-24T09:10:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Narragansett Savings Bank Mortgage Division — won by Marcus (sender_03)
  // ============================================================
  {
    deal_id: 'deal_narragansett',
    threads: [
      {
        thread_id: 'cw_narragansett_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_narragansett_iwan',
        sender_id: 'sender_03',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'marcus.delgado@ledgerline.com',
            to: 'iwan.matysek@narragansettsavings.com',
            subject: 'Bank mortgage division efficiency',
            body:
              "Iwan — bank mortgage divisions have unique pain: they run on Encompass but report up through bank-wide risk. Ledgerline slots into both: ops efficiency for the division, clean audit trail for bank risk. Worth 20 min?",
            sent_at: '2024-11-20T10:00:00Z',
          },
          {
            direction: 'outbound',
            from: 'marcus.delgado@ledgerline.com',
            to: 'iwan.matysek@narragansettsavings.com',
            subject: 'Re: Bank mortgage division efficiency',
            body:
              "Iwan — ping. The HMDA reporting angle is also relevant: we see bank divisions trip on data-quality findings because doc-extracted data and LOS data don't match.",
            sent_at: '2024-12-02T09:30:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'iwan.matysek@narragansettsavings.com',
            to: 'marcus.delgado@ledgerline.com',
            subject: 'Re: Bank mortgage division efficiency',
            body:
              "HMDA angle is relevant, we got examiner feedback last cycle. Set up 30 min with Claire on CC.",
            sent_at: '2024-12-02T15:40:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_narragansett_post_email',
        channel: 'email',
        contact_id: 'cw_ct_narragansett_iwan',
        sender_id: 'sender_03',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'marcus.delgado@ledgerline.com',
            to: 'iwan.matysek@narragansettsavings.com',
            subject: 'Recap + HMDA data lineage',
            body:
              "Iwan — recap: ops efficiency + HMDA doc-data-lineage are both on the table. Attaching the HMDA data-quality brief. Next step: technical session with your data/risk team.",
            sent_at: '2024-12-18T17:00:00Z',
          },
          {
            direction: 'inbound',
            from: 'iwan.matysek@narragansettsavings.com',
            to: 'marcus.delgado@ledgerline.com',
            subject: 'Re: Recap + HMDA data lineage',
            body:
              "Book it. Our risk team is slow, expect Feb timing.",
            sent_at: '2024-12-19T09:00:00Z',
          },
          {
            direction: 'outbound',
            from: 'marcus.delgado@ledgerline.com',
            to: 'iwan.matysek@narragansettsavings.com',
            subject: 'Procurement scoping',
            body:
              "Iwan — want to get ahead of procurement. Do you need a TPRM packet now so it's not a blocker in Q2? Happy to send.",
            sent_at: '2025-02-04T11:20:00Z',
          },
          {
            direction: 'outbound',
            from: 'marcus.delgado@ledgerline.com',
            to: 'iwan.matysek@narragansettsavings.com',
            subject: 'MSA + pricing ranges',
            body:
              "Pricing scoped at annual volume: indicative $475K–$550K depending on phase 2 scope. MSA draft attached.",
            sent_at: '2025-04-30T13:00:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_narragansett_nurture',
        channel: 'email',
        contact_id: 'cw_ct_narragansett_iwan',
        sender_id: 'sender_03',
        phase: 'nurture',
        messages: [
          {
            direction: 'outbound',
            from: 'marcus.delgado@ledgerline.com',
            to: 'iwan.matysek@narragansettsavings.com',
            subject: 'American Banker piece — thought of you',
            body:
              "Iwan — American Banker ran a piece on mortgage division margin compression at mid-size banks. Mirrors the thesis from our first call.",
            sent_at: '2025-03-10T09:00:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Anchor Coast Bank — won by Marcus (sender_03)
  // ============================================================
  {
    deal_id: 'deal_anchor_coast',
    threads: [
      {
        thread_id: 'cw_anchor_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_anchor_tariq',
        sender_id: 'sender_03',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'marcus.delgado@ledgerline.com',
            to: 'tariq.abdelrahman@anchorcoastbank.com',
            subject: 'Encompass + HMDA — Anchor Coast',
            body:
              "Tariq — you've been vocal on the ABA panel about HMDA data quality. For bank mortgage divisions on Encompass, doc-extracted data consistency is where most mismatch findings originate. Happy to walk through how we handle it.",
            sent_at: '2025-09-09T12:10:00Z',
          },
          {
            direction: 'outbound',
            from: 'marcus.delgado@ledgerline.com',
            to: 'tariq.abdelrahman@anchorcoastbank.com',
            subject: 'Re: Encompass + HMDA — Anchor Coast',
            body:
              "Tariq — thought I'd share the Narragansett case study (similar-size bank mortgage division). They took 2 HMDA finding categories to zero in one exam cycle.",
            sent_at: '2025-09-19T10:40:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'tariq.abdelrahman@anchorcoastbank.com',
            to: 'marcus.delgado@ledgerline.com',
            subject: 'Re: Encompass + HMDA — Anchor Coast',
            body:
              "Useful. Book with me + Soledad (risk). Prefer next Wed afternoon.",
            sent_at: '2025-09-19T15:00:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_anchor_post_email',
        channel: 'email',
        contact_id: 'cw_ct_anchor_tariq',
        sender_id: 'sender_03',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'marcus.delgado@ledgerline.com',
            to: 'tariq.abdelrahman@anchorcoastbank.com',
            subject: 'Recap + exam cycle alignment',
            body:
              "Tariq — recap: ops efficiency + HMDA clean-up aligned to your exam cycle. Proposed go-live Q4 2025 to be in-place before spring HMDA submission.",
            sent_at: '2025-10-01T11:00:00Z',
          },
          {
            direction: 'inbound',
            from: 'tariq.abdelrahman@anchorcoastbank.com',
            to: 'marcus.delgado@ledgerline.com',
            subject: 'Re: Recap + exam cycle alignment',
            body:
              "Timing is critical. Keep it moving.",
            sent_at: '2025-10-02T08:45:00Z',
          },
          {
            direction: 'outbound',
            from: 'marcus.delgado@ledgerline.com',
            to: 'tariq.abdelrahman@anchorcoastbank.com',
            subject: 'Legal + TPRM status',
            body:
              "Legal redlines came back, addressing them by EOW. TPRM packet already with your vendor risk team.",
            sent_at: '2026-01-08T10:15:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Delta Crest Mortgage — won by Jordan (sender_01)
  // ============================================================
  {
    deal_id: 'deal_delta_crest',
    threads: [
      {
        thread_id: 'cw_delta_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_delta_margaux',
        sender_id: 'sender_01',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'jordan.park@ledgerline.com',
            to: 'margaux.st-pierre@deltacrestmtg.com',
            subject: 'Condition clearing backlog at Delta Crest',
            body:
              "Margaux — IMBs on Encompass in the $1.5–2B range typically carry 400–800 files with condition-clear aging past 5 days at any point. Curious where Delta Crest sits and whether the backlog is getting worse.",
            sent_at: '2024-12-03T09:20:00Z',
          },
          {
            direction: 'outbound',
            from: 'jordan.park@ledgerline.com',
            to: 'margaux.st-pierre@deltacrestmtg.com',
            subject: 'Re: Condition clearing backlog',
            body:
              "Margaux — one more. Delta Crest is showing up in brokerage channel chatter as aggressive on turn times. If that's the strategy, the condition-clearing backlog is the first thing that has to fall. Happy to compare playbooks.",
            sent_at: '2024-12-10T11:30:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'margaux.st-pierre@deltacrestmtg.com',
            to: 'jordan.park@ledgerline.com',
            subject: 'Re: Condition clearing backlog',
            body:
              "You nailed the positioning we're going for. Book me.",
            sent_at: '2024-12-10T17:00:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_delta_post_email',
        channel: 'email',
        contact_id: 'cw_ct_delta_margaux',
        sender_id: 'sender_01',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'jordan.park@ledgerline.com',
            to: 'margaux.st-pierre@deltacrestmtg.com',
            subject: 'Recap + rollout plan',
            body:
              "Recap: condition clearing backlog, self-employed income as phase 2. Rollout plan attached with ramp by branch.",
            sent_at: '2024-12-22T14:00:00Z',
          },
          {
            direction: 'outbound',
            from: 'jordan.park@ledgerline.com',
            to: 'margaux.st-pierre@deltacrestmtg.com',
            subject: 'Legal + pricing',
            body:
              "MSA sent. Pricing at $340K annual. Let me know what legal needs.",
            sent_at: '2025-03-18T10:00:00Z',
          },
          {
            direction: 'inbound',
            from: 'margaux.st-pierre@deltacrestmtg.com',
            to: 'jordan.park@ledgerline.com',
            subject: 'Re: Legal + pricing',
            body:
              "Legal close to done. Expect signature next week.",
            sent_at: '2025-04-10T08:30:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Horizon Valley Mortgage — fast cycle (18 days), won by Casey (sender_04)
  // Warm inbound referral; shorter messaging
  // ============================================================
  {
    deal_id: 'deal_horizon_valley',
    threads: [
      {
        thread_id: 'cw_horizon_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_horizon_felix',
        sender_id: 'sender_04',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'casey.liu@ledgerline.com',
            to: 'felix.karabashev@horizonvalleymtg.com',
            subject: 'Intro per Marta Alvarez',
            body:
              "Felix — Marta at Cypress Point suggested I reach out. She mentioned you're looking at paystub parsing as a quick-win starter. We can get you live in ~2 weeks on that alone.",
            sent_at: '2026-02-21T14:30:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'felix.karabashev@horizonvalleymtg.com',
            to: 'casey.liu@ledgerline.com',
            subject: 'Re: Intro per Marta Alvarez',
            body:
              "Marta's endorsement is enough. Book me 30 min tomorrow if you have it.",
            sent_at: '2026-02-21T15:45:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_horizon_post_email',
        channel: 'email',
        contact_id: 'cw_ct_horizon_felix',
        sender_id: 'sender_04',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'casey.liu@ledgerline.com',
            to: 'felix.karabashev@horizonvalleymtg.com',
            subject: 'Paystub starter — MSA + go-live plan',
            body:
              "Felix — thanks for the fast convo. MSA attached. Go-live plan targets 3/10 for paystub flow only.",
            sent_at: '2026-02-26T11:00:00Z',
          },
          {
            direction: 'inbound',
            from: 'felix.karabashev@horizonvalleymtg.com',
            to: 'casey.liu@ledgerline.com',
            subject: 'Re: Paystub starter — MSA + go-live plan',
            body:
              "Signed. Let's go.",
            sent_at: '2026-03-08T09:10:00Z',
          },
          {
            direction: 'outbound',
            from: 'casey.liu@ledgerline.com',
            to: 'felix.karabashev@horizonvalleymtg.com',
            subject: 'Kick-off scheduled',
            body:
              "Felix — kick-off on the calendar for 3/11. Our implementation lead Pat will own it from here.",
            sent_at: '2026-03-09T14:20:00Z',
          },
        ],
      },
    ],
  },

  // ============================================================
  // Fairmont Wholesale — won by Priya (sender_02)
  // ============================================================
  {
    deal_id: 'deal_fairmont_wholesale',
    threads: [
      {
        thread_id: 'cw_fairmont_pre_email',
        channel: 'email',
        contact_id: 'cw_ct_fairmont_alejandra',
        sender_id: 'sender_02',
        phase: 'pre_meeting',
        messages: [
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'alejandra.montes@fairmontwholesale.com',
            subject: 'Broker intake + fraud flags at Fairmont',
            body:
              "Alejandra — wholesale fraud detection is brutal at broker submission. We layer doc-integrity checks into intake — tampered paystubs, synthetic bank statements, inconsistent metadata — all flagged before UW touches the file. Would value 20 min.",
            sent_at: '2025-04-28T10:15:00Z',
          },
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'alejandra.montes@fairmontwholesale.com',
            subject: 'Re: Broker intake + fraud flags',
            body:
              "Alejandra — 2 wholesale originators we work with caught synthetic bank statements in the first 60 days live (one from a top-10 broker of theirs). Worth a talk?",
            sent_at: '2025-05-07T09:20:00Z',
            was_meeting_booker: true,
          },
          {
            direction: 'inbound',
            from: 'alejandra.montes@fairmontwholesale.com',
            to: 'priya.natarajan@ledgerline.com',
            subject: 'Re: Broker intake + fraud flags',
            body:
              "Specific case studies are helpful. Book me.",
            sent_at: '2025-05-07T13:45:00Z',
          },
        ],
      },
      {
        thread_id: 'cw_fairmont_post_email',
        channel: 'email',
        contact_id: 'cw_ct_fairmont_alejandra',
        sender_id: 'sender_02',
        phase: 'post_meeting_followup',
        messages: [
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'alejandra.montes@fairmontwholesale.com',
            subject: 'Recap + broker portal integration',
            body:
              "Alejandra — recap: fraud catch + UW rework reduction both on the table. Broker portal integration path scoped. Intro'd Dev on your tech side.",
            sent_at: '2025-05-22T16:40:00Z',
          },
          {
            direction: 'inbound',
            from: 'alejandra.montes@fairmontwholesale.com',
            to: 'priya.natarajan@ledgerline.com',
            subject: 'Re: Recap + broker portal integration',
            body:
              "Dev will be fast. Keep up with him.",
            sent_at: '2025-05-23T08:00:00Z',
          },
          {
            direction: 'outbound',
            from: 'priya.natarajan@ledgerline.com',
            to: 'alejandra.montes@fairmontwholesale.com',
            subject: 'Contract + onboarding',
            body:
              "Contract signed today. Onboarding kick-off 7/1 with Dev's team. First live doc scored target 7/18.",
            sent_at: '2025-06-26T11:00:00Z',
          },
        ],
      },
    ],
  },
];

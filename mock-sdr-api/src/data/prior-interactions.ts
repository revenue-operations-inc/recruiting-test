import type { InteractionThread } from '../types';

// ~30% of contacts have interaction history. The rest return empty arrays.
// Each thread is a full back-and-forth (not just outbound touches).

export const PRIOR_INTERACTIONS: InteractionThread[] = [
  // ------------- Elena Rivera (Cardinal Summit, CLO) — replied, no meeting -------------
  {
    id: 'int_cs_rivera_email_01',
    contact_id: 'contact_cs_rivera',
    channel: 'email',
    thread_id: 'thread_cs_rivera_email_01',
    outcome: 'replied_no_meeting',
    messages: [
      {
        direction: 'outbound',
        sender_id: 'sender_02',
        from: 'priya.natarajan@ledgerline.com',
        to: 'elena.rivera@cardinalsummit.com',
        subject: 'Cycle time at Cardinal Summit — underwriter touch on self-employed files',
        body:
          "Elena — I underwrote self-employed files at Guaranteed Rate for 4 years before moving to Ledgerline. The thing I could not fix from the UW seat was how long income calc took on anything other than a clean W-2.\n\nYou recently posted about condition clearing being the silent killer of cycle time. If Cardinal's mix is heavy on self-employed and blended income, we've seen IMBs on Encompass get 40%+ of UW time back on those files.\n\nWorth a 20-minute look?\n\n— Priya",
        sent_at: '2026-02-17T14:22:00Z',
      },
      {
        direction: 'inbound',
        from: 'elena.rivera@cardinalsummit.com',
        to: 'priya.natarajan@ledgerline.com',
        subject: 'Re: Cycle time at Cardinal Summit — underwriter touch on self-employed files',
        body:
          "Priya, thanks for the thoughtful note. We're mid-stream on a broader evaluation right now — not the moment, but please do reach back out in Q3. Appreciate the background, we don't usually get SDRs who have actually done UW work.\n\nElena",
        sent_at: '2026-02-19T09:04:00Z',
      },
      {
        direction: 'outbound',
        sender_id: 'sender_02',
        from: 'priya.natarajan@ledgerline.com',
        to: 'elena.rivera@cardinalsummit.com',
        subject: 'Re: Cycle time at Cardinal Summit — underwriter touch on self-employed files',
        body:
          "Totally understood, Elena. I'll circle back in July. If the Q3 evaluation is happening anyway, I'd love to share a benchmark set from IMBs of your volume band before you lock a vendor — just so you have comparables.\n\nWill follow up.",
        sent_at: '2026-02-19T15:40:00Z',
      },
    ],
  },

  // ------------- Anika Patel (Cardinal Summit, Head of Mortgage Tech) — outbound only, no reply -------------
  {
    id: 'int_cs_patel_li_01',
    contact_id: 'contact_cs_patel',
    channel: 'linkedin',
    thread_id: 'thread_cs_patel_li_01',
    outcome: 'no_reply',
    messages: [
      {
        direction: 'outbound',
        sender_id: 'sender_01',
        from: 'Jordan Park (Ledgerline)',
        to: 'Anika Patel',
        body:
          "Hey Anika — saw your post on evaluating document-AI vendors. If it helps, we ran the same evaluation framework with Cardinal-sized IMBs last year. Happy to share the template (no pitch).",
        sent_at: '2026-04-12T18:10:00Z',
      },
    ],
  },

  // ------------- Sarah Thornton (Ridgeline, CLO) — LinkedIn back-and-forth, no meeting booked yet -------------
  {
    id: 'int_rl_thornton_li_01',
    contact_id: 'contact_rl_thornton',
    channel: 'linkedin',
    thread_id: 'thread_rl_thornton_li_01',
    outcome: 'replied_no_meeting',
    messages: [
      {
        direction: 'outbound',
        sender_id: 'sender_06',
        from: 'Elena Morozov (Ledgerline)',
        to: 'Sarah Thornton',
        body:
          "Sarah — your post about 12 months of bank statements and every analyst calc-ing it differently is basically the exact problem Ledgerline was built for. I'd be curious whether you've looked at automating that in-house or whether you've tried anything external before.",
        sent_at: '2026-04-11T16:45:00Z',
      },
      {
        direction: 'inbound',
        from: 'Sarah Thornton',
        to: 'Elena Morozov (Ledgerline)',
        body:
          "We've looked at 2 vendors. Neither handled the full 24-month CFA calc the way our credit policy requires. If you have something that does, send me a one-pager, not a demo link.",
        sent_at: '2026-04-12T22:18:00Z',
      },
      {
        direction: 'outbound',
        sender_id: 'sender_06',
        from: 'Elena Morozov (Ledgerline)',
        to: 'Sarah Thornton',
        body:
          "Fair — I'll put together a spec-level doc on how our CFA output maps to a 24-month credit policy (including treatment of NSFs, transfers, and business-vs-personal commingling). You'll have it by Monday.",
        sent_at: '2026-04-13T14:00:00Z',
      },
    ],
  },

  // ------------- Jae-won Choi (Harborlight) — bounced email then successful LinkedIn conversation -------------
  {
    id: 'int_hb_choi_email_01',
    contact_id: 'contact_hb_choi',
    channel: 'email',
    thread_id: 'thread_hb_choi_email_01',
    outcome: 'bounced',
    messages: [
      {
        direction: 'outbound',
        sender_id: 'sender_03',
        from: 'marcus.delgado@ledgerline.com',
        to: 'jae-won.choi@harborlightbank.com', // wrong address — bounces
        subject: 'Quick intro — Ledgerline for Harborlight mortgage',
        body:
          "Jae-won — congrats on the new role at Harborlight. I work with bank mortgage divisions on pulling manual doc review out of the flow. Open to a 15-min intro?",
        sent_at: '2026-03-01T13:05:00Z',
      },
      {
        direction: 'inbound',
        from: 'mailer-daemon@harborlightbank.com',
        to: 'marcus.delgado@ledgerline.com',
        subject: 'Delivery Status Notification (Failure)',
        body:
          "Delivery to the following recipient failed permanently: jae-won.choi@harborlightbank.com — No such user.",
        sent_at: '2026-03-01T13:05:08Z',
      },
    ],
  },
  {
    id: 'int_hb_choi_li_01',
    contact_id: 'contact_hb_choi',
    channel: 'linkedin',
    thread_id: 'thread_hb_choi_li_01',
    outcome: 'replied_no_meeting',
    messages: [
      {
        direction: 'outbound',
        sender_id: 'sender_03',
        from: 'Marcus Delgado (Ledgerline)',
        to: 'Jae-won Choi',
        body:
          "Jae-won — quick note (email bounced). Harborlight has flagged the mortgage div as an efficiency focus in Q4 earnings. Curious whether your stack audit is including document-level automation or if you're scoping that for later.",
        sent_at: '2026-03-03T11:20:00Z',
      },
      {
        direction: 'inbound',
        from: 'Jae-won Choi',
        to: 'Marcus Delgado (Ledgerline)',
        body:
          "It's in the plan but not the first wave. Ping me again in ~6 weeks when I'm past the platform migration decision.",
        sent_at: '2026-03-05T09:10:00Z',
      },
    ],
  },

  // ------------- Megan Ryan (Silverpeak, Head of Mortgage Tech) — meeting booked (historical) -------------
  {
    id: 'int_sp_ryan_email_01',
    contact_id: 'contact_sp_ryan',
    channel: 'email',
    thread_id: 'thread_sp_ryan_email_01',
    outcome: 'meeting_booked',
    messages: [
      {
        direction: 'outbound',
        sender_id: 'sender_01',
        from: 'jordan.park@ledgerline.com',
        to: 'megan.ryan@silverpeakhome.com',
        subject: 'Snapdocs + Ledgerline for self-employed borrowers at Silverpeak',
        body:
          "Megan — you just posted about Blend + Ledgerline + Snapdocs being a sharp stack for self-employed borrowers. Great to see the reference. We've been thinking about the missing piece you called out (condition generation) and I'd love to share what we've shipped this quarter. 15 min next week?",
        sent_at: '2026-04-10T09:30:00Z',
      },
      {
        direction: 'inbound',
        from: 'megan.ryan@silverpeakhome.com',
        to: 'jordan.park@ledgerline.com',
        subject: 'Re: Snapdocs + Ledgerline for self-employed borrowers at Silverpeak',
        body:
          "Yes, happy to catch up. Condition-gen is exactly the gap. Thursday 11am MT?",
        sent_at: '2026-04-10T14:02:00Z',
      },
      {
        direction: 'outbound',
        sender_id: 'sender_01',
        from: 'jordan.park@ledgerline.com',
        to: 'megan.ryan@silverpeakhome.com',
        subject: 'Re: Snapdocs + Ledgerline for self-employed borrowers at Silverpeak',
        body:
          "Thursday 11 MT works — sending an invite. I'll bring Priya who used to UW at Guaranteed Rate; she'll have context on your UW team's complaints about condition clearing cycles.",
        sent_at: '2026-04-10T14:25:00Z',
      },
    ],
  },

  // ------------- Griffin Steele (Apex Wholesale) — unsubscribed -------------
  {
    id: 'int_ap_steele_email_01',
    contact_id: 'contact_ap_steele',
    channel: 'email',
    thread_id: 'thread_ap_steele_email_01',
    outcome: 'unsubscribed',
    messages: [
      {
        direction: 'outbound',
        sender_id: 'sender_04',
        from: 'casey.liu@ledgerline.com',
        to: 'gsteele@apexwholesale.com',
        subject: 'UW throughput at Apex',
        body:
          "Hi Griffin — wanted to see if you'd be open to a quick chat about UW throughput. Ledgerline helps wholesale lenders scale doc review without hiring.",
        sent_at: '2026-03-22T10:00:00Z',
      },
      {
        direction: 'outbound',
        sender_id: 'sender_04',
        from: 'casey.liu@ledgerline.com',
        to: 'gsteele@apexwholesale.com',
        subject: 'Re: UW throughput at Apex',
        body:
          "Bumping in case this got buried, Griffin. Happy to send over a 2-pager instead of a meeting if that's easier.",
        sent_at: '2026-03-29T11:15:00Z',
      },
      {
        direction: 'inbound',
        from: 'gsteele@apexwholesale.com',
        to: 'casey.liu@ledgerline.com',
        subject: 'Re: UW throughput at Apex',
        body:
          "Please unsubscribe me from all Ledgerline outbound. We already have vendor relationships in this space.",
        sent_at: '2026-03-29T16:40:00Z',
      },
    ],
  },
];

export function getPriorInteractionsForContact(
  contact_id: string,
  channel?: 'email' | 'linkedin'
): InteractionThread[] {
  const all = PRIOR_INTERACTIONS.filter((t) => t.contact_id === contact_id);
  if (!channel) return all;
  return all.filter((t) => t.channel === channel);
}

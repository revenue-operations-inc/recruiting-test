// End-to-end walkthrough that calls every endpoint for one target contact.
//
// Target: Sarah Thornton (CLO) at Ridgeline Non-QM Capital.
// Picked because she has the richest signal data and shared connections with senders —
// so the output demonstrates every endpoint returning real content.
//
// Run: npx ts-node examples/walkthrough.ts

import {
  getTargetOrganization,
  getTargetContact,
  getSignals,
  getPriorInteractions,
  getSenders,
  getClosedWonDeals,
  getClosedWonMessagingByDeal,
  getMeetingTranscript,
  sendMessage,
} from '../src';

const TARGET_CONTACT_ID = 'contact_rl_thornton';
const TARGET_ORG_ID = 'org_ridgeline_nonqm';

function divider(title: string) {
  console.log('\n' + '='.repeat(72));
  console.log(title);
  console.log('='.repeat(72));
}

function json(obj: unknown): string {
  return JSON.stringify(obj, null, 2);
}

async function main() {
  // ---- 1. Target organization
  divider('1. getTargetOrganization');
  const org = await getTargetOrganization(TARGET_ORG_ID);
  console.log(json(org));

  // ---- 2. Target contact
  divider('2. getTargetContact');
  const contact = await getTargetContact(TARGET_CONTACT_ID);
  console.log(json(contact));

  // ---- 3. Signals
  divider('3. getSignals');
  const signals = await getSignals(TARGET_CONTACT_ID);
  console.log(`Returned ${signals.length} signals:`);
  console.log(json(signals));

  // ---- 4. Prior interactions (both channels)
  divider('4a. getPriorInteractions (no channel filter)');
  const allInteractions = await getPriorInteractions(TARGET_CONTACT_ID);
  console.log(`Returned ${allInteractions.length} threads:`);
  console.log(json(allInteractions));

  divider('4b. getPriorInteractions (channel=linkedin)');
  const liInteractions = await getPriorInteractions(TARGET_CONTACT_ID, 'linkedin');
  console.log(`Returned ${liInteractions.length} threads:`);
  console.log(json(liInteractions));

  divider('4c. getPriorInteractions (channel=email)');
  const emailInteractions = await getPriorInteractions(TARGET_CONTACT_ID, 'email');
  console.log(`Returned ${emailInteractions.length} threads:`);
  console.log(json(emailInteractions));

  // ---- 5. Senders
  divider('5. getSenders (outbound team)');
  const senders = await getSenders();
  console.log(`Returned ${senders.length} senders.`);
  for (const s of senders) {
    console.log(
      `  - ${s.id}  ${s.full_name.padEnd(22)} ${s.title.padEnd(18)} specialty="${s.specialty}"  quota_remaining=${s.current_quota_remaining}  reply_rate=${s.avg_reply_rate_last_90d}`
    );
  }

  // ---- 6. Closed-won deals (full catalog)
  divider('6. getClosedWonDeals');
  const deals = await getClosedWonDeals();
  console.log(`Returned ${deals.length} closed-won deals:`);
  for (const d of deals) {
    console.log(
      `  - ${d.id.padEnd(28)} ${d.org_snapshot.name.padEnd(40)} ${d.org_snapshot.lender_type.padEnd(12)} $${(d.acv_usd / 1000).toFixed(0)}k  cycle=${d.sales_cycle_days}d  winner=${d.winning_sender_id}`
    );
  }

  // ---- 7. Closed-won messaging for a representative deal
  //     Pick Blackstone Ridge — non-QM, similar profile to Ridgeline.
  const representativeDealId = 'deal_blackstone_ridge';
  divider(`7a. getClosedWonMessagingByDeal(${representativeDealId}) — all channels`);
  const msgAll = await getClosedWonMessagingByDeal(representativeDealId);
  console.log(json(msgAll));

  divider(`7b. getClosedWonMessagingByDeal(${representativeDealId}, 'email')`);
  const msgEmail = await getClosedWonMessagingByDeal(representativeDealId, 'email');
  console.log(`Email-only threads: ${msgEmail?.threads.length}`);
  console.log(json(msgEmail));

  divider(`7c. getClosedWonMessagingByDeal(${representativeDealId}, 'linkedin')`);
  const msgLi = await getClosedWonMessagingByDeal(representativeDealId, 'linkedin');
  console.log(`LinkedIn-only threads: ${msgLi?.threads.length}`);
  console.log(json(msgLi));

  // ---- 8. Meeting transcript
  divider(`8. getMeetingTranscript(${representativeDealId})`);
  const transcript = await getMeetingTranscript(representativeDealId);
  console.log(json(transcript));

  // ---- 9. sendMessage (email + linkedin, with one that may hit the 5% failure path)
  divider('9a. sendMessage (email) — sender_02 → contact_rl_thornton');
  const emailResult = await sendMessage({
    channel: 'email',
    sender_id: 'sender_02',
    contact_id: TARGET_CONTACT_ID,
    content: {
      subject: 'Follow-up on 24-month CFA consistency',
      body:
        "Sarah — following your post on bank-statement review scaling. Our CFA engine runs against your credit policy (NSF exclusion, transfers, commingling). Happy to walk through at whatever depth makes sense — spec doc or 20 min call.",
    },
  });
  console.log(json(emailResult));

  divider('9b. sendMessage (linkedin) — sender_06 → contact_rl_thornton');
  const liResult = await sendMessage({
    channel: 'linkedin',
    sender_id: 'sender_06',
    contact_id: TARGET_CONTACT_ID,
    content: {
      body:
        "Sarah — since you asked for a one-pager on LI, landing it in your inbox this afternoon. Specifically built around the 24-month CFA policy requirements you called out.",
    },
  });
  console.log(json(liResult));

  divider('9c. sendMessage — attempt multiple to show 5% failure rate');
  let successes = 0;
  let failures: Array<string> = [];
  for (let i = 0; i < 20; i++) {
    const result = await sendMessage({
      channel: 'email',
      sender_id: 'sender_03',
      contact_id: TARGET_CONTACT_ID,
      content: { subject: `Test ${i}`, body: 'Test body' },
    });
    if (result.success) {
      successes++;
    } else {
      failures.push(result.error);
    }
  }
  console.log(`20 sends: ${successes} succeeded, ${failures.length} failed.`);
  if (failures.length > 0) {
    console.log(`  failure reasons: ${failures.join(', ')}`);
  }

  divider('DONE');
  console.log(
    `Called every endpoint for target contact ${TARGET_CONTACT_ID}. The candidate's job starts here:\n` +
      `  - compare the target's org profile to closed-won org_snapshots to find similar deals\n` +
      `  - pull messaging + transcripts from those deals to extract winning plays\n` +
      `  - pick a sender based on specialty, shared connections, quota, and reply-rate\n` +
      `  - generate personalized outreach\n` +
      `  - call sendMessage() to deliver it`
  );
}

main().catch((err) => {
  console.error('Walkthrough failed:', err);
  process.exit(1);
});

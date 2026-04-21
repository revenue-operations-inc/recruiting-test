import type { Channel, ClosedWonMessaging } from '../types';
import { findMessagingByDealId } from '../data/closed-won-messaging';
import { delay } from './_latency';

export async function getClosedWonMessagingByDeal(
  deal_id: string,
  channel?: Channel
): Promise<ClosedWonMessaging | null> {
  await delay();
  const raw = findMessagingByDealId(deal_id);
  if (!raw) return null;
  if (!channel) return raw;
  return {
    deal_id: raw.deal_id,
    threads: raw.threads.filter((t) => t.channel === channel),
  };
}

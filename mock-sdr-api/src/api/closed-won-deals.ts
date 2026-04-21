import type { ClosedWonDeal } from '../types';
import { CLOSED_WON_DEALS, findClosedWonDealById } from '../data/closed-won-deals';
import { delay } from './_latency';

export async function getClosedWonDeals(): Promise<ClosedWonDeal[]> {
  await delay();
  return CLOSED_WON_DEALS.slice();
}

export async function getClosedWonDeal(
  deal_id: string
): Promise<ClosedWonDeal | null> {
  await delay();
  return findClosedWonDealById(deal_id) ?? null;
}

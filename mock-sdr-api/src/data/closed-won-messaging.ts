import type { ClosedWonMessaging } from '../types';
import { MESSAGING_PART_1 } from './messaging-part1';
import { MESSAGING_PART_2 } from './messaging-part2';

export const CLOSED_WON_MESSAGING: ClosedWonMessaging[] = [
  ...MESSAGING_PART_1,
  ...MESSAGING_PART_2,
];

export function findMessagingByDealId(deal_id: string): ClosedWonMessaging | undefined {
  return CLOSED_WON_MESSAGING.find((m) => m.deal_id === deal_id);
}

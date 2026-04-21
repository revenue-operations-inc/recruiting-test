import type { Channel, InteractionThread } from '../types';
import { getPriorInteractionsForContact } from '../data/prior-interactions';
import { delay } from './_latency';

export async function getPriorInteractions(
  contact_id: string,
  channel?: Channel
): Promise<InteractionThread[]> {
  await delay();
  return getPriorInteractionsForContact(contact_id, channel);
}

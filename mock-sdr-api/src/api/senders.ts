import type { Sender } from '../types';
import { SENDERS, findSenderById } from '../data/senders';
import { delay } from './_latency';

export async function getSenders(): Promise<Sender[]> {
  await delay();
  return SENDERS.slice();
}

export async function getSender(sender_id: string): Promise<Sender | null> {
  await delay();
  return findSenderById(sender_id) ?? null;
}

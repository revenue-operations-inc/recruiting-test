import type { Signal } from '../types';
import { getSignalsForContact } from '../data/signals';
import { delay } from './_latency';

export async function getSignals(contact_id: string): Promise<Signal[]> {
  await delay();
  return getSignalsForContact(contact_id);
}

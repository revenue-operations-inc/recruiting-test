import { randomUUID } from 'crypto';
import type { Channel, SendMessageResult } from '../types';
import { delay } from './_latency';

const FAILURE_RATE = 0.05;
const FAILURE_MODES: Array<'rate_limited' | 'invalid_recipient'> = [
  'rate_limited',
  'invalid_recipient',
];

export interface SendMessageInput {
  channel: Channel;
  sender_id: string;
  contact_id: string;
  content: {
    subject?: string; // required for email, ignored for linkedin
    body: string;
  };
}

export async function sendMessage(input: SendMessageInput): Promise<SendMessageResult> {
  await delay();

  if (Math.random() < FAILURE_RATE) {
    const error = FAILURE_MODES[Math.floor(Math.random() * FAILURE_MODES.length)] as
      | 'rate_limited'
      | 'invalid_recipient';
    return { success: false, error };
  }

  return {
    success: true,
    message_id: randomUUID(),
    sent_at: new Date().toISOString(),
  };
}

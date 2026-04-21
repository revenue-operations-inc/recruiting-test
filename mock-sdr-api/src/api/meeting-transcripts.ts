import type { MeetingTranscript } from '../types';
import { findMeetingTranscriptByDealId } from '../data/meeting-transcripts';
import { delay } from './_latency';

export async function getMeetingTranscript(
  deal_id: string
): Promise<MeetingTranscript | null> {
  await delay();
  return findMeetingTranscriptByDealId(deal_id) ?? null;
}

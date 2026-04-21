// Public API surface for the mock SDR data layer.

export * from './types';

export {
  getTargetOrganization,
  listTargetOrganizations,
} from './api/organizations';

export {
  getTargetContact,
  listTargetContacts,
  listContactsForOrganization,
} from './api/contacts';

export { getSignals } from './api/signals';

export { getPriorInteractions } from './api/prior-interactions';

export { getSenders, getSender } from './api/senders';

export {
  getClosedWonDeals,
  getClosedWonDeal,
} from './api/closed-won-deals';

export { getClosedWonMessagingByDeal } from './api/closed-won-messaging';

export { getMeetingTranscript } from './api/meeting-transcripts';

export { sendMessage } from './api/send-message';
export type { SendMessageInput } from './api/send-message';

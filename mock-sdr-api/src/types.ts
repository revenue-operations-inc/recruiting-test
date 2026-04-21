// Shared types for the mock SDR API. All data objects conform to these shapes.

export type Channel = 'email' | 'linkedin';

export type LenderType = 'IMB' | 'credit_union' | 'bank' | 'non_QM' | 'wholesale';

export type LoanProduct =
  | 'conventional'
  | 'FHA'
  | 'VA'
  | 'jumbo'
  | 'non_QM'
  | 'HELOC';

export type Seniority = 'IC' | 'manager' | 'director' | 'VP' | 'C-level';

export type SignalType =
  | 'hiring_signal'
  | 'tech_stack_change'
  | 'regulatory_pressure'
  | 'volume_shift'
  | 'content_engagement'
  | 'job_change'
  | 'peer_activity';

export type InteractionOutcome =
  | 'no_reply'
  | 'replied_no_meeting'
  | 'meeting_booked'
  | 'bounced'
  | 'unsubscribed';

export type DealPhase = 'pre_meeting' | 'post_meeting_followup' | 'nurture';

// ---------- Organizations ----------

export interface NewsItem {
  date: string; // ISO date
  headline: string;
  source: string;
}

export interface TechStack {
  los?: string; // Loan Origination System (e.g. Encompass, Blend, ICE)
  pos?: string; // Point-of-Sale
  crm?: string;
  other?: string[];
}

export interface TargetOrganization {
  id: string;
  name: string;
  domain: string;
  website: string;
  hq_location: string;
  employee_count: number;
  annual_loan_volume_usd: number;
  lender_type: LenderType;
  loan_products: LoanProduct[];
  tech_stack: TechStack;
  recent_news: NewsItem[];
  funding_or_financials: string;
  founded_year: number;
}

// ---------- Contacts ----------

export interface EducationEntry {
  school: string;
  degree?: string;
  graduation_year?: number;
}

export interface PriorCompany {
  name: string;
  title: string;
  start_year: number;
  end_year: number;
}

export interface LinkedInActivity {
  date: string; // ISO date
  type: 'post' | 'comment' | 'share' | 'reaction';
  content_snippet: string;
}

export interface TargetContact {
  id: string;
  org_id: string;
  full_name: string;
  title: string;
  seniority: Seniority;
  email: string;
  linkedin_url: string | null;
  tenure_at_company_months: number;
  prior_companies: PriorCompany[];
  education: EducationEntry[];
  location: string;
  recent_linkedin_activity: LinkedInActivity[];
  shared_connections_with_senders: string[]; // sender_ids
}

// ---------- Signals ----------

export interface Signal {
  id: string;
  contact_id: string;
  org_id: string;
  type: SignalType;
  description: string;
  source: string;
  confidence: number; // 0 – 1
  detected_at: string; // ISO date
}

// ---------- Prior interactions ----------

export interface InteractionMessage {
  direction: 'outbound' | 'inbound';
  sender_id?: string; // only on outbound
  from: string;
  to: string;
  subject?: string; // only on email
  body: string;
  sent_at: string; // ISO timestamp
}

export interface InteractionThread {
  id: string;
  contact_id: string;
  channel: Channel;
  thread_id: string;
  messages: InteractionMessage[];
  outcome: InteractionOutcome;
}

// ---------- Senders ----------

export interface SenderPriorRole {
  company: string;
  title: string;
  years: number;
}

export interface Sender {
  id: string;
  full_name: string;
  title: string;
  linkedin_url: string;
  background_summary: string;
  tenure_at_company_months: number;
  prior_roles: SenderPriorRole[];
  shared_schools_with_prospects: string[];
  specialty: string;
  current_quota_remaining: number;
  avg_reply_rate_last_90d: number; // 0 – 1
}

// ---------- Closed-won deals ----------

export interface OrgSnapshot {
  name: string;
  domain: string;
  hq_location: string;
  employee_count: number;
  annual_loan_volume_usd: number;
  lender_type: LenderType;
  loan_products: LoanProduct[];
  tech_stack: TechStack;
}

export interface ClosedWonDeal {
  id: string;
  org_id: string;
  org_snapshot: OrgSnapshot;
  contact_ids: string[];
  primary_champion_contact_id: string;
  closed_at: string; // ISO date
  acv_usd: number;
  sales_cycle_days: number;
  primary_use_case: string;
  winning_sender_id: string;
}

// ---------- Closed-won messaging ----------

export interface DealMessage {
  direction: 'outbound' | 'inbound';
  from: string;
  to: string;
  subject?: string;
  body: string;
  sent_at: string;
  was_meeting_booker?: boolean;
}

export interface DealThread {
  thread_id: string;
  channel: Channel;
  contact_id: string;
  sender_id: string;
  phase: DealPhase;
  messages: DealMessage[];
}

export interface ClosedWonMessaging {
  deal_id: string;
  threads: DealThread[];
}

// ---------- Meeting transcripts ----------

export interface TranscriptAttendee {
  name: string;
  role: string;
  company: string;
  is_internal: boolean;
}

export interface TranscriptLine {
  timestamp: string; // e.g. "00:04:15"
  speaker: string;
  text: string;
}

export interface MeetingTranscript {
  deal_id: string;
  meeting_date: string; // ISO date
  duration_minutes: number;
  attendees: TranscriptAttendee[];
  transcript: TranscriptLine[];
  summary: string;
  identified_pain_points: string[];
  next_steps_discussed: string[];
}

// ---------- Send message ----------

export interface SendMessageSuccess {
  success: true;
  message_id: string;
  sent_at: string;
}

export interface SendMessageFailure {
  success: false;
  error: 'rate_limited' | 'invalid_recipient';
}

export type SendMessageResult = SendMessageSuccess | SendMessageFailure;

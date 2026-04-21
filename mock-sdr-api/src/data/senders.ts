import type { Sender } from '../types';

export const SENDERS: Sender[] = [
  {
    id: 'sender_01',
    full_name: 'Jordan Park',
    title: 'SDR Team Lead',
    linkedin_url: 'https://linkedin.com/in/jordan-park-ledgerline',
    background_summary:
      'Promoted to Team Lead after 18 months as an Ledgerline SDR. Started in BDR programs at enterprise SaaS before joining Ledgerline. Known internally for cracking the IMB segment.',
    tenure_at_company_months: 28,
    prior_roles: [
      { company: 'Gong', title: 'BDR', years: 1.5 },
      { company: 'DocuSign', title: 'Sales Development Associate', years: 1 },
    ],
    shared_schools_with_prospects: ['MIT Sloan', 'UC Berkeley', 'Stanford GSB', 'University of Oregon'],
    specialty: 'enterprise IMBs',
    current_quota_remaining: 0.58,
    avg_reply_rate_last_90d: 0.12,
  },
  {
    id: 'sender_02',
    full_name: 'Priya Natarajan',
    title: 'SDR',
    linkedin_url: 'https://linkedin.com/in/priya-natarajan-ledgerline',
    background_summary:
      'Spent 4 years as an underwriter at Guaranteed Rate before pivoting to SaaS sales. Deep mortgage ops fluency — speaks the language of AEs, CLOs, and UW directors natively.',
    tenure_at_company_months: 16,
    prior_roles: [
      { company: 'Guaranteed Rate', title: 'Mortgage Underwriter', years: 4 },
    ],
    shared_schools_with_prospects: ['University of North Carolina at Chapel Hill', 'Duke University', 'University of Oregon'],
    specialty: 'IMBs and non-QM lenders',
    current_quota_remaining: 0.42,
    avg_reply_rate_last_90d: 0.17,
  },
  {
    id: 'sender_03',
    full_name: 'Marcus Delgado',
    title: 'SDR',
    linkedin_url: 'https://linkedin.com/in/marcus-delgado-ledgerline',
    background_summary:
      'Career SDR with 3 years at two other B2B SaaS companies before Ledgerline. Extremely disciplined with cadence and volume; weaker on domain depth.',
    tenure_at_company_months: 11,
    prior_roles: [
      { company: 'Outreach', title: 'SDR', years: 2 },
      { company: 'Salesloft', title: 'SDR', years: 1 },
    ],
    shared_schools_with_prospects: ['MIT Sloan'],
    specialty: 'bank mortgage divisions',
    current_quota_remaining: 0.31,
    avg_reply_rate_last_90d: 0.09,
  },
  {
    id: 'sender_04',
    full_name: 'Casey Liu',
    title: 'SDR',
    linkedin_url: 'https://linkedin.com/in/casey-liu-ledgerline',
    background_summary:
      'Recent grad (3 months at Ledgerline). Strong writer, still ramping on mortgage-specific talk tracks. Eager and high-volume but still calibrating targeting.',
    tenure_at_company_months: 3,
    prior_roles: [
      { company: 'University campus ambassador program', title: 'Intern', years: 0.5 },
    ],
    shared_schools_with_prospects: ['Cal State Fullerton'],
    specialty: 'generalist — still being assigned',
    current_quota_remaining: 0.78,
    avg_reply_rate_last_90d: 0.06,
  },
  {
    id: 'sender_05',
    full_name: 'Derek Ashford',
    title: 'SDR',
    linkedin_url: 'https://linkedin.com/in/derek-ashford-ledgerline',
    background_summary:
      'Spent 7 years in community bank commercial lending before switching careers. Strong rapport with CU and small-bank buyers; calibrated for consultative, slow-trust sales motion.',
    tenure_at_company_months: 14,
    prior_roles: [
      { company: 'First Federal Savings', title: 'Commercial Lending Officer', years: 4 },
      { company: 'Regions Bank', title: 'Credit Analyst', years: 3 },
    ],
    shared_schools_with_prospects: ['University of Wisconsin-Madison'],
    specialty: 'credit unions and community banks',
    current_quota_remaining: 0.48,
    avg_reply_rate_last_90d: 0.15,
  },
  {
    id: 'sender_06',
    full_name: 'Elena Morozov',
    title: 'SDR',
    linkedin_url: 'https://linkedin.com/in/elena-morozov-ledgerline',
    background_summary:
      '2 years at Plaid in BDR/AE roles before Ledgerline. Fluent in fintech infrastructure, loves API-level conversations with mortgage tech leaders.',
    tenure_at_company_months: 9,
    prior_roles: [
      { company: 'Plaid', title: 'Account Development Rep', years: 2 },
    ],
    // Intentional "over quota" messiness: remaining = -0.04 (overachieved for current period)
    shared_schools_with_prospects: ['UC Berkeley', 'NYU Stern'],
    specialty: 'digital / fintech-forward lenders',
    current_quota_remaining: -0.04, // over-quota edge case
    avg_reply_rate_last_90d: 0.19,
  },
];

export function findSenderById(id: string): Sender | undefined {
  return SENDERS.find((s) => s.id === id);
}

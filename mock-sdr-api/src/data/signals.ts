import type { Signal } from '../types';

export const SIGNALS: Signal[] = [
  // ---- Ridgeline Non-QM: signal-rich ----
  {
    id: 'sig_rl_thornton_01',
    contact_id: 'contact_rl_thornton',
    org_id: 'org_ridgeline_nonqm',
    type: 'hiring_signal',
    description:
      'Ridgeline posted 12 underwriter roles in the last 30 days across Irvine, Phoenix, and Dallas ops hubs.',
    source: 'LinkedIn Jobs + company career page scrape',
    confidence: 0.94,
    detected_at: '2026-04-02',
  },
  {
    id: 'sig_rl_thornton_02',
    contact_id: 'contact_rl_thornton',
    org_id: 'org_ridgeline_nonqm',
    type: 'volume_shift',
    description:
      'Bank statement loan volume up 40% year-over-year per Ridgeline\'s March industry comment in Scotsman Guide.',
    source: 'Scotsman Guide',
    confidence: 0.88,
    detected_at: '2026-03-28',
  },
  {
    id: 'sig_rl_thornton_03',
    contact_id: 'contact_rl_thornton',
    org_id: 'org_ridgeline_nonqm',
    type: 'regulatory_pressure',
    description:
      'Industry reporting indicates non-QM originators actively engaging CFPB on ATR-QM revisions; Ridgeline named as participant.',
    source: 'Inside Mortgage Finance',
    confidence: 0.7,
    detected_at: '2026-02-11',
  },
  {
    id: 'sig_rl_thornton_04',
    contact_id: 'contact_rl_thornton',
    org_id: 'org_ridgeline_nonqm',
    type: 'content_engagement',
    description:
      'Contact posted publicly about manual bank-statement review at scale on 2026-04-10 — direct match for Ledgerline Bank Statement Analysis use case.',
    source: 'LinkedIn activity tracking',
    confidence: 0.9,
    detected_at: '2026-04-10',
  },
  {
    id: 'sig_rl_boateng_01',
    contact_id: 'contact_rl_boateng',
    org_id: 'org_ridgeline_nonqm',
    type: 'job_change',
    description: 'Started role as Director of Underwriting 9 months ago (from Newrez).',
    source: 'LinkedIn',
    confidence: 0.99,
    detected_at: '2025-07-15',
  },
  {
    id: 'sig_rl_boateng_02',
    contact_id: 'contact_rl_boateng',
    org_id: 'org_ridgeline_nonqm',
    type: 'content_engagement',
    description: 'Reacted to a whitepaper on bank-statement analysis automation.',
    source: 'Content tracking',
    confidence: 0.55,
    detected_at: '2026-04-04',
  },

  // ---- Cardinal Summit ----
  {
    id: 'sig_cs_patel_01',
    contact_id: 'contact_cs_patel',
    org_id: 'org_cardinal_summit',
    type: 'tech_stack_change',
    description:
      'Public LinkedIn post from Anika Patel on 2026-04-11 announcing open evaluation of document-AI vendors for income calc + bank statement review.',
    source: 'LinkedIn activity tracking',
    confidence: 0.95,
    detected_at: '2026-04-11',
  },
  {
    id: 'sig_cs_patel_02',
    contact_id: 'contact_cs_patel',
    org_id: 'org_cardinal_summit',
    type: 'content_engagement',
    description: 'Reacted to an Ledgerline post on "what LLMs change for loan ops" on 2026-04-02.',
    source: 'LinkedIn activity tracking',
    confidence: 0.8,
    detected_at: '2026-04-02',
  },
  {
    id: 'sig_cs_rivera_01',
    contact_id: 'contact_cs_rivera',
    org_id: 'org_cardinal_summit',
    type: 'content_engagement',
    description:
      'Downloaded "State of Mortgage Loan Ops 2026" whitepaper from Ledgerline site using work email on 2026-03-11.',
    source: 'Marketing automation',
    confidence: 0.92,
    detected_at: '2026-03-11',
  },

  // ---- Harborlight Bank ----
  {
    id: 'sig_hb_choi_01',
    contact_id: 'contact_hb_choi',
    org_id: 'org_harborlight_bank',
    type: 'job_change',
    description: 'Started as Head of Mortgage Technology 3 months ago. Previously Senior Director at Rocket Mortgage.',
    source: 'LinkedIn + press release',
    confidence: 0.99,
    detected_at: '2026-02-02',
  },
  {
    id: 'sig_hb_choi_02',
    contact_id: 'contact_hb_choi',
    org_id: 'org_harborlight_bank',
    type: 'regulatory_pressure',
    description:
      'Q4 2025 earnings call flagged mortgage division as "efficiency focus area" — typically correlates with buying windows for ops-automation vendors.',
    source: 'American Banker / earnings call transcript',
    confidence: 0.75,
    detected_at: '2026-03-12',
  },

  // ---- Silverpeak ----
  {
    id: 'sig_sp_calderon_01',
    contact_id: 'contact_sp_calderon',
    org_id: 'org_silverpeak',
    type: 'job_change',
    description: 'Started as COO 2 months ago (from Better.com).',
    source: 'Press release',
    confidence: 0.99,
    detected_at: '2026-02-14',
  },
  {
    id: 'sig_sp_ryan_01',
    contact_id: 'contact_sp_ryan',
    org_id: 'org_silverpeak',
    type: 'peer_activity',
    description:
      'Contact publicly referenced "Blend + Ledgerline + Snapdocs" stack on 2026-04-09 — existing Ledgerline mention signals potential expansion or peer validation.',
    source: 'LinkedIn activity tracking',
    confidence: 0.85,
    detected_at: '2026-04-09',
  },

  // ---- Meridian CU ----
  {
    id: 'sig_mcu_harris_01',
    contact_id: 'contact_mcu_harris',
    org_id: 'org_meridian_cu',
    type: 'volume_shift',
    description: 'Meridian CU announced HELOC product relaunch — expected volume ramp in Q3 2026.',
    source: 'CU Today',
    confidence: 0.7,
    detected_at: '2026-03-04',
  },

  // ---- Apex Wholesale ----
  {
    id: 'sig_ap_steele_01',
    contact_id: 'contact_ap_steele',
    org_id: 'org_apex_wholesale',
    type: 'volume_shift',
    description: 'Apex expanded non-QM matrix for broker partners on 2026-03-20 — typically increases UW doc review load.',
    source: 'Mortgage Professional America',
    confidence: 0.8,
    detected_at: '2026-03-20',
  },

  // ---- Evergreen ----
  {
    id: 'sig_ev_liang_01',
    contact_id: 'contact_ev_liang',
    org_id: 'org_evergreen',
    type: 'tech_stack_change',
    description: 'Public post indicated RFP out for underwriting automation; ~5 vendors being evaluated.',
    source: 'LinkedIn activity tracking',
    confidence: 0.9,
    detected_at: '2026-04-03',
  },
  {
    id: 'sig_ev_liang_02',
    contact_id: 'contact_ev_liang',
    org_id: 'org_evergreen',
    type: 'peer_activity',
    description:
      'Two directly comparable Encompass-based IMBs of similar size recently adopted Ledgerline (Cascade Ridge Lending, Cypress Point Mortgage).',
    source: 'Internal CRM cross-reference',
    confidence: 0.82,
    detected_at: '2026-04-07',
  },

  // contact_cs_whitman, contact_mcu_okafor, contact_rl_calderon, contact_hb_bishop,
  // contact_ap_nair, contact_sp_brody, contact_tr_daniels, contact_ev_nowak
  // intentionally have zero signals — most contacts should.
];

export function getSignalsForContact(contact_id: string): Signal[] {
  return SIGNALS.filter((s) => s.contact_id === contact_id);
}

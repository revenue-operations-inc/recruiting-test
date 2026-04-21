import type { TargetContact } from '../types';

export const CONTACTS: TargetContact[] = [
  // -------------------- Cardinal Summit Mortgage (IMB, Encompass) --------------------
  {
    id: 'contact_cs_rivera',
    org_id: 'org_cardinal_summit',
    full_name: 'Elena Rivera',
    title: 'Chief Lending Officer',
    seniority: 'C-level',
    email: 'elena.rivera@cardinalsummit.com',
    linkedin_url: 'https://linkedin.com/in/elenarivera-clo',
    tenure_at_company_months: 38,
    prior_companies: [
      { name: 'PennyMac', title: 'SVP, Correspondent Lending', start_year: 2015, end_year: 2022 },
      { name: 'Wells Fargo Home Lending', title: 'Director, Credit Policy', start_year: 2008, end_year: 2015 },
    ],
    education: [
      { school: 'University of North Carolina at Chapel Hill', degree: 'MBA', graduation_year: 2008 },
      { school: 'Duke University', degree: 'BS Economics', graduation_year: 2002 },
    ],
    location: 'Charlotte, NC',
    recent_linkedin_activity: [
      {
        date: '2026-04-08',
        type: 'post',
        content_snippet:
          'Condition clearing is still the silent killer of cycle time. Anyone seeing real progress on automating income review for W-2 + self-employed blends?',
      },
      {
        date: '2026-03-19',
        type: 'comment',
        content_snippet: 'Agree — tax transcript turn times are still the bottleneck for us too.',
      },
    ],
    shared_connections_with_senders: ['sender_02'],
  },
  {
    id: 'contact_cs_whitman',
    org_id: 'org_cardinal_summit',
    full_name: 'Derek Whitman',
    title: 'Director of Underwriting',
    seniority: 'director',
    email: 'derek.whitman@cardinalsummit.com',
    linkedin_url: 'https://linkedin.com/in/derekwhitman',
    tenure_at_company_months: 22,
    prior_companies: [
      { name: 'Fairway Independent Mortgage', title: 'Senior Underwriter', start_year: 2018, end_year: 2024 },
      { name: 'loanDepot', title: 'Underwriter II', start_year: 2014, end_year: 2018 },
    ],
    education: [{ school: 'Clemson University', degree: 'BA Finance', graduation_year: 2013 }],
    location: 'Charlotte, NC',
    recent_linkedin_activity: [
      {
        date: '2026-03-30',
        type: 'share',
        content_snippet: 'Sharing: "How top lenders cut underwriter touch time by 35%" — interesting read.',
      },
    ],
    shared_connections_with_senders: [],
  },
  {
    id: 'contact_cs_patel',
    org_id: 'org_cardinal_summit',
    full_name: 'Anika Patel',
    title: 'Head of Mortgage Technology',
    seniority: 'VP',
    email: 'anika.patel@cardinalsummit.com',
    linkedin_url: 'https://linkedin.com/in/anikapatel-mortgagetech',
    tenure_at_company_months: 14,
    prior_companies: [
      { name: 'Blend', title: 'Senior Product Manager, Lending', start_year: 2019, end_year: 2024 },
      { name: 'Ellie Mae', title: 'Product Manager', start_year: 2015, end_year: 2019 },
    ],
    education: [
      { school: 'UC Berkeley', degree: 'MS Information Systems', graduation_year: 2015 },
      { school: 'UC Berkeley', degree: 'BS Computer Science', graduation_year: 2013 },
    ],
    location: 'Charlotte, NC',
    recent_linkedin_activity: [
      {
        date: '2026-04-11',
        type: 'post',
        content_snippet:
          'Kicking off an evaluation of document-AI vendors for income calc + bank statement review. Pattern-matching vs. LLM approaches both on the table.',
      },
      {
        date: '2026-04-02',
        type: 'reaction',
        content_snippet: 'Reacted to post by Ledgerline on "what LLMs change for loan ops."',
      },
    ],
    shared_connections_with_senders: ['sender_01', 'sender_06'],
  },

  // -------------------- Meridian Credit Union --------------------
  {
    id: 'contact_mcu_harris',
    org_id: 'org_meridian_cu',
    full_name: 'Marcus Harris',
    title: 'VP of Operations, Home Loans',
    seniority: 'VP',
    email: 'mharris@meridiancu.org',
    linkedin_url: 'https://linkedin.com/in/marcus-harris-cu',
    tenure_at_company_months: 72,
    prior_companies: [
      { name: 'Summit CU', title: 'Director of Mortgage Ops', start_year: 2013, end_year: 2020 },
    ],
    education: [{ school: 'University of Wisconsin-Madison', degree: 'BBA', graduation_year: 2006 }],
    location: 'Madison, WI',
    recent_linkedin_activity: [
      {
        date: '2026-03-22',
        type: 'post',
        content_snippet:
          'Relaunching HELOC means re-training the whole ops flow. Draws, income re-verification, doc handling — lot to get right.',
      },
    ],
    shared_connections_with_senders: ['sender_05'],
  },
  {
    id: 'contact_mcu_okafor',
    org_id: 'org_meridian_cu',
    full_name: 'Chidi Okafor',
    title: 'COO',
    seniority: 'C-level',
    email: 'cokafor@meridiancu.org',
    linkedin_url: 'https://linkedin.com/in/chidi-okafor-coo',
    tenure_at_company_months: 28,
    prior_companies: [
      { name: 'BECU', title: 'SVP Operations', start_year: 2014, end_year: 2023 },
    ],
    education: [
      { school: 'Northwestern Kellogg', degree: 'MBA', graduation_year: 2010 },
      { school: 'University of Lagos', degree: 'BSc Accounting', graduation_year: 2002 },
    ],
    location: 'Madison, WI',
    recent_linkedin_activity: [],
    shared_connections_with_senders: [],
  },

  // -------------------- Ridgeline Non-QM Capital (signal-rich target) --------------------
  {
    id: 'contact_rl_thornton',
    org_id: 'org_ridgeline_nonqm',
    full_name: 'Sarah Thornton',
    title: 'Chief Lending Officer',
    seniority: 'C-level',
    email: 'sthornton@ridgelinenonqm.com',
    linkedin_url: 'https://linkedin.com/in/sarah-thornton-nonqm',
    tenure_at_company_months: 44,
    prior_companies: [
      { name: 'Angel Oak Mortgage', title: 'VP Credit', start_year: 2016, end_year: 2022 },
      { name: 'Deephaven Mortgage', title: 'Senior Credit Analyst', start_year: 2012, end_year: 2016 },
    ],
    education: [
      { school: 'USC Marshall', degree: 'MBA', graduation_year: 2012 },
      { school: 'UCLA', degree: 'BA Economics', graduation_year: 2006 },
    ],
    location: 'Irvine, CA',
    recent_linkedin_activity: [
      {
        date: '2026-04-10',
        type: 'post',
        content_snippet:
          'Bank statement loans still require a level of manual review that does not scale. 12-24 months of statements per borrower, and every analyst calcs it a little differently.',
      },
      {
        date: '2026-04-01',
        type: 'post',
        content_snippet:
          'Hiring 12 underwriters is not a growth strategy. We have to solve the throughput problem differently this cycle.',
      },
    ],
    shared_connections_with_senders: ['sender_02', 'sender_06'],
  },
  {
    id: 'contact_rl_calderon',
    org_id: 'org_ridgeline_nonqm',
    full_name: 'Tomás Calderón',
    title: 'VP Capital Markets',
    seniority: 'VP',
    email: 'tcalderon@ridgelinenonqm.com',
    linkedin_url: 'https://linkedin.com/in/tomas-calderon-capmkts',
    tenure_at_company_months: 18,
    prior_companies: [
      { name: 'Redwood Trust', title: 'Director, Non-QM Trading', start_year: 2017, end_year: 2024 },
    ],
    education: [{ school: 'NYU Stern', degree: 'MBA', graduation_year: 2013 }],
    location: 'Newport Beach, CA',
    recent_linkedin_activity: [
      {
        date: '2026-03-25',
        type: 'comment',
        content_snippet: 'Rating agencies are going to keep asking about doc-level consistency in securitizations.',
      },
    ],
    shared_connections_with_senders: [],
  },
  {
    id: 'contact_rl_boateng',
    org_id: 'org_ridgeline_nonqm',
    full_name: 'Nia Boateng',
    title: 'Director of Underwriting',
    seniority: 'director',
    email: 'nboateng@ridgelinenonqm.com',
    linkedin_url: 'https://linkedin.com/in/nia-boateng-uw',
    tenure_at_company_months: 9,
    prior_companies: [
      { name: 'Newrez', title: 'Senior Underwriter, Non-QM', start_year: 2019, end_year: 2025 },
    ],
    education: [{ school: 'Cal State Fullerton', degree: 'BS Business', graduation_year: 2014 }],
    location: 'Irvine, CA',
    recent_linkedin_activity: [
      { date: '2026-04-04', type: 'reaction', content_snippet: 'Reacted to a whitepaper on bank-statement analysis.' },
    ],
    shared_connections_with_senders: ['sender_04'],
  },

  // -------------------- Harborlight Bank --------------------
  {
    id: 'contact_hb_choi',
    org_id: 'org_harborlight_bank',
    full_name: 'Jae-won Choi',
    title: 'Head of Mortgage Technology',
    seniority: 'VP',
    email: 'jchoi@harborlightbank.com',
    linkedin_url: 'https://linkedin.com/in/jaewon-choi-mortgage',
    tenure_at_company_months: 3,
    prior_companies: [
      { name: 'Rocket Mortgage', title: 'Senior Director, Originations Platform', start_year: 2016, end_year: 2025 },
    ],
    education: [
      { school: 'MIT Sloan', degree: 'MBA', graduation_year: 2012 },
      { school: 'University of Michigan', degree: 'BS Computer Science', graduation_year: 2006 },
    ],
    location: 'Boston, MA',
    recent_linkedin_activity: [
      {
        date: '2026-04-12',
        type: 'post',
        content_snippet:
          'First 90 days at Harborlight. Stack audit underway. There is a lot of opportunity in underwriting and condition clearing.',
      },
    ],
    shared_connections_with_senders: ['sender_01', 'sender_03'],
  },
  {
    id: 'contact_hb_bishop',
    org_id: 'org_harborlight_bank',
    full_name: 'Rebecca Bishop',
    title: 'VP of Operations',
    seniority: 'VP',
    email: 'rbishop@harborlightbank.com',
    linkedin_url: 'https://linkedin.com/in/rebecca-bishop-ops',
    tenure_at_company_months: 55,
    prior_companies: [
      { name: 'Citizens Bank', title: 'Director of Mortgage Fulfillment', start_year: 2015, end_year: 2021 },
    ],
    education: [{ school: 'Boston College', degree: 'BA Finance', graduation_year: 2007 }],
    location: 'Boston, MA',
    recent_linkedin_activity: [],
    shared_connections_with_senders: [],
  },

  // -------------------- Apex Wholesale Lending --------------------
  {
    id: 'contact_ap_steele',
    org_id: 'org_apex_wholesale',
    full_name: 'Griffin Steele',
    title: 'Chief Lending Officer',
    seniority: 'C-level',
    email: 'gsteele@apexwholesale.com',
    linkedin_url: 'https://linkedin.com/in/griffinsteele',
    tenure_at_company_months: 61,
    prior_companies: [
      { name: 'UWM', title: 'VP Credit', start_year: 2012, end_year: 2021 },
      { name: 'Flagstar', title: 'Director Underwriting', start_year: 2006, end_year: 2012 },
    ],
    education: [{ school: 'Texas A&M', degree: 'BBA Finance', graduation_year: 2004 }],
    location: 'Dallas, TX',
    recent_linkedin_activity: [
      {
        date: '2026-03-21',
        type: 'post',
        content_snippet:
          'Our brokers want non-QM matrix expansion yesterday. The ops question is: can UW keep up?',
      },
    ],
    shared_connections_with_senders: [],
  },
  {
    id: 'contact_ap_nair',
    org_id: 'org_apex_wholesale',
    full_name: 'Divya Nair',
    title: 'VP Capital Markets',
    seniority: 'VP',
    email: 'dnair@apexwholesale.com',
    linkedin_url: 'https://linkedin.com/in/divya-nair-capmkts',
    tenure_at_company_months: 30,
    prior_companies: [
      { name: 'Mr. Cooper', title: 'Director, Secondary Marketing', start_year: 2018, end_year: 2023 },
    ],
    education: [{ school: 'UT Austin McCombs', degree: 'MBA', graduation_year: 2015 }],
    location: 'Dallas, TX',
    recent_linkedin_activity: [],
    shared_connections_with_senders: ['sender_06'],
  },

  // -------------------- Silverpeak Home Finance --------------------
  {
    id: 'contact_sp_calderon',
    org_id: 'org_silverpeak',
    full_name: 'Jamie Calderon',
    title: 'COO',
    seniority: 'C-level',
    email: 'jcalderon@silverpeakhome.com',
    linkedin_url: 'https://linkedin.com/in/jamie-calderon-coo',
    tenure_at_company_months: 2,
    prior_companies: [
      { name: 'Better.com', title: 'VP Operations', start_year: 2019, end_year: 2024 },
      { name: 'SoFi Home Loans', title: 'Director Ops', start_year: 2016, end_year: 2019 },
    ],
    education: [{ school: 'Stanford GSB', degree: 'MBA', graduation_year: 2015 }],
    location: 'Denver, CO',
    recent_linkedin_activity: [
      {
        date: '2026-03-05',
        type: 'post',
        content_snippet:
          'Excited to be starting at Silverpeak. The team has built a truly digital-first origination experience.',
      },
    ],
    shared_connections_with_senders: ['sender_01'],
  },
  {
    id: 'contact_sp_ryan',
    org_id: 'org_silverpeak',
    full_name: 'Megan Ryan',
    title: 'Head of Mortgage Technology',
    seniority: 'director',
    email: 'mryan@silverpeakhome.com',
    linkedin_url: 'https://linkedin.com/in/megan-ryan-mortgagetech',
    tenure_at_company_months: 32,
    prior_companies: [
      { name: 'Blend', title: 'Staff Product Manager', start_year: 2018, end_year: 2022 },
    ],
    education: [{ school: 'CU Boulder', degree: 'BS Information Systems', graduation_year: 2013 }],
    location: 'Denver, CO',
    recent_linkedin_activity: [
      {
        date: '2026-04-09',
        type: 'post',
        content_snippet:
          'Blend + Ledgerline + Snapdocs is a pretty sharp stack for self-employed borrowers. Still work to do on condition generation.',
      },
    ],
    shared_connections_with_senders: ['sender_06'],
  },
  {
    id: 'contact_sp_brody',
    org_id: 'org_silverpeak',
    full_name: 'Aiden Brody',
    title: 'Director of Underwriting',
    seniority: 'director',
    email: 'abrody@silverpeakhome.com',
    linkedin_url: 'https://linkedin.com/in/aiden-brody-uw',
    tenure_at_company_months: 17,
    prior_companies: [
      { name: 'Guaranteed Rate', title: 'Senior UW', start_year: 2017, end_year: 2024 },
    ],
    education: [{ school: 'University of Denver', degree: 'BS Finance', graduation_year: 2015 }],
    location: 'Denver, CO',
    recent_linkedin_activity: [],
    shared_connections_with_senders: [],
  },

  // -------------------- Three Rivers FCU (sparse / messy data case) --------------------
  {
    id: 'contact_tr_daniels',
    org_id: 'org_three_rivers_cu',
    full_name: 'Lorraine Daniels',
    title: 'VP of Operations',
    seniority: 'VP',
    email: 'ldaniels@threeriversfcu.org',
    linkedin_url: null, // intentionally missing — messy data
    tenure_at_company_months: 132,
    prior_companies: [],
    education: [],
    location: 'Pittsburgh, PA',
    recent_linkedin_activity: [],
    shared_connections_with_senders: [],
  },

  // -------------------- Evergreen Mortgage Partners --------------------
  {
    id: 'contact_ev_nowak',
    org_id: 'org_evergreen',
    full_name: 'Peter Nowak',
    title: 'Chief Lending Officer',
    seniority: 'C-level',
    email: 'pnowak@evergreenmtgpartners.com',
    linkedin_url: 'https://linkedin.com/in/peter-nowak-clo',
    tenure_at_company_months: 48,
    prior_companies: [
      { name: 'CrossCountry Mortgage', title: 'VP Regional Lending', start_year: 2014, end_year: 2022 },
    ],
    education: [{ school: 'University of Oregon', degree: 'BS Business', graduation_year: 2004 }],
    location: 'Portland, OR',
    recent_linkedin_activity: [
      {
        date: '2026-03-29',
        type: 'post',
        content_snippet:
          'We hit $2.7B last year. Next phase is about pulling costs out of the file, not adding heads.',
      },
    ],
    shared_connections_with_senders: ['sender_02'],
  },
  {
    id: 'contact_ev_liang',
    org_id: 'org_evergreen',
    full_name: 'Sophie Liang',
    title: 'Head of Mortgage Technology',
    seniority: 'director',
    email: 'sliang@evergreenmtgpartners.com',
    linkedin_url: 'https://linkedin.com/in/sophie-liang-mtgtech',
    tenure_at_company_months: 26,
    prior_companies: [
      { name: 'Ellie Mae (ICE)', title: 'Solutions Architect', start_year: 2016, end_year: 2023 },
    ],
    education: [{ school: 'Oregon State', degree: 'BS Computer Science', graduation_year: 2014 }],
    location: 'Portland, OR',
    recent_linkedin_activity: [
      {
        date: '2026-04-03',
        type: 'share',
        content_snippet: 'Shared: RFP going out for underwriting automation. Evaluating ~5 vendors.',
      },
    ],
    shared_connections_with_senders: ['sender_01'],
  },
];

export function findContactById(id: string): TargetContact | undefined {
  return CONTACTS.find((c) => c.id === id);
}

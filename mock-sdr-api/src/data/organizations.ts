import type { TargetOrganization } from '../types';

export const ORGANIZATIONS: TargetOrganization[] = [
  {
    id: 'org_cardinal_summit',
    name: 'Cardinal Summit Mortgage',
    domain: 'cardinalsummit.com',
    website: 'https://cardinalsummit.com',
    hq_location: 'Charlotte, NC',
    employee_count: 640,
    annual_loan_volume_usd: 4_200_000_000,
    lender_type: 'IMB',
    loan_products: ['conventional', 'FHA', 'VA', 'jumbo'],
    tech_stack: {
      los: 'Encompass',
      pos: 'SimpleNexus',
      crm: 'Salesforce Financial Services Cloud',
      other: ['Optimal Blue (PPE)', 'DocMagic'],
    },
    recent_news: [
      {
        date: '2026-02-18',
        headline: 'Cardinal Summit expands retail branch footprint into Tennessee and Georgia',
        source: 'National Mortgage News',
      },
      {
        date: '2026-01-22',
        headline: 'Cardinal Summit hires veteran capital markets leader from PennyMac',
        source: 'HousingWire',
      },
    ],
    funding_or_financials:
      'Privately held. 2025 reported origination volume of $4.2B across 14 states. Profitable FY2024 after two loss years.',
    founded_year: 2008,
  },
  {
    id: 'org_meridian_cu',
    name: 'Meridian Credit Union Home Loans',
    domain: 'meridiancu.org',
    website: 'https://meridiancu.org/home-loans',
    hq_location: 'Madison, WI',
    employee_count: 1200, // whole CU; mortgage arm is ~140
    annual_loan_volume_usd: 780_000_000,
    lender_type: 'credit_union',
    loan_products: ['conventional', 'FHA', 'VA', 'HELOC'],
    tech_stack: {
      los: 'MeridianLink Mortgage',
      pos: 'In-house portal',
      crm: 'HubSpot',
      other: ['Symitar core', 'DU/LPA'],
    },
    recent_news: [
      {
        date: '2026-03-04',
        headline: 'Meridian CU announces HELOC product relaunch after 18-month pause',
        source: 'CU Today',
      },
    ],
    funding_or_financials:
      'Member-owned, $9.1B in assets. Mortgage arm contributed 11% of 2025 net interest income.',
    founded_year: 1954,
  },
  {
    id: 'org_ridgeline_nonqm',
    name: 'Ridgeline Non-QM Capital',
    domain: 'ridgelinenonqm.com',
    website: 'https://ridgelinenonqm.com',
    hq_location: 'Irvine, CA',
    employee_count: 210,
    annual_loan_volume_usd: 1_600_000_000,
    lender_type: 'non_QM',
    loan_products: ['non_QM', 'jumbo'],
    tech_stack: {
      los: 'LendingPad',
      pos: 'Custom broker portal',
      crm: 'Salesforce',
      other: ['Tavant FinXperience', 'CoreLogic AVM'],
    },
    recent_news: [
      {
        date: '2026-03-28',
        headline: 'Ridgeline posts 40% YoY growth in bank-statement loan volume',
        source: 'Scotsman Guide',
      },
      {
        date: '2026-02-11',
        headline: 'Non-QM originators press CFPB on ATR-QM revisions',
        source: 'Inside Mortgage Finance',
      },
      {
        date: '2026-01-30',
        headline: 'Ridgeline opens 3 regional ops hubs; posts 12 underwriter roles',
        source: 'LinkedIn company page',
      },
    ],
    funding_or_financials:
      'Backed by a mid-market PE firm. Securitizes through rated private-label deals 2-3x per year.',
    founded_year: 2017,
  },
  {
    id: 'org_harborlight_bank',
    name: 'Harborlight Bank Mortgage Division',
    domain: 'harborlightbank.com',
    website: 'https://harborlightbank.com/mortgage',
    hq_location: 'Boston, MA',
    employee_count: 3400, // bank total; mortgage div ~320
    annual_loan_volume_usd: 2_100_000_000,
    lender_type: 'bank',
    loan_products: ['conventional', 'FHA', 'VA', 'jumbo', 'HELOC'],
    tech_stack: {
      los: 'ICE Mortgage Technology (Encompass)',
      pos: 'Blend',
      crm: 'Microsoft Dynamics',
      other: ['Fiserv core', 'Black Knight servicing'],
    },
    recent_news: [
      {
        date: '2026-03-12',
        headline: 'Harborlight Bank earnings note mortgage division margin pressure',
        source: 'American Banker',
      },
      {
        date: '2026-02-02',
        headline: 'Harborlight names new Head of Mortgage Technology',
        source: 'BankInfoSecurity',
      },
    ],
    funding_or_financials:
      'Publicly traded (NASDAQ). $42B in assets. Mortgage division flagged in Q4 2025 call as "efficiency focus area."',
    founded_year: 1889,
  },
  {
    id: 'org_apex_wholesale',
    name: 'Apex Wholesale Lending',
    domain: 'apexwholesale.com',
    website: 'https://apexwholesale.com',
    hq_location: 'Dallas, TX',
    employee_count: 480,
    annual_loan_volume_usd: 3_300_000_000,
    lender_type: 'wholesale',
    loan_products: ['conventional', 'FHA', 'VA', 'jumbo', 'non_QM'],
    tech_stack: {
      los: 'Byte Software',
      pos: 'LoanPASS (pricing)',
      crm: 'Velocify',
      other: ['Optimal Blue'],
    },
    recent_news: [
      {
        date: '2026-03-20',
        headline: 'Apex Wholesale rolls out expanded non-QM matrix for broker partners',
        source: 'Mortgage Professional America',
      },
    ],
    funding_or_financials:
      'Private. Approximately 4,500 active broker partners. Funds primarily through GSE execution and private aggregators.',
    founded_year: 2011,
  },
  {
    id: 'org_silverpeak',
    name: 'Silverpeak Home Finance',
    domain: 'silverpeakhome.com',
    website: 'https://silverpeakhome.com',
    hq_location: 'Denver, CO',
    employee_count: 280,
    annual_loan_volume_usd: 1_150_000_000,
    lender_type: 'IMB',
    loan_products: ['conventional', 'FHA', 'VA', 'jumbo'],
    tech_stack: {
      los: 'Blend',
      pos: 'Blend',
      crm: 'Salesforce',
      other: ['Snapdocs eClose', 'FormFree AccountChek'],
    },
    recent_news: [
      {
        date: '2026-04-05',
        headline: 'Silverpeak launches fully digital pre-approval targeting self-employed borrowers',
        source: 'HousingWire',
      },
      {
        date: '2026-02-14',
        headline: 'Silverpeak names Jamie Calderon as new COO',
        source: 'Silverpeak press release',
      },
    ],
    funding_or_financials:
      'Series C, $85M raised total. Growth-stage digital lender; 2025 volume up 28% YoY.',
    founded_year: 2016,
  },
  {
    id: 'org_three_rivers_cu',
    name: 'Three Rivers Federal Credit Union',
    domain: 'threeriversfcu.org',
    website: 'https://threeriversfcu.org',
    hq_location: 'Pittsburgh, PA',
    employee_count: 410,
    annual_loan_volume_usd: 220_000_000,
    lender_type: 'credit_union',
    loan_products: ['conventional', 'FHA', 'HELOC'],
    tech_stack: {
      los: 'MortgageBot (Finastra)',
      crm: 'Salesforce Nonprofit Cloud',
      other: ['Jack Henry core'],
    },
    recent_news: [],
    funding_or_financials: 'Member-owned. $3.4B in assets. Conservative growth, strong deposit base.',
    founded_year: 1961,
  },
  {
    id: 'org_evergreen',
    name: 'Evergreen Mortgage Partners',
    domain: 'evergreenmtgpartners.com',
    website: 'https://evergreenmtgpartners.com',
    hq_location: 'Portland, OR',
    employee_count: 520,
    annual_loan_volume_usd: 2_700_000_000,
    lender_type: 'IMB',
    loan_products: ['conventional', 'FHA', 'VA', 'jumbo'],
    tech_stack: {
      los: 'Encompass',
      pos: 'LiteSpeed',
      crm: 'Salesforce',
      other: ['Loansifter (PPE)', 'DocMagic'],
    },
    recent_news: [
      {
        date: '2026-03-01',
        headline: 'Evergreen Mortgage Partners hits $2.7B in 2025 originations, up 14%',
        source: 'Evergreen investor update',
      },
      {
        date: '2026-01-18',
        headline: 'Evergreen reviews underwriting automation vendors; RFP in market',
        source: 'Industry rumor (internal intel)',
      },
    ],
    funding_or_financials: 'Privately held, founder-led. No outside capital since 2019.',
    founded_year: 2005,
  },
];

export function findOrganizationById(id: string): TargetOrganization | undefined {
  return ORGANIZATIONS.find((o) => o.id === id);
}

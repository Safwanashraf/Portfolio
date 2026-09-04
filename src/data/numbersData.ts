export interface StatMetric {
  id: string;
  number: number | string;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export const verifiedMetrics: StatMetric[] = [
  {
    id: 'people-led',
    number: 75,
    suffix: '',
    label: 'people led',
    description: 'Guided and led a 75-member organization with 15–20 core active members at age 19.'
  },
  {
    id: 'customer-conversations',
    number: 1500,
    suffix: '+',
    label: 'customer conversations',
    description: 'Direct 1-on-1 conversations during sales team building at a lifestyle company.'
  },
  {
    id: 'stories-encountered',
    number: 500,
    suffix: '+',
    label: 'different stories & perspectives',
    description: 'Encountered real human problems, career regrets, and personal ambitions firsthand.'
  },
  {
    id: 'bde-revenue',
    number: 1,
    prefix: '₹',
    suffix: 'L+',
    label: 'generated in first month of BDE work',
    description: 'First month as Business Development Executive guiding prospective software students.'
  },
  {
    id: 'alappuzha-startup',
    number: '3–4',
    suffix: ' mos',
    label: 'entrepreneurial experiment',
    description: 'Relocated to Alappuzha with a cross-functional team to test a business concept on-ground.'
  },
  {
    id: 'infinity-learning',
    number: '∞',
    suffix: '',
    label: 'things left to learn',
    description: 'Continuous growth mindset driving every daily commit and engineering decision.'
  }
];

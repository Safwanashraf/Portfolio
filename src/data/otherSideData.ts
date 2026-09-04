export interface PillarData {
  id: string;
  title: string;
  tagline: string;
  skills: string[];
  description: string;
  keyInsight: string;
}

export const otherSidePillars: PillarData[] = [
  {
    id: 'people',
    title: 'PEOPLE',
    tagline: 'Leadership, Empathy & Active Listening',
    skills: [
      'Team Guidance (75 Members)',
      'Conflict Resolution',
      'Human Motivation',
      'Active Listening (1,500+ Stories)',
      'Clear Communication'
    ],
    description: 'Before writing code for computers, I spent years learning how people think, communicate, and make decisions. Leading teams and hearing hundreds of life stories taught me how to align people around shared goals.',
    keyInsight: 'Software is built by people for people. Code quality means nothing if team communication breaks down.'
  },
  {
    id: 'business',
    title: 'BUSINESS',
    tagline: 'Sales Closing, Revenue & Market Acumen',
    skills: [
      'Sales Closing',
      'Business Development (>₹1L Month 1)',
      'Customer Need Analysis',
      'Opportunity Evaluation',
      'Value Proposition Design'
    ],
    description: 'Having closed deals and driven business growth firsthand, I understand revenue models, customer acquisition friction, and market unit economics. I don’t view software as isolated syntax—I view it as business value.',
    keyInsight: 'I’ve sold technology before I’ve built it. Now I’m learning to build the technology with deep commercial awareness.'
  },
  {
    id: 'product',
    title: 'PRODUCT',
    tagline: 'Problem Framing & Customer Centricity',
    skills: [
      'Problem Identification',
      'User Friction Removal',
      'Business × Technology Alignment',
      'Feature Prioritization',
      'Pragmatic Decision Making'
    ],
    description: 'Great digital products solve real human friction without unnecessary complexity. My background enables me to evaluate features through both technical feasibility and real-world customer utility.',
    keyInsight: 'Building the wrong feature elegantly is still a failure. Product intuition guides what to build first.'
  },
  {
    id: 'ownership',
    title: 'OWNERSHIP',
    tagline: 'Responsibility, Execution & Adaptability',
    skills: [
      'Full Site Construction Management',
      'Entrepreneurial Execution',
      'Independent Learning',
      'Risk & Reward Tradeoffs',
      'Extreme Accountability'
    ],
    description: 'From managing construction budgets and contractor coordination to launching an entrepreneurial experiment in Alappuzha, I take full ownership of outcomes regardless of unexpected obstacles.',
    keyInsight: 'True ownership means no excuses when problems arise—only clear diagnosis and execution.'
  }
];

export const headlineQuote = "CODE ISN'T THE ONLY THING I KNOW HOW TO BUILD.";
export const positioningStatement = "I've sold technology before I've built it. Now I'm learning to build the technology.";

// TypeScript types for Ubuntu Afya website

export interface Stat {
  id: string;
  label: string;
  value: number;
  type: 'number' | 'percentage' | 'chart';
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoURL: string;
  bio: string;
}

export interface Update {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  videoLink?: string | null;
}

export interface ImpactArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
}

export interface DonationAmount {
  amount: number;
  label: string;
  popular?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
}

export interface MissionVision {
  mission: string;
  vision: string;
}

export interface StrategyPillar {
  title: string;
  description: string;
  steps: string[];
}

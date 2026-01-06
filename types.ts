export type ServiceCategory = 
  | 'consultatii' 
  | 'cabinet' 
  | 'anestezie' 
  | 'terapie' 
  | 'chirurgie' 
  | 'imagistica'
  | 'cnam';

export interface Service {
  id: string;
  category: ServiceCategory;
  subcategory?: string;
  name: string;
  price: number | string; // string for ranges like "710-768"
  unit: string;
  cnamEligible?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty?: string;
  image?: string;
  bio?: string;
  phone?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  service?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}
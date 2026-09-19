export type NavigationTab = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'portfolio' 
  | 'tools' 
  | 'resources' 
  | 'directory' 
  | 'admin';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  whatItInvolves: string[];
  typicalContent: string[];
  qualityConsiderations: string[];
  relevantLanguagePairs: string[];
  icon: string;
  standardTurnaround: string;
}

export interface LanguagePair {
  id: string;
  source: string;
  target: string;
  sourceCode: string;
  targetCode: string;
  label: string;
  regionNotes: string;
}

export interface SpecializationItem {
  id: string;
  title: string;
  description: string;
  typicalDocuments: string[];
  keyCompetencies: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  languagePair: string;
  sourceLanguage: string;
  targetLanguage: string;
  service: string;
  industry: string;
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  tools: string[];
  isDemonstrationSample: boolean; // true = Demonstration Sample, false = Client Work (Anonymized)
  sampleContent: {
    sourceExcerpt: string;
    targetExcerpt: string;
    notes?: string;
  };
  wordCountApprox?: number;
  published: boolean;
  featured: boolean;
  created_at: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  company?: string;
  sourceLanguage: string;
  targetLanguage: string;
  service: string;
  industry: string;
  wordCount: number;
  deadline?: string;
  projectDescription: string;
  fileName?: string;
  estimatedFee?: number;
  currency?: string;
  status: 'new' | 'reviewed' | 'quoted' | 'archived';
  notes?: string;
  created_at: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  slug: string;
  category: 'Career' | 'Freelancing' | 'CAT Tools' | 'Business' | 'Templates' | 'Productivity';
  description: string;
  format: string;
  freeStatus: 'Free' | 'Member Resource';
  published: boolean;
  featured: boolean;
  downloadFilename: string;
  previewPoints: string[];
  sampleText?: string;
  sampleContent?: string;
  created_at: string;
}

export interface TranslatorProfile {
  id: string;
  name: string;
  slug: string;
  profileImage: string;
  headline: string;
  bio: string;
  location: string;
  generalAvailability: string;
  languages: string[];
  languagePairs: string[];
  specializations: string[];
  services: string[];
  catTools: string[];
  website?: string;
  portfolio?: string;
  contactEmail?: string;
  profileStatus: 'Active' | 'Under Review';
  featured: boolean;
  isFavourDudubo?: boolean;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  published: boolean;
  created_at: string;
}

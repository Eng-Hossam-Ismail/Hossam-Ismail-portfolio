// ============================================================================
//  TYPE DEFINITIONS  —  Central content model for the portfolio.
//  Edit content in the files under src/data, not here.
// ============================================================================

export type Lang = 'en' | 'ar';

/** A piece of text available in both languages. */
export interface Localized {
  en: string;
  ar: string;
}

export interface LocalizedOptional {
  en?: string;
  ar?: string;
}

export interface SocialLink {
  id: string;
  label: Localized;
  href: string;
  icon: 'linkedin' | 'email' | 'whatsapp' | 'phone' | 'github' | 'external';
}

export interface SkillCategory {
  id: string;
  title: Localized;
  tag?: Localized;
  icon?: string;
  skills: Localized[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  position: Localized;
  location?: string;
  startDate?: string; // free-form, e.g. "2024" or "Jan 2024"
  endDate?: string; // free-form, or "Present"
  description?: LocalizedOptional;
  responsibilities?: Localized[];
  tools?: string[];
  achievements?: Localized[];
  // Optional media paths relative to /public
  media?: string[];
}

export interface TrainingEntry {
  id: string;
  title: Localized;
  organization: string;
  category?: Localized;
  categoryTag?: string | Localized;
  date?: string;
  duration?: Localized;
  description?: LocalizedOptional;
  skillsGained?: Localized[];
  certificateUrl?: string;
  reportUrl?: string;
  link?: string;
  linkLabel?: Localized;
  media?: string[];
}

export interface EducationEntry {
  id: string;
  institution: string | Localized;
  degree: Localized;
  field: Localized;
  specialization?: Localized;
  location?: string | Localized;
  startYear?: string;
  endYear?: string;
  description?: LocalizedOptional;
}

export interface CertificationEntry {
  id: string;
  name: Localized;
  organization: string;
  category?: 'certification' | 'development' | 'activity';
  categoryLabel?: Localized;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateFile?: string;
  description?: LocalizedOptional;
  link?: string;
}

export interface ProjectDocument {
  title: Localized;
  fileUrl: string;
  type?: 'drawing' | 'calc-sheet' | 'report' | 'model' | 'other';
}

export interface DrawingSheet {
  sheetNumber: string;
  title: Localized;
  imageUrl: string;
}

export interface ProjectEntry {
  id: string;
  title: Localized;
  shortDescription: Localized;
  detailedDescription?: LocalizedOptional;
  category?: string; // e.g. "structural-design", "steel-detailing", "analysis-modeling", "site-infrastructure", "academic"
  type?: string | Localized; // e.g. "Structural Design", "Steel Detailing"
  status?: Localized;
  mentor?: Localized;
  year?: string;
  location?: string;
  role?: Localized;
  software?: string[];
  codesAndStandards?: string[]; // e.g. ['ECP 201', 'ECP 203', 'ACI 318', 'AISC 360']
  disciplines?: Localized[];
  skillsApplied?: Localized[];
  images?: string[];
  drawings?: string[];
  drawingSheets?: DrawingSheet[];
  pdfFiles?: string[];
  documents?: ProjectDocument[];
  links?: { label: Localized; href: string }[];
  results?: LocalizedOptional;
  challenges?: LocalizedOptional;
  solutions?: LocalizedOptional;
  featured?: boolean;
}

export interface NavItem {
  id: string; // section anchor id
  label: Localized;
  enabled: boolean;
}

export interface QuickStat {
  id: string;
  label: Localized;
  value: string;
  hint?: LocalizedOptional;
}

export interface TechnicalMatrixEntry {
  id: string;
  label: Localized;
  value: Localized;
}

export interface PortfolioConfig {
  name: string;
  title: Localized;
  location: Localized;
  email: string;
  phone: string;
  whatsapp: string; // full intl number for wa.me link
  linkedin: string;
  cvPath: string;
  profileImage: string;
  heroHeadline: Localized;
  heroCoordinates: string;
  heroSpecCard: {
    label: Localized;
    value: Localized;
  };
  navbarSubtitle: Localized;
  about: {
    summary: Localized;
    focus: Localized[];
    careerDirection?: Localized;
    technicalMatrix?: TechnicalMatrixEntry[];
    image?: string;
    imageAlt?: Localized;
  };
  quickStats?: QuickStat[];
  socialLinks: SocialLink[];
  nav: NavItem[];
  skills: SkillCategory[];
  experience: ExperienceEntry[];
  training: TrainingEntry[];
  education: EducationEntry[];
  certifications: CertificationEntry[];
  projects: ProjectEntry[];
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    ogImage: string;
  };
}

/** UI strings translated per language. */
export interface UIStrings {
  nav: Record<string, string>;
  buttons: {
    downloadCV: string;
    viewProjects: string;
    contact: string;
    linkedin: string;
    whatsapp: string;
    email: string;
    call: string;
    viewDetails: string;
    hideDetails: string;
    download: string;
    visitLink: string;
    backToTop: string;
    openMenu: string;
    closeMenu: string;
    switchTheme: string;
    switchLanguage: string;
  };
  sections: Record<string, string>;
  about: {
    focusTitle: string;
    directionTitle: string;
    statsTitle: string;
    matrixTitle?: string;
    statusAvailable?: string;
  };
  skills: { categoriesTitle: string };
  experience: {
    responsibilities: string;
    achievements: string;
    tools: string;
    present: string;
    emptyTitle: string;
    emptyBody: string;
    emptyHint: string;
  };
  training: {
    skillsGained: string;
    certificate: string;
    visitLink: string;
    viewReport: string;
    viewLinkedInPost: string;
  };
  education: { specialization: string; graduationYear: string };
  certifications: {
    credentialId: string;
    viewCredential: string;
    viewCertificate: string;
    verifyBadge: string;
    emptyTitle: string;
    emptyBody: string;
    emptyHint: string;
  };
  projects: {
    selectedTitle: string;
    emptyTitle: string;
    emptyBody: string;
    emptyHint: string;
    all: string;
    featured: string;
    role: string;
    software: string;
    codes: string;
    disciplines: string;
    challenges: string;
    solutions: string;
    results: string;
    gallery: string;
    drawings: string;
    files: string;
    documents: string;
    links: string;
    year: string;
    location: string;
  };
  contact: {
    title: string;
    subtitle: string;
    basedIn: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formNote: string;
    orReachDirectly: string;
    sendViaGmail?: string;
    sendViaApp?: string;
    sendViaWhatsApp?: string;
    copyMessage?: string;
    messageCopied?: string;
    dispatchTitle?: string;
    dispatchDesc?: string;
    successTitle?: string;
    successDesc?: string;
    resetForm?: string;
    fieldRequired?: string;
  };
  emailModal?: {
    title: string;
    subtitle: string;
    openGmail: string;
    gmailDesc: string;
    openDefault: string;
    defaultDesc: string;
    openOutlook: string;
    outlookDesc: string;
    copyEmail: string;
    copied: string;
    orWhatsapp: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    quickLinks: string;
    contact: string;
  };
  misc: {
    languageName: string;
    theme: { light: string; dark: string };
  };
}

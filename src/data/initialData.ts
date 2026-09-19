import { 
  ServiceItem, 
  LanguagePair, 
  SpecializationItem, 
  PortfolioProject, 
  ResourceItem, 
  TranslatorProfile, 
  QuoteRequest 
} from '../types';

export const FAVOUR_PROFILE = {
  name: 'Favour Dudubo',
  role: 'Freelance Translator | Localization Specialist',
  founderTitle: 'Founder & Lead Translator',
  tagline: 'Precision in Every Word.',
  supportingPositioning: 'Translation, localization and language resources for a multilingual world.',
  email: 'favourlancee@gmail.com',
  domain: 'theprecisiondesk.com',
  location: 'Remote / Global Availability',
  primaryPairs: [
    'English → Norwegian',
    'Norwegian → English',
    'English → Swedish',
    'Swedish → English'
  ],
  catTools: [
    'SDL Trados Studio',
    'memoQ',
    'Phrase (Memsource)',
    'Subtitle Edit',
    'Smartcat',
    'ApSIC Xbench',
    'QA Distiller'
  ],
  bio: `I am Favour Dudubo, a freelance translator and localization specialist with dedicated expertise in English ↔ Norwegian and English ↔ Swedish language pairs. Through The Precision Desk, I provide high-integrity translation, MTPE, proofreading, editing, software localization, and audiovisual subtitling for industries where terminology error is not an option—ranging from medical and life sciences to technical engineering, enterprise SaaS, and legal documentation.`,
  workflow: [
    {
      step: '01',
      title: 'Contextual Terminology & Corpus Preparation',
      desc: 'Pre-translation analysis of client style guides, term bases, translation memories, and regulatory guidelines to lock down domain terminology.'
    },
    {
      step: '02',
      title: 'Human Translation or Post-Editing (MTPE)',
      desc: 'Careful drafting with semantic exactitude, ensuring natural target phrasing while preserving strict source intentionality and syntax.'
    },
    {
      step: '03',
      title: 'Bilingual Review & Concordance Check',
      desc: 'Line-by-line verification against the source text to eliminate omissions, mistranslations, false friends, and numerical or tag errors.'
    },
    {
      step: '04',
      title: 'Automated QA & Final Delivery',
      desc: 'Running automated QA checks (Xbench / memoQ QA) for consistency, untranslated segments, punctuation anomalies, and formatting integrity before handoff.'
    }
  ],
  qualityPhilosophy: `In technical, medical, and legal translation, precision is not a stylistic preference—it is a legal, medical, and operational necessity. I follow quality frameworks aligned with ISO 17100 (Translation Services) and ISO 18587 (Machine Translation Post-Editing), ensuring every delivered segment has undergone rigorous terminology validation and bilingual inspection.`
};

export const LANGUAGE_PAIRS: LanguagePair[] = [
  {
    id: 'en-no',
    source: 'English',
    target: 'Norwegian (Bokmål)',
    sourceCode: 'EN',
    targetCode: 'NO',
    label: 'English → Norwegian',
    regionNotes: 'Compliant with Språkrådet standards; idiomatic Nordic localization for corporate, technical, and regulatory audiences.'
  },
  {
    id: 'no-en',
    source: 'Norwegian',
    target: 'English',
    sourceCode: 'NO',
    targetCode: 'EN',
    label: 'Norwegian → English',
    regionNotes: 'Accurate rendering into international or British/US English for global markets, maritime, energy, and Nordic SaaS exports.'
  },
  {
    id: 'en-sv',
    source: 'English',
    target: 'Swedish',
    sourceCode: 'EN',
    targetCode: 'SV',
    label: 'English → Swedish',
    regionNotes: 'Precision Swedish terminology tailored for medical devices, manufacturing, software UI, and cross-border commercial trade.'
  },
  {
    id: 'sv-en',
    source: 'Swedish',
    target: 'English',
    sourceCode: 'SV',
    targetCode: 'EN',
    label: 'Swedish → English',
    regionNotes: 'Nuanced English translation of Swedish industrial, corporate governance, engineering, and digital tech documentation.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'translation',
    title: 'Translation',
    icon: 'Languages',
    shortDescription: 'Meticulous human translation prioritizing conceptual fidelity, industry-specific terminology, and natural target phrasing.',
    whatItInvolves: [
      'Source text linguistic and cultural deconstruction',
      'Specialized glossaries and TermBase (TB) integration',
      'Native-standard phrasing without sounding translated',
      'Strict adherence to client branding and voice guidelines'
    ],
    typicalContent: [
      'Instructions for Use (IFU) & medical inserts',
      'Engineering user guides & maintenance procedures',
      'Corporate contracts, bylaws, and non-disclosure agreements',
      'Corporate reports and executive communications'
    ],
    qualityConsiderations: [
      'Zero tolerance for conceptual drift in regulatory content',
      'Harmonization with official Nordic regulatory terminology (Legemiddelverket / Läkemedelsverket)',
      'Consistent sentence structure matching target conventions'
    ],
    relevantLanguagePairs: ['EN → NO', 'NO → EN', 'EN → SV', 'SV → EN'],
    standardTurnaround: '1,800 – 2,200 words / standard business day'
  },
  {
    id: 'mtpe',
    title: 'MTPE (Machine Translation Post-Editing)',
    icon: 'Cpu',
    shortDescription: 'ISO 18587-aligned light or full post-editing to transform raw neural machine translation output into publishable quality.',
    whatItInvolves: [
      'Detailed evaluation of raw MT engine output (DeepL, Google, Custom NMT)',
      'Correction of mistranslations, hallucinations, and terminology drift',
      'Syntactic restructuring for fluent natural reading rhythm',
      'Tag verification and segment consistency checks in CAT tools'
    ],
    typicalContent: [
      'High-volume technical documentation & knowledge bases',
      'Internal business communications & vendor documentation',
      'E-commerce catalogs and product descriptions',
      'Standard operating procedures (SOPs) under tight turnarounds'
    ],
    qualityConsiderations: [
      'Distinction between Light MTPE (factual accuracy only) and Full MTPE (publication-ready)',
      'Detection of subtle false friends that AI engines frequently generate in Scandinavian languages',
      'Ensuring terminology parity across large parallel corpora'
    ],
    relevantLanguagePairs: ['EN → NO', 'NO → EN', 'EN → SV', 'SV → EN'],
    standardTurnaround: '3,000 – 4,500 words / standard business day (Full MTPE)'
  },
  {
    id: 'proofreading',
    title: 'Proofreading',
    icon: 'CheckCheck',
    shortDescription: 'Monolingual target text review focusing on orthography, punctuation, typography, formatting, and stylistic polish.',
    whatItInvolves: [
      'Grammar, syntax, and spelling verification',
      'Target language typographical norms (quotation marks, hyphens, non-breaking spaces)',
      'Consistency in numbers, date formats, currencies, and units of measure',
      'Elimination of typos, orphan lines, and inconsistent casing'
    ],
    typicalContent: [
      'Marketing collateral and press releases prior to print',
      'Published white papers and thought leadership articles',
      'Annual financial reports and investor decks',
      'Brochures, catalogs, and public-facing PDFs'
    ],
    qualityConsiderations: [
      'Preservation of author voice while enforcing prescriptive language rules',
      'Verification against authoritative dictionaries (Bokmålsordboka, Svenska Akademiens ordlista)',
      'Review in final layout context (in-situ DTP proofing)'
    ],
    relevantLanguagePairs: ['NO', 'SV', 'EN'],
    standardTurnaround: '4,000 – 6,000 words / standard business day'
  },
  {
    id: 'editing',
    title: 'Editing (Bilingual Review)',
    icon: 'FileEdit',
    shortDescription: 'In-depth bilingual examination comparing translated segments against source files to ensure semantic and structural perfection.',
    whatItInvolves: [
      'Sentence-by-sentence source-target concordance check',
      'Correction of nuances, terminology discrepancies, and tone mismatches',
      'Improvement of sentence flow, clarity, and rhetorical impact',
      'Terminology harmonization across multi-translator deliverables'
    ],
    typicalContent: [
      'Regulatory compliance submissions and audit reports',
      'Clinical trial protocols and patient summaries',
      'High-stakes legal filings and court briefs',
      'Flagship marketing copy and localized brand slogans'
    ],
    qualityConsiderations: [
      'Critical assessment of translation decisions without unnecessary stylistic meddling',
      'Verification of numerical data, formulas, and cross-references',
      'Providing constructive linguistic feedback and query resolution'
    ],
    relevantLanguagePairs: ['EN → NO', 'NO → EN', 'EN → SV', 'SV → EN'],
    standardTurnaround: '2,500 – 3,500 words / standard business day'
  },
  {
    id: 'localization',
    title: 'Localization (L10n)',
    icon: 'Globe',
    shortDescription: 'Adapting software, SaaS platforms, apps, and digital interfaces to resonate culturally and functionally in Nordic markets.',
    whatItInvolves: [
      'UI/UX string extraction, placeholder preservation, and length constraint checks',
      'Cultural adaptation of date formats, currencies, metrics, and idioms',
      'Key terminology standardization in JSON, PO, XLIFF, or YAML resource files',
      'In-context UI testing and truncation resolution'
    ],
    typicalContent: [
      'SaaS dashboard interfaces & web applications',
      'Mobile apps (iOS & Android) and onboarding flows',
      'Developer documentation and API guides',
      'E-learning modules and interactive employee training portals'
    ],
    qualityConsiderations: [
      'Strict avoidance of broken variables like {userName} or %d in localized strings',
      'Managing length expansion (Norwegian and Swedish words can be 15–25% longer than English)',
      'Tone consistency across buttons, modal alerts, tooltips, and system errors'
    ],
    relevantLanguagePairs: ['EN → NO', 'NO → EN', 'EN → SV', 'SV → EN'],
    standardTurnaround: '1,500 – 2,000 words / day depending on key complexity'
  },
  {
    id: 'subtitling',
    title: 'Subtitling & Audiovisual',
    icon: 'Film',
    shortDescription: 'Time-coded, readable, and culturally synchronized subtitles adhering to industry reading speeds and line break conventions.',
    whatItInvolves: [
      'Audio transcription and accurate time-cue spotting',
      'Reading speed management (maximum 15–17 characters per second / CPS)',
      'Natural syntactic line breaking (no orphaned articles or preposition splits)',
      'Export into standard subtitle formats (.srt, .vtt, .stl, .dfxp)'
    ],
    typicalContent: [
      'Corporate training videos and executive town halls',
      'Product launch demonstrations and promotional webinars',
      'Medical procedure recordings and continuing clinical education',
      'Short-form brand documentaries and social media video content'
    ],
    qualityConsiderations: [
      'Preserving speaker tone while compressing speech for visual reading comfort',
      'Adherence to Netflix / BBC subtitling guidelines and Scandinavian public broadcast conventions',
      'Accurate rendering of off-screen voices, music cues, and sound effects'
    ],
    relevantLanguagePairs: ['EN → NO', 'NO → EN', 'EN → SV', 'SV → EN'],
    standardTurnaround: '20 – 30 video runtime minutes / day'
  }
];

export const SPECIALIZATIONS: SpecializationItem[] = [
  {
    id: 'medical',
    title: 'Medical & Life Sciences',
    description: 'High-precision translation for pharmaceuticals, medical technology, clinical research, and patient education where accuracy is mission-critical.',
    typicalDocuments: [
      'Instructions for Use (IFU) & surgical instrument manuals',
      'Summary of Product Characteristics (SmPC) & Patient Information Leaflets (PIL)',
      'Clinical trial protocols, informed consent forms (ICFs)',
      'Medical device CE mark compliance files'
    ],
    keyCompetencies: [
      'MedDRA & EDQM standardized terminology',
      'MDR (EU 2017/745) & IVDR regulatory awareness',
      'Harmonization with Norwegian and Swedish national health authorities'
    ]
  },
  {
    id: 'technical',
    title: 'Technical & Engineering',
    description: 'Clear, mathematically rigorous translation for industrial machinery, electrical engineering, renewable energy, and civil infrastructure.',
    typicalDocuments: [
      'Operation & maintenance manuals (O&M)',
      'Standard operating procedures (SOP) & safety data sheets (SDS)',
      'Technical tender specifications & CAD drawing legends',
      'Wind turbine, maritime, and offshore equipment documentation'
    ],
    keyCompetencies: [
      'Standardized DIN / ISO engineering nomenclature',
      'Familiarity with offshore North Sea energy conventions',
      'Precise translation of units, tolerance ranges, and warning notices'
    ]
  },
  {
    id: 'saas',
    title: 'SaaS & Software',
    description: 'User-centric software localization translating UI keys, developer documentation, and onboarding workflows for modern digital products.',
    typicalDocuments: [
      'Application UI/UX strings and modal dialogues',
      'Knowledge base and customer help desk articles',
      'System status error messages and developer API references',
      'B2B SaaS product release notes and feature announcements'
    ],
    keyCompetencies: [
      'Format safety (JSON, XLIFF, XML, PO, iOS strings)',
      'UI spatial constraint management and character limits',
      'Consistent terminology across web, mobile, and documentation'
    ]
  },
  {
    id: 'business',
    title: 'Business & Corporate',
    description: 'Nuanced translation for corporate governance, investor relations, internal policies, and cross-border commercial strategy.',
    typicalDocuments: [
      'Annual reports and ESG / sustainability statements',
      'Corporate codes of conduct and compliance policies',
      'Investor presentations and strategic market analyses',
      'Internal executive memos and human resource handbooks'
    ],
    keyCompetencies: [
      'IFRS accounting vocabulary',
      'Polished executive register and Nordic corporate tone',
      'Handling confidential materials with professional rigor'
    ]
  },
  {
    id: 'legal',
    title: 'Legal & Contracts',
    description: 'Thorough and legally consistent translation of commercial agreements, intellectual property documents, and regulatory policies.',
    typicalDocuments: [
      'Master service agreements (MSA) and nondisclosure agreements (NDA)',
      'Terms of service (ToS) and privacy policies (GDPR compliant)',
      'Employment contracts and vendor service agreements',
      'Articles of association and board resolutions'
    ],
    keyCompetencies: [
      'Understanding of Common Law vs. Nordic civil law concepts',
      'Syntactic rigor preventing unintended contractual ambiguity',
      'Consistent translation of liability, warranty, and indemnification clauses'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing & Editorial',
    description: 'Engaging transcreation that preserves the emotional hook, persuasive rhythm, and brand voice for Scandinavian or English audiences.',
    typicalDocuments: [
      'Brand positioning guides and campaign slogans',
      'B2B case studies and client testimonial spotlights',
      'Website landing pages and conversion-focused newsletters',
      'Product packaging and point-of-sale display copy'
    ],
    keyCompetencies: [
      'Transcreation rather than literal segment translation',
      'Cultural adaptation of idioms, metaphors, and humor',
      'SEO keyword integration for target search behaviors'
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Medical Device IFU & Clinical Summary Localization',
    slug: 'medical-device-ifu-norwegian',
    languagePair: 'English → Norwegian',
    sourceLanguage: 'English',
    targetLanguage: 'Norwegian',
    service: 'Translation & QA',
    industry: 'Medical / Life Sciences',
    isDemonstrationSample: true, // Clearly labeled sample
    description: 'Comprehensive demonstration translation of an orthopedic surgical navigation instrument Instructions for Use (IFU) and sterilization protocol.',
    challenge: 'Medical device instructions require exact terminology aligned with European Medical Device Regulation (EU 2017/745 MDR). Even a subtle ambiguity regarding torque settings or autoclave sterilization could compromise patient safety.',
    approach: 'Built a specialized orthopedic term base. Employed strict concordance checks against Norwegian health authority (Statens legemiddelverk) terminology. Conducted secondary review of numerical limits, units, and safety warning tags.',
    outcome: 'Delivered an unambiguous, regulatory-compliant Norwegian IFU with zero terminology drift, fully formatted for double-column print layout.',
    tools: ['SDL Trados Studio', 'ApSIC Xbench', 'Multiterm'],
    sampleContent: {
      sourceExcerpt: 'WARNING: Do not exceed the maximum allowable torque limit of 4.5 Nm during pedicle screw insertion. Over-tightening may result in stripped bone threading and compromised structural stability. Prior to autoclave sterilization (134°C for 5 minutes), ensure all articulated joints are disassembled and irrigated with enzymatic detergent.',
      targetExcerpt: 'ADVARSEL: Det maksimale tillatte momentet på 4,5 Nm må ikke overskrides ved innsetting av pedikkelskruer. For hard tiltrekking kan føre til at beinkjengene ødelegges og gi svekket strukturell stabilitet. Før autoklavsterilisering (134 °C i 5 minutter) må det påses at alle leddforbindelser er demontert og gjennomspylt med enzymatisk vaskemiddel.',
      notes: 'Sample demonstrating high-stakes medical terminology and syntactic precision.'
    },
    wordCountApprox: 4200,
    published: true,
    featured: true,
    created_at: '2026-01-15'
  },
  {
    id: 'proj-2',
    title: 'Enterprise Cloud SaaS Platform UI & Knowledge Base',
    slug: 'enterprise-saas-swedish-l10n',
    languagePair: 'English → Swedish',
    sourceLanguage: 'English',
    targetLanguage: 'Swedish',
    service: 'Localization',
    industry: 'SaaS / Software',
    isDemonstrationSample: true,
    description: 'Demonstration localization project of an enterprise cybersecurity analytics dashboard, including UI buttons, tooltip messages, and setup documentation.',
    challenge: 'Balancing the natural expansion of Swedish text (+18% length over English) inside compact table headers, card titles, and buttons, while preserving dynamic parameter tokens like {tenant_id} and {active_users}.',
    approach: 'Curated a concise Swedish UI glossary favoring short, intuitive imperative verbs. Tested string length against simulated desktop and mobile viewport constraints, flagging potential overflows before handoff.',
    outcome: 'Maintained 100% token safety with no truncated UI controls, delivering an intuitive Swedish user experience for IT administrators.',
    tools: ['Phrase (Memsource)', 'Regex QA', 'JSON Editor'],
    sampleContent: {
      sourceExcerpt: 'Configure conditional access policies to enforce multi-factor authentication whenever an anomalous login attempt is detected outside recognized IP subnets. Tap "Review Policies" to audit existing role-based permissions for {userCount} assigned accounts.',
      targetExcerpt: 'Konfigurera villkorsstyrda åtkomstprinciper för att kräva multifaktorautentisering när ett avvikande inloggningsförsök upptäcks utanför kända IP-undernät. Tryck på "Granska principer" för att granska befintliga rollbaserade behörigheter för {userCount} tilldelade konton.',
      notes: 'Demonstrates variable safety and natural Scandinavian software UI phrasing.'
    },
    wordCountApprox: 8500,
    published: true,
    featured: true,
    created_at: '2026-02-02'
  },
  {
    id: 'proj-3',
    title: 'Offshore Wind Subsea Cable Specification Review',
    slug: 'offshore-wind-subsea-norwegian-english',
    languagePair: 'Norwegian → English',
    sourceLanguage: 'Norwegian',
    targetLanguage: 'English',
    service: 'Translation & Technical Editing',
    industry: 'Technical / Engineering',
    isDemonstrationSample: false, // Client Work (Anonymized)
    description: 'Anonymized client project: Technical specification and cable laying procedure for North Sea offshore wind infrastructure.',
    challenge: 'Norwegian maritime and offshore engineering uses specialized Norwegian nautical terminology that lacks direct one-word English dictionary equivalents. Preserving engineering precision for international EPC contractors was paramount.',
    approach: 'Cross-referenced DNV-GL offshore standards and NORSOK guidelines. Maintained strict consistency across cable bending radii, tensioner parameters, and ROV trenching terminology.',
    outcome: 'Produced an authoritative English engineering dossier used by multinational installation crews without contractual or operational friction.',
    tools: ['memoQ', 'QA Distiller', 'DNV Terminology DB'],
    sampleContent: {
      sourceExcerpt: 'Kabelens minste bøyeradius under dynamisk utlegging må aldri underskride 2,8 meter ved strekkrefter opp til 45 kN. Ved mistanke om kink eller vridning på sjøkabelen skal operasjonen stanses umiddelbart inntil ROV-inspeksjon har bekreftet kappen og armeringens integritet.',
      targetExcerpt: 'The minimum bending radius of the cable during dynamic lay must never fall below 2.8 meters at tensile loads up to 45 kN. If kinking or torsion of the subsea cable is suspected, lay operations must be halted immediately until ROV inspection has verified the integrity of the outer sheath and armor.',
      notes: 'Anonymized client deliverable demonstrating North Sea energy engineering register.'
    },
    wordCountApprox: 12400,
    published: true,
    featured: true,
    created_at: '2026-02-18'
  },
  {
    id: 'proj-4',
    title: 'Cross-Border Nordic Commercial Distribution Agreement',
    slug: 'nordic-distribution-contract-swedish-english',
    languagePair: 'Swedish → English',
    sourceLanguage: 'Swedish',
    targetLanguage: 'English',
    service: 'Translation & Legal Review',
    industry: 'Legal',
    isDemonstrationSample: true,
    description: 'Demonstration sample of an exclusive distribution and licensing agreement between a Stockholm consumer electronics brand and an international logistics partner.',
    challenge: 'Drafting contract language that respects Swedish commercial law (Avtalslagen) while employing clear, enforceable Anglo-American legal phrasing without introducing unintended common law doctrines.',
    approach: 'Careful segment-by-segment analysis of limitation of liability, intellectual property indemnification, force majeure, and dispute resolution clauses. Avoided legal jargon that creates ambiguity in international arbitration.',
    outcome: 'Delivered an exact English legal translation reflecting the mutual commercial obligations of the contracting parties.',
    tools: ['SDL Trados Studio', 'Xbench'],
    sampleContent: {
      sourceExcerpt: 'Vardera parten ska hålla den andra parten skadeslös mot alla anspråk, skadestånd och kostnader som uppstår till följd av grov vårdslöshet eller uppsåtligt avtalsbrott. Tvister som uppstår i anledning av detta avtal ska slutligt avgöras genom skiljedomsförfarande administrerat av Stockholms Handelskammares Skiljedomsinstitut.',
      targetExcerpt: 'Each party shall indemnify and hold harmless the other party against any claims, damages, and costs arising from gross negligence or willful breach of contract. Any dispute arising out of or in connection with this agreement shall be finally resolved by arbitration administered by the Arbitration Institute of the Stockholm Chamber of Commerce.',
      notes: 'Demonstrates cross-border contract translation rigor and institutional terminology.'
    },
    wordCountApprox: 6100,
    published: true,
    featured: false,
    created_at: '2026-03-01'
  },
  {
    id: 'proj-5',
    title: 'Biotech Clinical Trial Patient Consent & Protocol Summary',
    slug: 'biotech-clinical-trial-norwegian',
    languagePair: 'English → Norwegian',
    sourceLanguage: 'English',
    targetLanguage: 'Norwegian',
    service: 'MTPE (Full Post-Editing)',
    industry: 'Medical / Life Sciences',
    isDemonstrationSample: true,
    description: 'Demonstration sample of full post-editing (ISO 18587) on machine-translated oncology trial informed consent forms (ICF) and protocol abstracts.',
    challenge: 'Raw MT engines regularly stumble on passive voice constructs and generate cold, clinical phrasing that causes distress to trial subjects, or fails Norwegian ethical committee (REK) plain-language standards.',
    approach: 'Applied full post-editing to rewrite complex biomedical English sentences into clear, empathetic, and unambiguous Norwegian, while ensuring scientific terminology remained strictly accurate.',
    outcome: 'Achieved complete readability score improvement and compliance with ethical guidelines for clinical trial participants.',
    tools: ['memoQ', 'ISO 18587 Framework', 'Xbench'],
    sampleContent: {
      sourceExcerpt: 'Participation in this Phase II oncology trial is entirely voluntary. You may withdraw your consent at any point during the observation window without forfeiting any standard care benefits to which you are otherwise entitled.',
      targetExcerpt: 'Det er helt frivillig å delta i denne fase II-onkologistudien. Du kan når som helst trekke tilbake samtykket ditt i løpet av observasjonsperioden, uten at det påvirker retten din til vanlig helsehjelp.',
      notes: 'Sample showcasing ISO 18587 Full MTPE adapted for clinical consent readability.'
    },
    wordCountApprox: 9800,
    published: true,
    featured: false,
    created_at: '2026-03-10'
  },
  {
    id: 'proj-6',
    title: 'Nordic Clean-Tech Documentary Subtitling & Spotting',
    slug: 'clean-tech-documentary-subtitles',
    languagePair: 'Norwegian → English',
    sourceLanguage: 'Norwegian',
    targetLanguage: 'English',
    service: 'Subtitling',
    industry: 'Media',
    isDemonstrationSample: true,
    description: 'Demonstration sample of time-coded subtitling and spotting for a documentary feature on fjord aquaculture and sustainable battery cell manufacturing.',
    challenge: 'Fast conversational cadence in Western Norwegian dialects coupled with complex environmental science terminology required tight word condensation without losing key factual nuances.',
    approach: 'Maintained strict 37-character line limits and maximum 16 CPS reading speeds. Implemented syntactic line-breaks matching the natural rhythm of speech.',
    outcome: 'Streamable, natural English subtitles that allow international viewers to absorb technical context comfortably without reading strain.',
    tools: ['Subtitle Edit', 'Aegisub', 'VTT / SRT'],
    sampleContent: {
      sourceExcerpt: '00:04:12.500 --> 00:04:16.800\nVi måtte finne en måte å resirkulere 95 prosent\nav prosessvannet uten å øke energibehovet.',
      targetExcerpt: '00:04:12.500 --> 00:04:16.800\nWe had to recycle 95% of process water\nwithout increasing energy demand.',
      notes: 'Subtitling sample adhering to line length and visual reading limits.'
    },
    wordCountApprox: 3500,
    published: true,
    featured: false,
    created_at: '2026-03-14'
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Independent Translator CV & Profile Template',
    slug: 'translator-cv-template',
    category: 'Career',
    description: 'A clean, high-impact resume layout engineered specifically for freelance translators to present language pairs, CAT proficiency, and domain specializations to international agencies.',
    format: 'DOCX & Markdown',
    freeStatus: 'Free',
    published: true,
    featured: true,
    downloadFilename: 'Translator_CV_Template_ThePrecisionDesk.md',
    previewPoints: [
      'Language pair hierarchy (A, B, C languages and native competence)',
      'Specific CAT tool software version declaration and QA utilities',
      'Anonymized domain project highlights avoiding client NDA breaches',
      'Daily throughput and standard pricing framework breakdown'
    ],
    sampleContent: `# [Your Name], MITI / Freelance Translator
**Email:** your.name@domain.com | **Location:** City, Country | **Portfolio:** theprecisiondesk.com

## Language Pairs
* **English → Norwegian (Bokmål)** [Native Target]
* **Norwegian → English** [Professional Working]
* **English → Swedish** [Professional Working]

## Core Specializations
* **Medical & Life Sciences:** IFUs, Clinical Summaries, Patient Leaflets (MDR EU 2017/745)
* **Technical & Engineering:** O&M Manuals, Renewable Energy, Machinery Specs
* **SaaS & Localization:** UI Strings, JSON keys, Help Center Knowledge Bases

## CAT Tools & QA Software
* **SDL Trados Studio 2024**, **memoQ 10.x**, **Phrase**, **Subtitle Edit**
* **QA & Terminology:** ApSIC Xbench 3.0, QA Distiller, Multiterm

## Professional Experience & Key Project Highlights
* **Medical Equipment Manufacturer (2024–Present):** Translated 80,000+ words of surgical guide IFUs from English to Norwegian. Zero critical QA queries.
* **Nordic Enterprise SaaS:** Localized 45,000 UI keys into Swedish with strict variable protection.`,
    created_at: '2026-01-20'
  },
  {
    id: 'res-2',
    title: 'Agency Outreach & Cold Pitch Email Framework',
    slug: 'agency-outreach-template',
    category: 'Freelancing',
    description: 'A tactful, respectful, and high-conversion outreach template for introducing yourself to Vendor Managers at top translation agencies without generic spam.',
    format: 'Template Guide',
    freeStatus: 'Free',
    published: true,
    featured: true,
    downloadFilename: 'Agency_Vendor_Outreach_Template.txt',
    previewPoints: [
      'Specific subject line formatting that vendor managers instantly open',
      'Clear statement of language pairs, native status, and daily capacity',
      'Proactive offering of brief test translation (up to 300 words)',
      'Clear, professional rate structure statement'
    ],
    sampleContent: `SUBJECT: Freelance Translator Application: English ↔ Norwegian & Swedish (Medical & Technical) – [Your Name]

Dear Vendor Management Team at [Agency Name],

I am writing to introduce myself as an independent freelance translator specializing in English to Norwegian and Swedish language pairs, with primary subject-matter expertise in Medical / Life Sciences, Technical Engineering, and SaaS Localization.

A brief snapshot of my professional profile:
• Native Language: Norwegian / Swedish
• Working Pairs: English → Norwegian (Bokmål), English → Swedish
• Key Domains: Medical Devices (IFUs, Clinical protocols), Technical Engineering, Software UI
• CAT Tools: SDL Trados Studio, memoQ, Phrase
• Daily Capacity: 2,000 words/day (Translation) | 4,000 words/day (Full MTPE)
• QA Process: Systematic spellcheck, concordance verification, and ApSIC Xbench QA pass

I would welcome the opportunity to complete your standard vendor qualification form or a short test translation (up to 300 words).

My CV and sample portfolio are attached. You can also view my live workspace at [Your URL].

Thank you for your time and consideration.

Kind regards,
[Your Name]
Freelance Translator & Localization Specialist`,
    created_at: '2026-01-28'
  },
  {
    id: 'res-3',
    title: 'International Translation Invoice Template',
    slug: 'translation-invoice-template',
    category: 'Business',
    description: 'A compliant invoice template for cross-border freelance translation work, incorporating reverse charge VAT clauses, project PO numbers, and fuzzy match breakdowns.',
    format: 'Template & Guide',
    freeStatus: 'Free',
    published: true,
    featured: true,
    downloadFilename: 'Translation_Invoice_Template_ThePrecisionDesk.txt',
    previewPoints: [
      'Line itemization for new words, fuzzy matches, repetitions, and hourly review',
      'EU Reverse Charge VAT statutory reference text (Directive 2006/112/EC)',
      'SWIFT/BIC and IBAN banking payment details',
      'Strict payment terms and late interest disclosures'
    ],
    sampleContent: `=======================================================
INVOICE #[INV-2026-0042]
The Precision Desk | Favour Dudubo
Date of Issue: March 15, 2026 | Due Date: April 14, 2026 (Net 30)
=======================================================

BILL TO:
Client / Agency Name: Global Localization Ltd.
VAT / Tax ID: EU123456789
Project PO / Ref: PO-99812-NOR

LINE ITEMS:
1. Medical IFU Translation (EN > NO) - 4,200 words @ €0.12/word = €504.00
2. UI String Localization (EN > SV) - 2,100 words @ €0.13/word = €273.00
3. Bilingual Terminology Alignment (Hourly) - 2.5 hrs @ €45.00/hr = €112.50
-------------------------------------------------------
SUBTOTAL: €889.50
VAT (0% - Reverse Charge / Service recipient liable): €0.00
TOTAL DUE: €889.50
-------------------------------------------------------
PAYMENT DETAILS:
Bank Name: Nordic International Bank
IBAN: NO93 1234 5678 9012 34
SWIFT / BIC: NORDNO22XXX
=======================================================`,
    created_at: '2026-02-10'
  },
  {
    id: 'res-4',
    title: 'Translator Portfolio Checklist (NDA-Safe)',
    slug: 'portfolio-checklist',
    category: 'Templates',
    description: 'A practical, step-by-step checklist for building a client-winning translation portfolio without violating confidentiality agreements or non-disclosure terms.',
    format: 'Interactive Guide',
    freeStatus: 'Free',
    published: true,
    featured: true,
    downloadFilename: 'Translator_Portfolio_Checklist.md',
    previewPoints: [
      'How to redact proprietary entities, product names, and serial numbers',
      'Creating high-value "Demonstration Samples" from open-source regulations',
      'Explaining Challenge-Approach-Outcome without revealing client identities',
      'Structuring bilingual before-and-after excerpts for maximum visual impact'
    ],
    sampleContent: `# Translator Portfolio Checklist (NDA-Safe Edition)

### Phase 1: Ethical & Confidentiality Screening
- [ ] Have you signed an NDA for this project? If yes, obtain written consent or anonymize completely.
- [ ] Remove all trademarks, client names, proprietary URLs, and internal author handles.
- [ ] Replace specific product codes with generic equivalents (e.g. "Model X-800 Orthopedic Drill").

### Phase 2: Building Demonstration Samples
- [ ] Select publicly available official texts (e.g., EMA clinical summaries, EU directives, WIPO patents).
- [ ] Translate a representative 300–500 word excerpt displaying real domain difficulty.
- [ ] Clearly tag the item as a "Demonstration Sample" to preserve trust and transparency.

### Phase 3: Case Study Architecture
- [ ] Context & Domain
- [ ] Linguistic / Formatting Challenge
- [ ] Professional Approach & Tools Applied
- [ ] Measurable Outcome & Sample Excerpt`,
    created_at: '2026-02-22'
  },
  {
    id: 'res-5',
    title: 'ISO 18587 MTPE Quality & Error Typology Framework',
    slug: 'mtpe-quality-framework',
    category: 'CAT Tools',
    description: 'A standard rubric defining the difference between light and full post-editing, error categorization (accuracy, terminology, fluency), and productivity benchmarks.',
    format: 'Guide & Rubric',
    freeStatus: 'Member Resource',
    published: true,
    featured: false,
    downloadFilename: 'ISO_18587_MTPE_Checklist.md',
    previewPoints: [
      'MQM (Multidimensional Quality Metrics) categorization overview',
      'Full MTPE vs. Light MTPE guidelines',
      'Common hallucination traps in Scandinavian neural machine translation',
      'Throughput vs. hourly pricing calculations'
    ],
    created_at: '2026-03-05'
  },
  {
    id: 'res-6',
    title: 'CAT Tool Productivity & Shortcut Cheatsheet',
    slug: 'cat-tool-cheatsheet',
    category: 'Productivity',
    description: 'Essential keyboard shortcuts and segment navigation commands for Trados Studio, memoQ, and Phrase to accelerate daily translation throughput.',
    format: 'PDF / Markdown',
    freeStatus: 'Free',
    published: true,
    featured: false,
    downloadFilename: 'CAT_Tool_Shortcuts_Guide.md',
    previewPoints: [
      'Concordance search shortcut matrix across Trados and memoQ',
      'Tag insertion and non-breaking space rapid entry',
      'Filtering locked segments and untranslated segments efficiently'
    ],
    created_at: '2026-03-12'
  }
];

export const TRANSLATOR_PROFILES: TranslatorProfile[] = [
  {
    id: 'fav-dudubo',
    name: 'Favour Dudubo',
    slug: 'favour-dudubo',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    headline: 'Freelance Translator & Localization Specialist (EN ↔ NO | EN ↔ SV)',
    bio: 'Founder of The Precision Desk. Dedicated freelance translator specializing in technical, medical, SaaS localization, and commercial legal translation for Nordic markets. Committed to linguistic rigor, ISO standards, and responsive communication.',
    location: 'Remote / Global (Serving European & North American Clients)',
    generalAvailability: 'Open for new translation & MTPE projects (Avg. capacity: 2,000 words/day)',
    languages: ['English', 'Norwegian (Bokmål)', 'Swedish'],
    languagePairs: [
      'English → Norwegian',
      'Norwegian → English',
      'English → Swedish',
      'Swedish → English'
    ],
    specializations: [
      'Medical & Life Sciences',
      'Technical & Engineering',
      'SaaS & Software',
      'Business & Corporate',
      'Legal'
    ],
    services: [
      'Translation',
      'MTPE',
      'Proofreading',
      'Editing',
      'Localization',
      'Subtitling'
    ],
    catTools: [
      'SDL Trados Studio',
      'memoQ',
      'Phrase',
      'Subtitle Edit',
      'Smartcat',
      'ApSIC Xbench'
    ],
    website: 'https://theprecisiondesk.com',
    portfolio: 'https://theprecisiondesk.com/portfolio',
    contactEmail: 'favourlancee@gmail.com',
    profileStatus: 'Active',
    featured: true,
    isFavourDudubo: true,
    created_at: '2026-01-01'
  },
  {
    id: 'ind-1',
    name: 'Astrid Lindholm',
    slug: 'astrid-lindholm',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    headline: 'Independent Medical & Regulatory Translator (EN → SV)',
    bio: 'Independent freelance translator based in Uppsala with 8+ years specializing in EMA regulatory submissions, clinical trial protocols, and veterinary medicine.',
    location: 'Uppsala, Sweden (CET / UTC+1)',
    generalAvailability: 'Accepting select agency & corporate direct assignments',
    languages: ['Swedish (Native)', 'English (Fluent)'],
    languagePairs: ['English → Swedish'],
    specializations: ['Medical & Life Sciences', 'Regulatory Affairs'],
    services: ['Translation', 'Editing', 'Proofreading'],
    catTools: ['memoQ', 'SDL Trados Studio'],
    website: 'https://example.com/astrid-lindholm',
    profileStatus: 'Active',
    featured: false,
    isFavourDudubo: false,
    created_at: '2026-02-14'
  },
  {
    id: 'ind-2',
    name: 'Henrik Bakke',
    slug: 'henrik-bakke',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    headline: 'Independent Maritime & Energy Translator (NO ↔ EN)',
    bio: 'Independent technical translator with an engineering background. Specializes in offshore drilling specs, marine propulsion systems, and subsea robotics documentation.',
    location: 'Bergen, Norway (CET / UTC+1)',
    generalAvailability: 'Available for short-turnaround technical engineering batches',
    languages: ['Norwegian (Native)', 'English (Bilingual)'],
    languagePairs: ['Norwegian → English', 'English → Norwegian'],
    specializations: ['Technical & Engineering', 'Maritime / Offshore', 'Energy'],
    services: ['Translation', 'MTPE', 'Editing'],
    catTools: ['SDL Trados Studio', 'Phrase'],
    profileStatus: 'Active',
    featured: false,
    isFavourDudubo: false,
    created_at: '2026-02-28'
  },
  {
    id: 'ind-3',
    name: 'Elinor Lindqvist',
    slug: 'elinor-lindqvist',
    profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    headline: 'Independent Legal & Compliance Translator (SV → EN)',
    bio: 'Independent translator focusing on European intellectual property law, Nordic corporate arbitration transcripts, and antitrust compliance documentation.',
    location: 'Gothenburg, Sweden',
    generalAvailability: 'Booking projects 1–2 weeks in advance',
    languages: ['Swedish (Native)', 'English (Native Level)'],
    languagePairs: ['Swedish → English'],
    specializations: ['Legal', 'Business & Corporate'],
    services: ['Translation', 'Proofreading', 'Editing'],
    catTools: ['memoQ', 'Wordfast'],
    profileStatus: 'Active',
    featured: false,
    isFavourDudubo: false,
    created_at: '2026-03-04'
  }
];

export const INITIAL_QUOTE_REQUESTS: QuoteRequest[] = [
  {
    id: 'qr-101',
    name: 'Dr. Karoline Vinter',
    email: 'k.vinter@nordicmedtech-sample.no',
    company: 'Nordic Ortho Solutions AS',
    sourceLanguage: 'English',
    targetLanguage: 'Norwegian',
    service: 'Translation',
    industry: 'Medical / Life Sciences',
    wordCount: 5400,
    deadline: '2026-04-10',
    projectDescription: 'Surgical implant Instructions for Use (IFU) translation and sterilization guide for Norwegian hospital procurement.',
    estimatedFee: 648.00,
    currency: 'EUR',
    status: 'new',
    created_at: '2026-03-18'
  },
  {
    id: 'qr-102',
    name: 'Marcus Ekström',
    email: 'marcus@cloudmetrics-sample.se',
    company: 'CloudMetrics AB',
    sourceLanguage: 'English',
    targetLanguage: 'Swedish',
    service: 'Localization',
    industry: 'SaaS / Software',
    wordCount: 3800,
    deadline: '2026-04-02',
    projectDescription: 'Dashboard UI string localization in JSON format. Need variable preservation for user tokens.',
    estimatedFee: 494.00,
    currency: 'EUR',
    status: 'reviewed',
    notes: 'Checked JSON file; 3,800 keys confirmed. Requested quote sent.',
    created_at: '2026-03-16'
  },
  {
    id: 'qr-103',
    name: 'Sarah Jenkins',
    email: 'sjenkins@globaltechtrans-sample.com',
    company: 'Apex Localization Global',
    sourceLanguage: 'Norwegian',
    targetLanguage: 'English',
    service: 'MTPE',
    industry: 'Technical / Engineering',
    wordCount: 14500,
    deadline: '2026-04-15',
    projectDescription: 'Full MTPE pass on wind turbine maintenance manuals. Trados package provided.',
    estimatedFee: 1015.00,
    currency: 'EUR',
    status: 'quoted',
    notes: 'Sent formal estimate based on €0.07/word MTPE rate.',
    created_at: '2026-03-14'
  }
];

export const SUPABASE_SCHEMA_SQL = `-- ========================================================
-- The Precision Desk - Supabase PostgreSQL Database Schema
-- Architecture prepared for Favour Dudubo (theprecisiondesk.com)
-- Tables: profiles, portfolio_projects, services, resources,
--         quote_requests, translator_profiles, blog_posts
-- ========================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES (Users and Admin credentials)
create table if not exists public.profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users on delete cascade,
  full_name text not null,
  email text not null unique,
  role text default 'admin' check (role in ('admin', 'editor', 'translator')),
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. SERVICES
create table if not exists public.services (
  id text primary key,
  title text not null,
  short_description text not null,
  what_it_involves text[] not null,
  typical_content text[] not null,
  quality_considerations text[] not null,
  relevant_language_pairs text[] not null,
  standard_turnaround text,
  icon text,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 3. PORTFOLIO PROJECTS
create table if not exists public.portfolio_projects (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  language_pair text not null,
  source_language text not null,
  target_language text not null,
  service text not null,
  industry text not null,
  description text not null,
  challenge text,
  approach text,
  outcome text,
  tools text[] default '{}',
  is_demonstration_sample boolean default true,
  sample_source_excerpt text,
  sample_target_excerpt text,
  sample_notes text,
  word_count_approx integer,
  published boolean default true,
  featured boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 4. RESOURCES (Templates & Guides)
create table if not exists public.resources (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  category text not null check (category in ('Career', 'Freelancing', 'CAT Tools', 'Business', 'Templates', 'Productivity')),
  description text not null,
  format text not null,
  free_status text default 'Free' check (free_status in ('Free', 'Member Resource')),
  download_filename text,
  preview_points text[] default '{}',
  sample_content text,
  published boolean default true,
  featured boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 5. QUOTE REQUESTS
create table if not exists public.quote_requests (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  company text,
  source_language text not null,
  target_language text not null,
  service text not null,
  industry text not null,
  word_count integer not null default 0,
  deadline date,
  project_description text not null,
  file_name text,
  estimated_fee numeric(10, 2),
  currency text default 'EUR',
  status text default 'new' check (status in ('new', 'reviewed', 'quoted', 'archived')),
  admin_notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 6. TRANSLATOR PROFILES (Independent Directory)
create table if not exists public.translator_profiles (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  profile_image text,
  headline text not null,
  bio text not null,
  location text,
  general_availability text,
  languages text[] default '{}',
  language_pairs text[] default '{}',
  specializations text[] default '{}',
  services text[] default '{}',
  cat_tools text[] default '{}',
  website text,
  portfolio text,
  contact_email text,
  profile_status text default 'Active' check (profile_status in ('Active', 'Under Review', 'Suspended')),
  featured boolean default false,
  is_favour_dudubo boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 7. BLOG POSTS
create table if not exists public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  category text,
  read_time text,
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ROW LEVEL SECURITY (RLS) POLICIES
alter table public.quote_requests enable row level security;
alter table public.portfolio_projects enable row level security;
alter table public.resources enable row level security;
alter table public.translator_profiles enable row level security;

-- Public can submit quote requests
create policy "Allow public quote submissions" 
  on public.quote_requests for insert 
  with check (true);

-- Public can read published portfolio projects, resources, and profiles
create policy "Allow public read published portfolio" 
  on public.portfolio_projects for select 
  using (published = true);

create policy "Allow public read published resources" 
  on public.resources for select 
  using (published = true);

create policy "Allow public read active translators" 
  on public.translator_profiles for select 
  using (profile_status = 'Active');
`;

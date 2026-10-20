export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  category: 'Criminal' | 'Family' | 'Civil & Commercial' | 'Real Estate' | 'Constitutional' | 'Corporate';
  shortDesc: string;
  heroSummary: string;
  statutes: string[];
  keyServices: string[];
  procedureSteps: { title: string; desc: string }[];
  requiredDocs: string[];
  jurisdiction: string;
  faqs: { question: string; answer: string }[];
  caseCount: string;
  estimatedTimeline: string;
}

export interface Advocate {
  id: string;
  name: string;
  designation: string;
  experienceYears: number;
  barEnrollment: string;
  courts: string[];
  specializations: string[];
  education: string;
  bio: string;
  notableCases: string[];
  consultationFee: string;
  rating: number;
  reviewCount: number;
}

export interface CourtLocation {
  id: string;
  name: string;
  type: 'Apex Court' | 'High Court' | 'District Court' | 'Specialized Tribunal';
  district: string;
  address: string;
  jurisdiction: string;
  workingHours: string;
  metroAccess: string;
  filingCounterTimings: string;
  description: string;
  specialCourts: string[];
}

export interface LegalInsight {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  keyTakeaways: string[];
  content: string[];
  legalCitations: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  matterType: string;
  court: string;
  year: string;
  comment: string;
  outcome: string;
  rating: number;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'pa-1',
    slug: 'criminal-defense-bail',
    title: 'Criminal Defense & Bail Matters',
    category: 'Criminal',
    shortDesc: 'Anticipatory bail, regular bail, quashing of FIR under Section 482 CrPC / BNSS, economic offenses, and trial advocacy.',
    heroSummary: 'Comprehensive defense strategies before Magistrate courts, Sessions Courts, Delhi High Court, and the Supreme Court of India in bail, trial, and quashing petitions.',
    statutes: ['Bharatiya Nyaya Sanhita (BNS)', 'Bharatiya Nagarik Suraksha Sanhita (BNSS)', 'Prevention of Money Laundering Act (PMLA)', 'POCSO Act', 'NDPS Act'],
    keyServices: [
      'Urgent Anticipatory Bail Applications (BNSS Sec 482 / CrPC 438)',
      'Regular Bail & Interim Medical Bail Applications',
      'Quashing of False FIRs & Criminal Complaints',
      'White-Collar Crime, Serious Fraud & ED / CBI Defense',
      'Trial Defense in Cheating, Forgery & Cyber Fraud',
      'Revision Petitions and Criminal Appeals before High Court'
    ],
    procedureSteps: [
      { title: 'Case Analysis & Police Record Audit', desc: 'Detailed review of FIR, GD entries, witness statements, and forensic reports.' },
      { title: 'Grounds Drafting & Urgent Filing', desc: 'Drafting grounded bail petitions citing apex court precedents on liberty and non-custodial merits.' },
      { title: 'Courtroom Arguments & Interim Relief', desc: 'Vigorous argument before Sessions Judge or High Court Vacation/Regular Bench.' },
      { title: 'Bail Bond Execution & Release', desc: 'Furnishing surety verification and securing expedited release orders from jail authorities.' }
    ],
    requiredDocs: [
      'Copy of FIR / Complaint copy',
      'Arrest memo or notice under Section 35(3) BNSS / 41A CrPC',
      'Medical certificates (if seeking medical grounds)',
      'Proof of identity and local Delhi NCR residential surety documents',
      'Previous bail rejection order (if moving higher court)'
    ],
    jurisdiction: 'Patiala House, Tis Hazari, Saket, Rohini, Dwarka, Karkardooma, Delhi High Court, Supreme Court',
    faqs: [
      { question: 'How quickly can an anticipatory bail petition be listed in Delhi?', answer: 'In urgent matters before the Sessions Court or Delhi High Court, listing is usually obtained within 24 to 48 hours with urgent mentioning.' },
      { question: 'What is the standard procedure if a regular bail is dismissed by Magistrate?', answer: 'An appeal or fresh regular bail petition is immediately filed before the Sessions Court, and subsequently before the Delhi High Court.' }
    ],
    caseCount: '850+ Cases Handled',
    estimatedTimeline: '2 to 5 days for urgent bail listing'
  },
  {
    id: 'pa-2',
    slug: 'matrimonial-divorce-custody',
    title: 'Matrimonial Disputes & Divorce',
    category: 'Family',
    shortDesc: 'Mutual consent divorce, contested divorce, child custody, maintenance under Sec 125 CrPC / BNSS, and domestic violence.',
    heroSummary: 'Compassionate and resolute representation in sensitive family matters across all Principal Family Courts in Delhi NCR.',
    statutes: ['Hindu Marriage Act, 1955', 'Special Marriage Act, 1954', 'Protection of Women from Domestic Violence Act, 2005', 'Guardians and Wards Act, 1890'],
    keyServices: [
      'Mutual Consent Divorce with waiver of statutory 6-month cooling period',
      'Contested Divorce on grounds of Cruelty, Desertion, or Adultery',
      'Child Custody & Visitation Rights Petitions',
      'Maintenance & Alimony calculation and enforcement',
      'Defense against Section 498A IPC / Sec 85 BNS and DV Act notices',
      'Mediation and Settlement Deed drafting'
    ],
    procedureSteps: [
      { title: 'Confidential Consultation & Strategy', desc: 'Understanding family dynamics, children welfare considerations, and financial disclosure.' },
      { title: 'Mediation & Settlement Negotiations', desc: 'Exploring mutual resolution or structured settlement deeds to prevent protracted conflict.' },
      { title: 'Petition Filing in Family Court', desc: 'Filing First Motion or contested divorce suit before the designated Principal Judge Family Court.' },
      { title: 'Final Decree & Ancillary Relief', desc: 'Securing permanent alimony orders, child custody visitation protocols, and divorce decree.' }
    ],
    requiredDocs: [
      'Marriage Certificate or Wedding Card with photos',
      'Address proof of both spouses in Delhi NCR',
      'Income affidavits in compliance with Rajnesh v. Neha guidelines',
      'List of Stridhan items and mutual settlement agreements (if applicable)'
    ],
    jurisdiction: 'All Family Courts at Patiala House, Saket, Rohini, Dwarka, Tis Hazari, and Karkardooma',
    faqs: [
      { question: 'Can the 6-month statutory waiting period be waived in mutual divorce?', answer: 'Yes, pursuant to Supreme Court precedent (Amardeep Singh v. Harveen Kaur), the court can waive the 6-month period if reconciliation is impossible and all claims are settled.' },
      { question: 'How is interim maintenance calculated by Delhi courts?', answer: 'Courts evaluate comprehensive income disclosures, lifestyle standards, and financial liabilities based on the mandatory Supreme Court guidelines.' }
    ],
    caseCount: '620+ Family Matters Resolved',
    estimatedTimeline: '1 to 3 months for mutual consent'
  },
  {
    id: 'pa-3',
    slug: 'property-real-estate-disputes',
    title: 'Property & Real Estate Litigation',
    category: 'Real Estate',
    shortDesc: 'Title disputes, partition suits, builder-buyer delays under RERA, possession recovery, and injunctions.',
    heroSummary: 'Protecting real estate investments, ancestral holdings, and commercial leases against encroachments, illegal transfers, and builder defaults.',
    statutes: ['Transfer of Property Act, 1882', 'Real Estate (Regulation and Development) Act (RERA)', 'Specific Relief Act, 1963', 'Code of Civil Procedure, 1908'],
    keyServices: [
      'Partition Suits for Ancestral & Joint Family Properties',
      'Builder-Buyer Disputes before Delhi RERA & REAT',
      'Suits for Permanent Injunction against illegal dispossession',
      'Title Verification, Due Diligence & Search Reports across Sub-Registrar offices',
      'Landlord-Tenant eviction petitions under Delhi Rent Control Act',
      'Probate of Wills & Letters of Administration before High Court'
    ],
    procedureSteps: [
      { title: 'Document & Chain-of-Title Audit', desc: 'Examine sale deeds, mutation records, khatoni, and municipal tax receipts.' },
      { title: 'Legal Notice & Demand', desc: 'Formal statutory notice to adverse parties or errant developers.' },
      { title: 'Suit Filing & Interim Injunction', desc: 'Seeking urgent status quo orders under Order 39 Rules 1 & 2 CPC to prevent property sale.' },
      { title: 'Trial & Execution of Decree', desc: 'Leading evidence, commissioner inspection, and physical possession execution through bailiff.' }
    ],
    requiredDocs: [
      'Registered Sale Deed / Conveyance Deed / GPA / Agreement to Sell',
      'Chain of title documents dating back 30 years where applicable',
      'Site plan, property tax assessment receipts, and mutation letter',
      'Correspondence or builder allotment agreement with payment receipts'
    ],
    jurisdiction: 'Civil Courts in all Delhi Districts, Delhi High Court (Original Civil Jurisdiction), Delhi RERA',
    faqs: [
      { question: 'When does Delhi High Court have original civil jurisdiction?', answer: 'Delhi High Court holds original civil jurisdiction for property and commercial suits where the suit valuation exceeds Rs. 2 Crores.' },
      { question: 'Can builders be penalized for possession delay in Delhi NCR?', answer: 'Yes, under RERA, homebuyers are entitled to monthly delay interest at SBI MCLR + 2% or a full refund with interest.' }
    ],
    caseCount: '480+ Real Estate Disputes',
    estimatedTimeline: '3 to 18 months depending on forum'
  },
  {
    id: 'pa-4',
    slug: 'corporate-commercial-litigation',
    title: 'Corporate & Commercial Litigation',
    category: 'Corporate',
    shortDesc: 'Company law matters before NCLT, shareholder disputes, commercial contracts, arbitration, and insolvency (IBC).',
    heroSummary: 'Strategic commercial representation for emerging enterprises, directors, and multinational companies in complex disputes.',
    statutes: ['Insolvency and Bankruptcy Code, 2016 (IBC)', 'Companies Act, 2013', 'Commercial Courts Act, 2015', 'Arbitration and Conciliation Act, 1996'],
    keyServices: [
      'Section 7 & 9 IBC Insolvency Petitions before NCLT New Delhi Benches',
      'Oppression & Mismanagement Petitions under Section 241-242 Companies Act',
      'Commercial Suits before Designated Commercial Courts in Delhi',
      'Domestic & International Commercial Arbitration Proceedings',
      'Section 9 & 11 Petitions for Interim Relief & Arbitrator Appointment',
      'MSME Samadhaan delayed payment recovery suits'
    ],
    procedureSteps: [
      { title: 'Contractual Analysis & Default Notices', desc: 'Reviewing arbitration clauses, default triggers, and issuing Section 8 IBC demand notices.' },
      { title: 'Pre-Institution Mediation', desc: 'Mandatory commercial mediation compliance under Section 12A of the Commercial Courts Act.' },
      { title: 'Tribunal / Court Listing', desc: 'Filing before NCLT Principal / New Delhi benches or Commercial Division of High Court.' },
      { title: 'Award & Execution', desc: 'Enforcing arbitral awards or executing commercial decrees with asset attachments.' }
    ],
    requiredDocs: [
      'Master Services Agreement, Purchase Orders, and Invoices with proof of delivery',
      'Statutory Demand Notice under Form 3/4 IBC or Section 21 Arbitration notice',
      'Ledger statements with Bank Certificate under Section 9(3)(c) IBC',
      'Board Resolution authorizing legal representation'
    ],
    jurisdiction: 'NCLT New Delhi (Principal & Court Benches), NCLAT, High Court Commercial Division',
    faqs: [
      { question: 'What is the threshold to initiate insolvency under IBC?', answer: 'The minimum default threshold is Rs. 1 Crore for corporate debtors.' },
      { question: 'Is pre-institution mediation mandatory in commercial disputes?', answer: 'Yes, unless urgent interim relief is claimed under Section 12A of the Commercial Courts Act, 2015.' }
    ],
    caseCount: '340+ Corporate Matters',
    estimatedTimeline: '1 to 6 months'
  },
  {
    id: 'pa-5',
    slug: 'cheque-bounce-section-138',
    title: 'Cheque Bounce (Sec 138 NI Act) & Recovery',
    category: 'Civil & Commercial',
    shortDesc: 'Statutory demand notices, trial defense, swift settlement, and summary recovery suits under Order 37 CPC.',
    heroSummary: 'Fast-track legal mechanism for recovering dishonored cheque amounts and commercial debt with rigorous trial representation.',
    statutes: ['Negotiable Instruments Act, 1881', 'Code of Criminal Procedure, 1973', 'Code of Civil Procedure, Order 37'],
    keyServices: [
      'Drafting & Service of Statutory Legal Notice within 30 days of dishonor',
      'Filing Complaint before Special Metropolitan Magistrate (NI Act)',
      'Interim Compensation claims under Section 143A NI Act (up to 20%)',
      'Defense against fraudulent, security or blank cheque misuse',
      'Summary Recovery Suits under Order 37 CPC for admitted debts',
      'Lok Adalat & Court-annexed mediation settlement'
    ],
    procedureSteps: [
      { title: 'Cheque Return Memo Audit', desc: 'Confirming dishonor memo dates and strictly calculating the 30-day notice statutory window.' },
      { title: 'Legal Demand Notice Dispatch', desc: 'Issuing demand via Registered Post & Speed Post giving 15 statutory cure days.' },
      { title: 'Complaint Filing within 30 Days', desc: 'Submitting complaint under Section 138/142 NI Act with preliminary affidavit evidence.' },
      { title: 'Summons & Trial', desc: 'Securing court summons, bailable warrants if required, and Section 143A interim compensation.' }
    ],
    requiredDocs: [
      'Original Dishonored Cheque',
      'Bank Return Memo with official bank stamp/code',
      'Copy of Statutory Legal Demand Notice with postal tracking delivery proofs',
      'Underlying contract, invoice, or promissory note showing legally enforceable debt'
    ],
    jurisdiction: 'Special NI Act Courts at all 6 Delhi District Court complexes',
    faqs: [
      { question: 'What is the strict time limit to issue notice for a bounced cheque?', answer: 'The statutory notice must be dispatched within 30 days of receiving the bank return memo from your bank.' },
      { question: 'Can the court award interim compensation to the complainant?', answer: 'Yes, under Section 143A NI Act, the court can direct the accused to deposit up to 20% of the cheque amount during trial.' }
    ],
    caseCount: '1,200+ Cheque Bounce Matters',
    estimatedTimeline: '4 to 12 months for trial resolution'
  },
  {
    id: 'pa-6',
    slug: 'constitutional-writ-petitions',
    title: 'Constitutional Writs & High Court Appeals',
    category: 'Constitutional',
    shortDesc: 'Article 226 & 32 writ petitions, service matters, administrative law, tender challenges, and public interest litigation.',
    heroSummary: 'Upholding fundamental constitutional freedoms and checking administrative arbitrariness before the High Court of Delhi and Supreme Court.',
    statutes: ['Constitution of India (Articles 14, 19, 21, 226, 32, 136)', 'Delhi High Court Rules & Orders'],
    keyServices: [
      'Writ of Habeas Corpus against illegal detention or custody',
      'Writ of Mandamus compelling governmental bodies to perform statutory duties',
      'Writ of Certiorari quashing arbitrary executive or regulatory orders',
      'Government Tender & Public Procurement contract disputes',
      'Central Administrative Tribunal (CAT) service and pension disputes',
      'Special Leave Petitions (SLP) before Supreme Court of India'
    ],
    procedureSteps: [
      { title: 'Constitutional Ground Formulation', desc: 'Isolating violations of Part III fundamental rights and lack of alternative efficacious remedies.' },
      { title: 'Urgent Advance Service', desc: 'Serving standing counsel for GNCTD, Union of India, or statutory boards.' },
      { title: 'Mentioning & Motion Hearing', desc: 'Arguing before the Hon’ble Division Bench or Single Bench for notice and stay orders.' },
      { title: 'Counter Affidavits & Final Disposal', desc: 'Filing rejoinders and securing definitive constitutional directions.' }
    ],
    requiredDocs: [
      'Impugned government notification, rejection order, or cancellation letter',
      'Representation letters submitted to authorities with postal tracking',
      'Affidavit of petitioner affirming lack of parallel pending proceedings',
      'Vakalatnama duly executed'
    ],
    jurisdiction: 'High Court of Delhi (New Delhi), Supreme Court of India',
    faqs: [
      { question: 'Can an executive decision be stayed immediately by High Court?', answer: 'Yes, the High Court can grant ex-parte ad-interim stays where a prima facie arbitrary violation or irreparable harm is demonstrated.' },
      { question: 'Who represents the government in High Court writ petitions?', answer: 'Nominated Standing Counsel for Union of India or Government of NCT of Delhi receive advance notices.' }
    ],
    caseCount: '290+ Writs & Appeals',
    estimatedTimeline: 'Urgent listing within 48 hours'
  }
];

export const ADVOCATES: Advocate[] = [
  {
    id: 'adv-1',
    name: 'Senior Counsel K. V. Raman',
    designation: 'Senior Advocate & Managing Partner',
    experienceYears: 28,
    barEnrollment: 'D/412/1996 (Bar Council of Delhi)',
    courts: ['Supreme Court of India', 'Delhi High Court'],
    specializations: ['Constitutional Law', 'Appellate Litigation', 'White-Collar Crime Defense', 'Arbitration'],
    education: 'LL.B. Campus Law Centre, Faculty of Law, University of Delhi; LL.M. International Law',
    bio: 'With nearly three decades at the Delhi Bar, Senior Advocate K. V. Raman has briefed and argued landmark constitutional and commercial appeals. Formerly standing counsel on special panels, he leads our appellate advocacy team.',
    notableCases: [
      'Secured acquittal in high-profile 2021 CBI economic offense appeal before Delhi High Court',
      'Represented constitutional challenge against arbitrary land acquisition in Delhi NCR',
      'Lead counsel in Rs. 140 Crore international commercial arbitration enforcement'
    ],
    consultationFee: '₹ 5,000 / consultation',
    rating: 4.9,
    reviewCount: 142
  },
  {
    id: 'adv-2',
    name: 'Advocate Meenakshi Sharma',
    designation: 'Partner — Matrimonial & Family Division Lead',
    experienceYears: 18,
    barEnrollment: 'D/890/2006 (Bar Council of Delhi)',
    courts: ['Delhi High Court', 'Patiala House Family Court', 'Saket Family Court'],
    specializations: ['Mutual & Contested Divorce', 'Child Custody', 'Domestic Violence Act', 'Stridhan Recovery'],
    education: 'B.A. LL.B. (Hons.), National Law University; Trained Mediator (Delhi High Court Mediation Centre)',
    bio: 'Renowned for empathetic yet unyielding representation, Advocate Meenakshi Sharma has helped hundreds of individuals resolve difficult family crises with dignity, fair alimony settlements, and child-first custody protocols.',
    notableCases: [
      'Pioneered waiver of 6-month statutory waiting period in contested-to-settlement divorce case',
      'Secured cross-border child custody repatriation order from Delhi High Court',
      'Negotiated comprehensive Rs. 8.5 Crore alimony settlement without protracted trial'
    ],
    consultationFee: '₹ 3,500 / consultation',
    rating: 4.9,
    reviewCount: 189
  },
  {
    id: 'adv-3',
    name: 'Advocate Rajeshwar Malhotra',
    designation: 'Partner — Criminal Defense & Trial Specialist',
    experienceYears: 22,
    barEnrollment: 'D/654/2002 (Bar Council of Delhi)',
    courts: ['Delhi High Court', 'Patiala House District Courts', 'Tis Hazari Courts'],
    specializations: ['Bail & Anticipatory Bail', 'PMLA Defense', 'POCSO & NDPS', 'FIR Quashing'],
    education: 'LL.B., Faculty of Law, Delhi University; B.Sc. Forensic Science',
    bio: 'Advocate Malhotra is recognized across Delhi trial courts for tenacious cross-examination and deep forensic acumen. He maintains an active daily trial practice across Patiala House and Tis Hazari.',
    notableCases: [
      'Obtained regular bail for key accused in high-stakes PMLA financial investigation',
      'Quashed multiple vexatious criminal complaints under Section 482 CrPC before High Court',
      'Successful trial defense securing honorable discharge in complex corporate forgery allegation'
    ],
    consultationFee: '₹ 4,000 / consultation',
    rating: 4.8,
    reviewCount: 215
  },
  {
    id: 'adv-4',
    name: 'Advocate Arjun Singhania',
    designation: 'Senior Associate — Corporate & NCLT Practice',
    experienceYears: 14,
    barEnrollment: 'D/1145/2010 (Bar Council of Delhi)',
    courts: ['NCLT New Delhi', 'NCLAT', 'Delhi High Court (Commercial Division)'],
    specializations: ['Insolvency (IBC)', 'Commercial Litigation', 'Contractual Arbitration', 'Shareholder Disputes'],
    education: 'B.B.A. LL.B. (Hons.), Symbiosis Law School; Post-Graduation in Corporate Restructuring',
    bio: 'Specializing in commercial disputes and insolvency proceedings, Arjun brings commercial clarity and aggressive courtroom advocacy to corporate recoveries and boardroom litigations.',
    notableCases: [
      'Admitted Section 7 IBC insolvency petition recovering Rs. 42 Crore corporate operational debt',
      'Successfully defended minority shareholder interest in family-owned conglomerates at NCLT',
      'Obtained urgent Section 9 interim injunction preserving multimillion-dollar intellectual assets'
    ],
    consultationFee: '₹ 3,500 / consultation',
    rating: 4.8,
    reviewCount: 96
  },
  {
    id: 'adv-5',
    name: 'Advocate Priya Nair',
    designation: 'Associate Partner — Real Estate & Property Counsel',
    experienceYears: 12,
    barEnrollment: 'D/1820/2012 (Bar Council of Delhi)',
    courts: ['Delhi High Court', 'Saket District Court', 'Dwarka Court', 'Delhi RERA'],
    specializations: ['Partition Suits', 'Delhi RERA Litigation', 'Title Due Diligence', 'Tenant Eviction'],
    education: 'B.A. LL.B., ILS Law College; Diploma in Urban Real Estate Law',
    bio: 'Priya advises home buyers, high-net-worth families, and commercial landlords across South and West Delhi in property partition, RERA default remedies, and title disputes.',
    notableCases: [
      'Secured 100% refund with 10.75% annual interest for 26 homebuyers before Delhi RERA',
      'Resolved 15-year-old joint family partition dispute in South Extension through court decree',
      'Obtained stay against unlawful demolition and municipal sealing of commercial premises'
    ],
    consultationFee: '₹ 3,000 / consultation',
    rating: 4.7,
    reviewCount: 114
  },
  {
    id: 'adv-6',
    name: 'Advocate Tariq Khan',
    designation: 'Senior Associate — Cyber Crime & Cheque Bounce Head',
    experienceYears: 10,
    barEnrollment: 'D/2340/2014 (Bar Council of Delhi)',
    courts: ['Tis Hazari Special NI Act Courts', 'Rohini Courts', 'Cyber Crime Cells'],
    specializations: ['Section 138 NI Act', 'Cyber Fraud Defense', 'Financial Crime', 'IT Act Compliance'],
    education: 'LL.B. Jamia Millia Islamia; Certified Information Systems Security & Cyber Law Consultant',
    bio: 'Tariq heads our fast-track recovery cell and cyber law vertical, handling digital fraud defenses, financial phishing litigations, and cheque dishonor trials with analytical precision.',
    notableCases: [
      'Recovered Rs. 1.8 Crore under Section 138 NI Act within 6 months via court-supervised settlement',
      'Defended startup directors wrongfully named in multi-jurisdictional cyber phishing scam',
      'Secured unfreezing of legitimate business bank accounts seized by Delhi Police Cyber Cell'
    ],
    consultationFee: '₹ 2,500 / consultation',
    rating: 4.8,
    reviewCount: 88
  }
];

export const COURTS: CourtLocation[] = [
  {
    id: 'court-sc',
    name: 'Supreme Court of India',
    type: 'Apex Court',
    district: 'New Delhi',
    address: 'Tilak Marg, Mandi House, New Delhi, Delhi 110001',
    jurisdiction: 'Apex Judicial Body of the Republic of India; Original, Appellate, and Advisory Constitutional Jurisdiction.',
    workingHours: '10:00 AM - 4:00 PM (Monday to Friday)',
    metroAccess: 'Supreme Court Metro Station (Blue Line) - 200m walk',
    filingCounterTimings: '10:00 AM - 4:00 PM (E-filing 24/7)',
    description: 'The highest court of the land, hearing Special Leave Petitions (SLPs), Transfer Petitions, Public Interest Litigations, and Constitutional Bench references.',
    specialCourts: ['Constitution Benches', 'Vacation Benches', 'Pil Cell', 'Mediation Centre']
  },
  {
    id: 'court-dhc',
    name: 'High Court of Delhi',
    type: 'High Court',
    district: 'New Delhi',
    address: 'Sher Shah Road, Near India Gate, New Delhi, Delhi 110503',
    jurisdiction: 'Entire National Capital Territory of Delhi; Original Civil Jurisdiction (Suits > ₹2 Cr), Appellate, and Constitutional Writ Jurisdiction.',
    workingHours: '10:00 AM - 4:30 PM (Monday to Friday)',
    metroAccess: 'Khan Market Metro Station (Violet Line) or High Court gate',
    filingCounterTimings: '10:00 AM - 3:30 PM (Registry B-Block)',
    description: 'Renowned for judicial efficiency and commercial expertise, Delhi High Court exercises original, commercial, and appellate powers over all Delhi districts.',
    specialCourts: ['Commercial Division', 'Intellectual Property Division (IPD)', 'Arbitration Benches', 'Samadhan Mediation']
  },
  {
    id: 'court-phc',
    name: 'Patiala House Courts Complex',
    type: 'District Court',
    district: 'New Delhi District',
    address: 'India Gate Circle, Purana Qila Road, New Delhi, Delhi 110001',
    jurisdiction: 'New Delhi District, Special CBI Courts, NIA Courts, NDPS matters, and prominent Central Government jurisdiction.',
    workingHours: '10:00 AM - 5:00 PM (Monday to Saturday, 2nd/4th Sat Off)',
    metroAccess: 'Mandi House Metro Station (Blue/Violet Lines) - 900m',
    filingCounterTimings: '10:00 AM - 3:30 PM',
    description: 'One of Delhi’s historic district court complexes, handling high-profile central Delhi criminal cases, CBI trial courts, and family court matters.',
    specialCourts: ['Special CBI Courts', 'Special NIA Courts', 'Principal Judge Family Court', 'Chief Metropolitan Magistrate']
  },
  {
    id: 'court-thc',
    name: 'Tis Hazari Courts Complex',
    type: 'District Court',
    district: 'Central & West Delhi Districts',
    address: 'Mori Gate, Near Old Delhi Railway Station, Delhi 110054',
    jurisdiction: 'Central Delhi and West Delhi districts; oldest and largest district court complex in Asia.',
    workingHours: '10:00 AM - 5:00 PM',
    metroAccess: 'Tis Hazari Metro Station (Red Line) - direct walkway',
    filingCounterTimings: '10:00 AM - 3:30 PM',
    description: 'The foundational district court of Delhi, containing over 140 courtrooms catering to civil, criminal, motor accident (MACT), and commercial jurisdictions.',
    specialCourts: ['Principal District & Sessions Judge', 'Special Judge Anti-Corruption', 'Motor Accident Claims Tribunal', 'Mediation Wing']
  },
  {
    id: 'court-saket',
    name: 'Saket District Courts Complex',
    type: 'District Court',
    district: 'South & South East Delhi Districts',
    address: 'Press Enclave Road, Saket, New Delhi, Delhi 110017',
    jurisdiction: 'Covers South Delhi and South East Delhi, including Greater Kailash, Hauz Khas, Defence Colony, and Saket.',
    workingHours: '10:00 AM - 5:00 PM',
    metroAccess: 'Malviya Nagar or Saket Metro Station (Yellow Line)',
    filingCounterTimings: '10:00 AM - 3:30 PM',
    description: 'Modern, fully air-conditioned court complex with advanced digital infrastructure, catering to South Delhi property, corporate, and civil litigation.',
    specialCourts: ['Commercial Courts South', 'Special Fast Track POCSO', 'Family Courts South', 'Electricity Courts']
  },
  {
    id: 'court-rohini',
    name: 'Rohini District Courts Complex',
    type: 'District Court',
    district: 'North & North West Delhi Districts',
    address: 'Sector 14, Rohini, New Delhi, Delhi 110085',
    jurisdiction: 'North Delhi and North West Delhi districts, including Rohini, Pitampura, Model Town, and Narela.',
    workingHours: '10:00 AM - 5:00 PM',
    metroAccess: 'Rohini East or Rohini West Metro Station (Red Line)',
    filingCounterTimings: '10:00 AM - 3:30 PM',
    description: 'Large multi-storey judicial complex handling substantial industrial dispute cases, criminal trials, and matrimonial cases for North Delhi.',
    specialCourts: ['Industrial Tribunals', 'Labour Courts', 'Special Fast Track Courts', 'Consumer Dispute Redressal Forum']
  },
  {
    id: 'court-dwarka',
    name: 'Dwarka District Courts Complex',
    type: 'District Court',
    district: 'South West Delhi District',
    address: 'Sector 10, Dwarka, New Delhi, Delhi 110075',
    jurisdiction: 'South West Delhi, IGI Airport matters, Palam, Janakpuri, and Dwarka Sub-city.',
    workingHours: '10:00 AM - 5:00 PM',
    metroAccess: 'Dwarka Sector 10 Metro Station (Blue Line) - 150m',
    filingCounterTimings: '10:00 AM - 3:30 PM',
    description: 'Well-connected court facility handling South West district litigations, customs matters originating from IGI Airport, and regional family disputes.',
    specialCourts: ['Special Customs & FERA Courts', 'Family Courts South West', 'Evening Courts', 'Alternative Dispute Resolution (ADR) Centre']
  },
  {
    id: 'court-karkardooma',
    name: 'Karkardooma Courts Complex',
    type: 'District Court',
    district: 'East, North East & Shahdara Districts',
    address: 'Institutional Area, Vishwas Nagar, Shahdara, Delhi 110032',
    jurisdiction: 'Trans-Yamuna districts of East Delhi, North East Delhi, and Shahdara.',
    workingHours: '10:00 AM - 5:00 PM',
    metroAccess: 'Karkardooma Court Metro Station (Pink Line) - right outside gate',
    filingCounterTimings: '10:00 AM - 3:30 PM',
    description: 'Dedicated complex for Trans-Yamuna districts with dedicated evening courts, special cyber cells, and comprehensive civil litigation wings.',
    specialCourts: ['Special Riot Courts', 'Shahdara District Courts', 'MACT East', 'Mediation Centre']
  }
];

export const LEGAL_INSIGHTS: LegalInsight[] = [
  {
    slug: 'new-criminal-laws-bns-bnss-bsa-delhi-courts',
    title: 'Understanding the New Criminal Laws (BNS, BNSS, BSA 2024): Impact on Bail & Trial in Delhi Courts',
    category: 'Criminal Law',
    readTime: '6 min read',
    date: '12 Oct 2026',
    author: 'Advocate Rajeshwar Malhotra',
    summary: 'A detailed legal analysis of how the transition from IPC, CrPC, and Indian Evidence Act to BNS, BNSS, and BSA is being applied across Delhi District Courts.',
    keyTakeaways: [
      'Section 35(3) BNSS mandates prior notice instead of arbitrary arrest for offenses punishable under 7 years.',
      'Electronic evidence certification under Section 63 BSA replaces former Section 65B requirements.',
      'Zero FIR provisions are now statutorily recognized under Section 173 BNSS across all Delhi Police stations.',
      'Mandatory videography during search, seizure, and police panchnamas is now legally enforceable.'
    ],
    content: [
      'The enforcement of Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA) represents the most significant overhaul of Indian criminal jurisprudence in over a century.',
      'In Delhi trial courts, Magistrates and Sessions Judges have instituted rigorous protocols regarding police compliance with arrest guidelines. Under Section 35(3) of the BNSS, police officers are required to issue statutory notices rather than effectuating summary custodial arrests for allegations punishable up to seven years, unless explicit objective grounds are recorded in writing.',
      'Another watershed development is the digital evidence protocol under Section 63 of the BSA. Defense counsels now have stronger statutory grounds to challenge police seizures where mandatory videography and tamper-proof chain of custody were not maintained.',
      'For ongoing cases instituted prior to July 2024, proceedings continue under the repealed procedural codes pursuant to the saving clauses, but new FIRs registered in Delhi strictly adhere to the new nomenclature and procedural timelines.'
    ],
    legalCitations: ['Section 35(3) & 173, Bharatiya Nagarik Suraksha Sanhita, 2023', 'Section 63, Bharatiya Sakshya Adhiniyam, 2023', 'Arnesh Kumar v. State of Bihar, reaffirmed guidelines']
  },
  {
    slug: 'anticipatory-bail-delhi-high-court-procedure',
    title: 'How to Obtain Anticipatory Bail in Delhi: Grounds, Urgent Listing & Precedents',
    category: 'Bail & Liberty',
    readTime: '5 min read',
    date: '28 Sep 2026',
    author: 'Senior Counsel K. V. Raman',
    summary: 'Step-by-step strategic guide on seeking pre-arrest protection under Section 482 BNSS before Sessions Courts and Delhi High Court.',
    keyTakeaways: [
      'Anticipatory bail requires reasonable apprehension of arrest in a non-bailable offense.',
      'Urgent mentioning before the Hon’ble Chief Justice or designated Roster Bench enables same-day or next-day listing.',
      'Voluntary undertaking to join police investigation significantly improves likelihood of interim protection.',
      'Medical emergencies or civil color given to commercial disputes constitute strong relief grounds.'
    ],
    content: [
      'Personal liberty is the cornerstone of constitutional jurisprudence under Article 21. When an individual faces reasonable apprehension of arrest in false, motivated, or exaggerated criminal complaints in Delhi, seeking anticipatory bail is the primary legal shield.',
      'The procedural path begins either before the competent Sessions Judge of the respective Delhi district or directly before the High Court of Delhi in cases of extraordinary urgency or inter-state jurisdictional ramifications.',
      'The petition must comprehensively narrate the factual matrix, demonstrate the petitioner’s clean antecedent record, establish deep roots in society, and express an unequivocal willingness to join the investigation.',
      'Upon hearing initial arguments, courts frequently grant interim protection from coercive steps conditional upon the applicant cooperating with the Investigating Officer (IO).'
    ],
    legalCitations: ['Sushila Aggarwal v. State (NCT of Delhi) (2020) 5 SCC 1', 'Section 482, Bharatiya Nagarik Suraksha Sanhita, 2023']
  },
  {
    slug: 'mutual-consent-divorce-delhi-family-courts',
    title: 'Mutual Consent Divorce in Delhi: 6-Month Cooling Off Waiver & Settlement Terms',
    category: 'Matrimonial Law',
    readTime: '7 min read',
    date: '15 Sep 2026',
    author: 'Advocate Meenakshi Sharma',
    summary: 'A practical roadmap for spouses navigating divorce under Section 13B Hindu Marriage Act in Delhi Principal Family Courts.',
    keyTakeaways: [
      'First Motion and Second Motion can be expedited where reconciliation attempts have proven completely futile.',
      'A comprehensive Memorandum of Understanding (MoU) or Settlement Agreement is mandatory prior to First Motion.',
      'Virtual video conferencing (VC) appearances are readily permitted for NRI or outstation spouses.',
      'Permanent alimony and child custody terms must be clear, unambiguous, and witnessed.'
    ],
    content: [
      'Mutual consent divorce under Section 13B of the Hindu Marriage Act, 1955 provides an orderly, dignified resolution for marriages that have irretrievably broken down.',
      'Before approaching the Family Court, the parties must have lived separately for a statutory minimum of one year and executed a comprehensive Settlement Agreement detailing the disposition of Stridhan, mutual properties, maintenance, and child custody.',
      'Historically, spouses had to wait six months between First Motion and Second Motion. However, under the landmark ruling of Amardeep Singh v. Harveen Kaur, Delhi Family Courts routinely entertain waiver applications under Section 151 CPC where parties have settled all disputes.',
      'Additionally, Delhi Family Courts provide high-speed hybrid hearing facilities allowing spouses based overseas to record their statements securely via official Cisco Webex video link.'
    ],
    legalCitations: ['Section 13B(1) & 13B(2), Hindu Marriage Act, 1955', 'Amardeep Singh v. Harveen Kaur (2017) 8 SCC 746']
  },
  {
    slug: 'section-138-cheque-bounce-legal-notice-recovery',
    title: 'Section 138 NI Act: Timelines, Demand Notice Protocols, and Trial Defenses',
    category: 'Commercial Law',
    readTime: '5 min read',
    date: '02 Aug 2026',
    author: 'Advocate Tariq Khan',
    summary: 'Essential procedural checklist for creditors and defendants in cheque dishonor complaints across Delhi Metropolitan Magistrate Courts.',
    keyTakeaways: [
      'Demand notice must be dispatched within 30 days of cheque return memo.',
      'Complainant must wait the statutory 15-day grace period before filing the court complaint.',
      'Complaint must be filed within 30 days of the cause of action arising.',
      'Courts can award up to 20% interim compensation under Section 143A NI Act.'
    ],
    content: [
      'Dishonor of cheques under Section 138 of the Negotiable Instruments Act, 1881 constitutes a quasi-criminal offense with strict statutory deadlines.',
      'A minor typographical error or 1-day delay in issuing the statutory legal notice can prove fatal to the entire prosecution. The notice must explicitly demand the exact cheque amount and must be served via registered post or speed post with tracked delivery.',
      'For defendants, legitimate defenses include showing that the cheque was issued merely as security without an existing legally enforceable debt, or demonstrating material alterations on the cheque face.',
      'With the establishment of Special Digital NI Act Courts in Delhi, cases are being expedited through summary trials and court-annexed Lok Adalat conciliations.'
    ],
    legalCitations: ['Section 138, 142 & 143A, Negotiable Instruments Act, 1881', 'MSR Leathers v. S. Palaniappan (2013) 1 SCC 177']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Sunil Aggarwal',
    matterType: 'Anticipatory Bail & Section 482 Quashing',
    court: 'Delhi High Court',
    year: '2026',
    comment: 'When our family business was wrongfully implicated in an FIR due to a commercial misunderstanding, Senior Counsel Raman and Advocate Malhotra obtained anticipatory bail within 36 hours. Their courtroom poise was remarkable.',
    outcome: 'Granted Anticipatory Bail without arrest; FIR stayed',
    rating: 5
  },
  {
    id: 't-2',
    clientName: 'Dr. Neha Bhasin',
    matterType: 'Mutual Consent Divorce & Custody Settlement',
    court: 'Saket Family Court',
    year: '2026',
    comment: 'Advocate Meenakshi Sharma handled my matrimonial dispute with immense grace and empathy. She negotiated a fair settlement agreement with my ex-spouse without any acrimony and secured the waiver of the 6-month period.',
    outcome: 'Decree of Divorce granted in 45 days with full custody and agreed settlement',
    rating: 5
  },
  {
    id: 't-3',
    clientName: 'Vikramaditya Oberoi',
    matterType: 'Commercial Arbitration & NCLT Recovery',
    court: 'NCLT New Delhi & Commercial Court',
    year: '2025',
    comment: 'DelhiLawyers team resolved an overdue operational debt dispute of Rs. 3.4 Crores with a defaulting distributor. Their strategic IBC demand notice and disciplined approach resulted in a 100% principal recovery before trial.',
    outcome: 'Full recovery of debt amount + agreed interest settlement',
    rating: 5
  },
  {
    id: 't-4',
    clientName: 'Col. R. S. Rathore (Retd.)',
    matterType: 'Ancestral Property Partition & Title Suit',
    court: 'Patiala House Civil Court',
    year: '2025',
    comment: 'Advocate Priya Nair helped us resolve a disputed family inheritance in South Delhi that had been stalled for 12 years. Her thorough documentation and title scrutiny were decisive during mediation.',
    outcome: 'Registered partition deed executed with registered mutual shares',
    rating: 5
  }
];

export const FAQ_DATA = [
  {
    category: 'General Consultations',
    question: 'How do I schedule an in-person or video legal consultation?',
    answer: 'You can book an appointment through our online consultation portal, call our central chamber desk at +91 11 4982 7200, or visit our central offices at Connaught Place or near Patiala House Courts. We offer confidential in-person chamber consultations, court premise meetings, and encrypted video consultations for outstation and NRI clients.'
  },
  {
    category: 'Fee Transparency',
    question: 'How are legal fees structured at DelhiLawyers?',
    answer: 'In strict compliance with Bar Council of India norms, we believe in complete upfront fee transparency. Initial strategic consultations are charged at fixed rates depending on the seniority of the counsel. For litigation matters, fees are agreed in writing covering court drafting, appearance per hearing, and registry filings with no hidden administrative surcharges.'
  },
  {
    category: 'Emergency Representation',
    question: 'What is the procedure for urgent bail or arrest situations in Delhi NCR?',
    answer: 'Our criminal defense cell operates a 24/7 emergency response line for urgent bails, late-night detentions, and police remand hearings. Our advocates immediately attend the respective Police Station, examine the arrest grounds under BNSS Section 35(3), and move the Duty Magistrate or Vacation Bench at the earliest possible hour.'
  },
  {
    category: 'Jurisdiction',
    question: 'Do you represent clients in courts outside Delhi?',
    answer: 'While our primary daily practice is based in Delhi (Supreme Court of India, Delhi High Court, and all 7 District Courts), our partners frequently appear as arguing counsels before High Courts across North India (Punjab & Haryana High Court at Chandigarh, Allahabad High Court, Jaipur Bench), as well as national appellate tribunals like NCLAT, NCDRC, and APTEL.'
  },
  {
    category: 'Client Confidentiality',
    question: 'Are my consultations and case documents privileged and confidential?',
    answer: 'Absolutely. All communications, draft pleadings, and discussions are strictly protected under Section 126 of the Indian Evidence Act / Section 132 of the Bharatiya Sakshya Adhiniyam governing advocate-client privilege. We sign mutual Non-Disclosure Agreements for corporate clients upon request.'
  }
];

export const BAR_COUNCIL_DISCLAIMER = "As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising in any form or manner. By accessing this website (delhilawyers.com / DelhiLawyers), the user acknowledges and confirms that the user is seeking information relating to DelhiLawyers of their own accord and that there has been no form of solicitation, advertisement, or inducement by DelhiLawyers or its members. The content of this website is for informational purposes only and should not be construed as legal advice.";

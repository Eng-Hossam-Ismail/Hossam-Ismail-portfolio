import type { PortfolioConfig } from './types';

// ============================================================================
//  PORTFOLIO CONFIG  —  The single source of truth for personal info.
//
//  >>> EDIT THIS FILE to change your name, title, contact, bio, skills,
//      social links, quick stats, and which sections appear in the navbar.
//
//  Bilingual content uses { en: '...', ar: '...' } objects.
//  Toggle a section by setting `enabled: true/false` on its nav item.
// ============================================================================

export const portfolio: PortfolioConfig = {
  // ---- Identity ---------------------------------------------------------
  name: 'Hossam Ismail',
  title: {
    en: 'Civil Engineer | Structural Engineering',
    ar: 'مهندس مدني | هندسة إنشائية',
  },
  location: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },

  // ---- Contact ----------------------------------------------------------
  email: 'hossam.ismail.civil@gmail.com',
  phone: '+201551645514',
  whatsapp: '+201551645514', // used for wa.me link (digits only at runtime)
  linkedin: 'https://www.linkedin.com/in/hosam-ismail',

  // ---- Files (replace the files in /public/assets, keep the paths) ------
  cvPath: '/assets/cv/Hossam-Ismail-CV.pdf',
  profileImage: '/assets/profile/hossam-profile.webp',

  // ---- Hero -------------------------------------------------------------
  heroCoordinates: '30.04°N · 31.23°E',
  heroHeadline: {
    en: 'Building safer, smarter and more efficient structures through engineering, analysis and design.',
    ar: 'نبني هياكل أكثر أمانًا وذكاءً وكفاءة عبر الهندسة والتحليل والتصميم.',
  },
  heroSpecCard: {
    label: { en: 'Discipline', ar: 'التخصص' },
    value: { en: 'Structural', ar: 'إنشائي' },
  },
  navbarSubtitle: { en: 'Civil · Structural', ar: 'مهندس مدني' },

  // ---- About ------------------------------------------------------------
  about: {
    image: '/assets/about/structural-engineering.jpg',
    imageAlt: {
      en: 'Modern structural engineering framing and architectural steel',
      ar: 'هيكل إنشائي حديث وأعمال الصلب المعماري',
    },
    summary: {
      en: 'Civil Engineer with a primary focus on Structural Engineering, combining analytical rigor with practical exposure to structural modeling, design, and detailing. Current work centers on residential structural design projects, applying structural codes and engineering principles to deliver safe, constructible, and efficient solutions.\n\nDriven by a strong interest in Steel Structures—particularly structural steel design and connection detailing—with a commitment to sound engineering practice. Open to forward-looking engineering opportunities across structural design, technical office, and project engineering.',
      ar: 'مهندس مدني يركز على الهندسة الإنشائية، يجمع بين الدقة التحليلية والممارسة العملية في نمذجة وتصميم وتفصيل المنشآت. يتركز العمل الحالي على مشاريع التصميم الإنشائي للمباني السكنية، مع تطبيق الأكواد والمبادئ الهندسية لتقديم حلول آمنة وقابلة للتنفيذ وعالية الكفاءة.\n\nشغوف بالمنشآت المعدنية مع اهتمام خاص بالتصميم الإنشائي وتفاصيل وصلات الصلب، والالتزام بأعلى معايير الجودة الهندسية. منفتح على فرص وتحديات هندسية واعدة في مجالات التصميم الإنشائي، المكتب الفني، وهندسة المشاريع.',
    },
    focus: [
      { en: 'Structural Analysis & Modeling', ar: 'التحليل والنمذجة الإنشائية' },
      { en: 'Reinforced Concrete Design', ar: 'تصميم الخرسانة المسلحة' },
      { en: 'Steel Design & Detailing', ar: 'تصميم وتفصيل المنشآت المعدنية' },
      { en: 'Code Compliance', ar: 'التوافق مع الأكواد الهندسية' },
    ],
    careerDirection: {
      en: 'Seeking engineering roles in structural design, technical office, and site engineering — where structural integrity, code-conscious detailing, and reliable technical judgement are prioritized.',
      ar: 'أتطلع لفرص هندسية في التصميم الإنشائي، المكتب الفني، وهندسة الموقع — حيث تُعطى الأولوية للسلامة الإنشائية، التفاصيل المتوافقة مع الأكواد، والحكم الهندسي الموثوق.',
    },
    technicalMatrix: [
      {
        id: 'discipline',
        label: { en: 'Discipline', ar: 'التخصص الهندسي' },
        value: {
          en: 'Civil Engineering · Structural Engineering',
          ar: 'هندسة مدنية · هندسة إنشائية',
        },
      },
      {
        id: 'focus',
        label: { en: 'Core Focus', ar: 'مجالات التركيز' },
        value: {
          en: 'Structural Analysis & Design · Reinforced Concrete · Steel Design & Detailing',
          ar: 'التحليل والتصميم الإنشائي · الخرسانة المسلحة · تصميم وتفصيل المنشآت المعدنية',
        },
      },
      {
        id: 'toolset',
        label: { en: 'Current Toolset', ar: 'البرامج الهندسية' },
        value: {
          en: 'ETABS · SAP2000 · SAFE · AutoCAD',
          ar: 'ETABS · SAP2000 · SAFE · AutoCAD',
        },
      },
    ],
  },

  // ---- Technical Matrix (Domain competence summary) ---------------------
  technicalMatrix: [
    {
      id: 'modeling',
      label: { en: 'Structural Modeling', ar: 'النمذجة الإنشائية' },
      value: { en: '3D frame, shell & plate FE models', ar: 'نماذج ثلاثية الأبعاد للإطارات والبلاطات' },
    },
    {
      id: 'analysis',
      label: { en: 'Analysis Types', ar: 'أنواع التحليل' },
      value: { en: 'Linear static, P-Delta, modal', ar: 'تحليل استاتيكي خطي وتأثيرات P-Delta ومودال' },
    },
    {
      id: 'rc-design',
      label: { en: 'RC Design', ar: 'تصميم الخرسانة' },
      value: { en: 'Columns, beams, slabs, foundations', ar: 'أعمدة، كمرات، بلاطات، وأساسات' },
    },
    {
      id: 'steel',
      label: { en: 'Steel Design', ar: 'تصميم الستيل' },
      value: { en: 'Member sizing, connections, PEB', ar: 'قطاعات، وصلات إنشائية، ومبانٍ نمطية' },
    },
    {
      id: 'detailing',
      label: { en: 'Drafting & Detailing', ar: 'الرسم والتفاصيل' },
      value: { en: 'AutoCAD framing, schedules, ECP', ar: 'لوحات تنفيذية، جداول تسليح، والكود المصري' },
    },
    {
      id: 'codes',
      label: { en: 'Codes of Practice', ar: 'الأكواد المعتمدة' },
      value: { en: 'Egyptian Code of Practice (ECP)', ar: 'الكود المصري لتصميم وتنفيذ المنشآت' },
    },
  ],

  // ---- Quick Stats (Hero / Highlights) ----------------------------------
  quickStats: [
    {
      id: 'level',
      value: 'Senior',
      label: { en: 'Academic Level', ar: 'المستوى الأكاديمي' },
      hint: { en: 'Al-Azhar University', ar: 'جامعة الأزهر' },
    },
    {
      id: 'trainings',
      value: '3+',
      label: { en: 'Site & Factory Programs', ar: 'برامج تدريب ومعايشة' },
      hint: { en: 'Zamil Steel · High-Speed Rail · El Soadaa', ar: 'الزامل للحديد · القطار السريع · السعداء' },
    },
    {
      id: 'software',
      value: '6+',
      label: { en: 'Engineering Tools', ar: 'برامج وتطبيقات هندسية' },
      hint: { en: 'AutoCAD · ETABS · SAP2000 · SAFE · SP Column · CSI Column', ar: 'أوتوكاد · إيتابس · ساب · سيف وغيرها' },
    },
  ],

  // ---- Social links -----------------------------------------------------
  socialLinks: [
    { id: 'linkedin', label: { en: 'LinkedIn', ar: 'لينكد إن' }, href: 'https://www.linkedin.com/in/hosam-ismail', icon: 'linkedin' },
    { id: 'email', label: { en: 'Email', ar: 'البريد' }, href: 'mailto:hossam.ismail.civil@gmail.com', icon: 'email' },
    { id: 'whatsapp', label: { en: 'WhatsApp', ar: 'واتساب' }, href: 'https://wa.me/201551645514', icon: 'whatsapp' },
    { id: 'phone', label: { en: 'Phone', ar: 'الهاتف' }, href: 'tel:+201551645514', icon: 'phone' },
  ],

  // ---- Navigation --------------------------------------------------------
  nav: [
    { id: 'home', label: { en: 'Home', ar: 'الرئيسية' }, enabled: true },
    { id: 'about', label: { en: 'About', ar: 'نبذة' }, enabled: true },
    { id: 'skills', label: { en: 'Skills', ar: 'المهارات' }, enabled: true },
    { id: 'training', label: { en: 'Field Exposure', ar: 'المعايشة الميدانية' }, enabled: true },
    { id: 'projects', label: { en: 'Projects', ar: 'المشاريع' }, enabled: true },
    { id: 'education', label: { en: 'Education', ar: 'التعليم' }, enabled: true },
    { id: 'certifications', label: { en: 'Development', ar: 'التطوير المهني' }, enabled: true },
    { id: 'contact', label: { en: 'Contact', ar: 'تواصل' }, enabled: true },
  ],

  // ---- Skills -----------------------------------------------------------
  skills: [
    {
      id: 'software',
      title: { en: 'Engineering Software', ar: 'البرامج الهندسية' },
      icon: 'software',
      skills: [
        { en: 'AutoCAD', ar: 'AutoCAD' },
        { en: 'ETABS', ar: 'ETABS' },
        { en: 'SAP2000', ar: 'SAP2000' },
        { en: 'SAFE', ar: 'SAFE' },
        { en: 'CSI Column', ar: 'CSI Column' },
        { en: 'SP Column', ar: 'SP Column' },
      ],
    },
    {
      id: 'structural',
      title: { en: 'Structural Engineering', ar: 'الهندسة الإنشائية' },
      icon: 'structure',
      skills: [
        { en: 'Structural Analysis', ar: 'التحليل الإنشائي' },
        { en: 'Structural Modeling', ar: 'النمذجة الإنشائية' },
        { en: 'Reinforced Concrete Design', ar: 'تصميم الخرسانة المسلحة' },
        { en: 'Steel Structures', ar: 'المنشآت المعدنية' },
      ],
    },
    {
      id: 'detailing-codes',
      title: { en: 'Detailing & Codes', ar: 'التفاصيل والأكواد' },
      icon: 'detailing',
      skills: [
        { en: 'Structural Detailing', ar: 'التفاصيل الإنشائية' },
        { en: 'Reinforced Concrete Member Detailing', ar: 'تفاصيل العناصر الخرسانية المسلحة' },
        { en: 'Structural Framing Drawings', ar: 'لوحات المحاور والأعمدة والتسليح' },
        { en: 'General Arrangement / Layout Plans', ar: 'المساقط واللوحات الإنشائية العامة' },
        { en: 'Egyptian Code of Practice (ECP)', ar: 'الكود المصري لتصميم وتنفيذ المنشآت (ECP)' },
      ],
    },
  ],

  // ---- Experience (empty by design — add real roles here) ---------------
  experience: [],

  // ---- Training & Field Exposure ----------------------------------------
  training: [
    {
      id: 'zamil',
      title: { en: 'Zamil Steel Industrial Training', ar: 'التدريب الصناعي في شركة زامل للحديد' },
      organization: 'Zamil Steel',
      category: {
        en: 'Factory & Manufacturing Exposure',
        ar: 'معايشة مصانع وتصنيع إنشائي',
      },
      categoryTag: { en: 'FACTORY EXPOSURE', ar: 'معايشة مصانع' },
      description: {
        en: 'Practical exposure to pre-engineered and structural steel manufacturing, fabrication workflows, and connection detailing logic.',
        ar: 'معايشة عملية لخطوط تصنيع المنشآت المعدنية والمنشآت سابقة الهندسة، ومراحل التصنيع ومنطق تفاصيل الوصلات الإنشائية.',
      },
      link: 'https://www.linkedin.com/posts/hosam-ismail_zamilsteel-civilengineering-structuralengineering-activity-7491580412151017472-8dk1',
      linkLabel: { en: 'View LinkedIn Post', ar: 'عرض المنشور على LinkedIn' },
    },
    {
      id: 'hst',
      title: { en: 'High-Speed Rail Infrastructure Site Exposure', ar: 'المعايشة الميدانية لمشروع القطار الكهربائي السريع' },
      organization: 'High-Speed Electric Train Project',
      category: {
        en: 'Civil Infrastructure Site Training',
        ar: 'تدريب موقع — مشروعات بنية تحتية',
      },
      categoryTag: { en: 'SITE EXPOSURE', ar: 'معايشة موقع' },
      description: {
        en: 'Field training on a major high-speed rail infrastructure corridor, observing civil construction activities, substructure works, and site operations.',
        ar: 'تدريب ميداني بمشروع مسار القطار الكهربائي السريع، والاطلاع على أعمال التشييد المدني والأساسات والعمليات التنفيذية في الموقع.',
      },
      reportUrl: '/assets/training/el-soadaa-training-report.pdf',
    },
    {
      id: 'alsaada',
      title: { en: 'El Soadaa Group Building Construction Training', ar: 'التدريب الميداني في السعداء جروب' },
      organization: 'El Soadaa Group',
      category: {
        en: 'Building Construction Site Training',
        ar: 'تدريب موقع — تشييد مباني',
      },
      categoryTag: { en: 'CONSTRUCTION PRACTICE', ar: 'ممارسة تنفيذية' },
      description: {
        en: 'Practical site engineering training covering reinforced concrete building execution, site verification, and construction workflows.',
        ar: 'تدريب عملي في هندسة الموقع يغطي تنفيذ المباني الخرسانية المسلحة، والمطابقة الميدانية، ومراحل التشييد الإنشائي.',
      },
      reportUrl: '/assets/training/el-soadaa-training-report.pdf',
    },
  ],

  // ---- Education --------------------------------------------------------
  education: [
    {
      id: 'azhar',
      institution: { en: 'Al-Azhar University', ar: 'جامعة الأزهر' },
      degree: { en: 'B.Sc. Civil Engineering', ar: 'بكالوريوس هندسة مدنية' },
      field: { en: 'Civil Engineering', ar: 'الهندسة المدنية' },
      specialization: { en: 'Structural Engineering', ar: 'الهندسة الإنشائية' },
      location: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
      endYear: '2027',
      description: {
        en: 'Faculty of Civil Engineering, specializing in Structural Engineering.',
        ar: 'كلية الهندسة المدنية، تخصص الهندسة الإنشائية.',
      },
    },
  ],

  // ---- Certifications & Development -------------------------------------
  certifications: [
    {
      id: 'forward',
      name: { en: 'McKinsey.org Forward Program', ar: 'برنامج فوروارد من McKinsey.org' },
      organization: 'McKinsey.org',
      category: 'development',
      categoryLabel: { en: 'Professional Development', ar: 'تطوير مهني' },
      description: {
        en: 'Professional development program focused on practical problem-solving, digital toolsets, and communication skills.',
        ar: 'برنامج تطوير مهني يركز على مهارات حل المشكلات المعقدة والأدوات الرقمية والقيادة والتواصل.',
      },
      link: 'https://www.credly.com/badges/7462aefe-af9c-4b6c-9907-da7a8770f199/public_url',
    },
    {
      id: 'azex',
      name: { en: 'AZEX Engineering Exhibition', ar: 'معرض AZEX الهندسي' },
      organization: 'AZEX',
      category: 'activity',
      categoryLabel: { en: 'Engineering Activity / Exhibition', ar: 'نشاط هندسي / معرض' },
      description: {
        en: 'Participation in an engineering exhibition showcasing civil engineering projects and technical student initiatives.',
        ar: 'المشاركة في معرض هندسي لعرض المشاريع الهندسية والمبادرات الطلابية في الهندسة المدنية.',
      },
    },
  ],

  // ---- Projects (intentionally empty — see src/data/projects.ts) -------
  projects: [],

  // ---- SEO --------------------------------------------------------------
  seo: {
    title: 'Hossam Ismail | Civil Engineer | Structural Engineering',
    description:
      'Civil & Structural Engineer specializing in structural analysis, steel design and detailing. Cairo, Egypt. Seeking full-time engineering opportunities.',
    canonicalUrl: 'https://hossam-ismail.example.com/',
    ogImage: '/assets/profile/hossam-profile.webp',
  },
};
// NOTE: projects are imported in projects.ts and merged in portfolio.ts via App.

import type { ProjectEntry } from './types';

// ============================================================================
//  PROJECTS  —  Real structural engineering projects and drawing sets.
// ============================================================================

export const projects: ProjectEntry[] = [
  {
    id: 'residential-villa',
    title: {
      en: 'Residential Villa — Structural Drawings & Detailing',
      ar: 'مشروع فيلا سكنية — إعداد اللوحات والتفاصيل الإنشائية',
    },
    shortDescription: {
      en: 'Complete structural drawing set for a residential villa, prepared as part of practical structural drafting and detailing training.',
      ar: 'مجموعة لوحات إنشائية متكاملة لفيلا سكنية، تم إعدادها ضمن التدريب العملي على إعداد وتفصيل اللوحات الإنشائية.',
    },
    detailedDescription: {
      en: 'Preparation of a comprehensive structural drawing set for a residential villa project during structural drafting and design training. The scope focused on producing complete, coordinated execution drawings in AutoCAD, including axis and column layouts, foundation plans, floor slab structural framing, and reinforcement detailing following the Egyptian Code of Practice (ECP).',
      ar: 'إعداد مجموعة لوحات وتفاصيل إنشائية متكاملة لمشروع فيلا سكنية ضمن التدريب العملي على الرسم والتفصيل الإنشائي. ركز نطاق العمل على إخراج لوحات تنفيذية منسقة ببرنامج AutoCAD، شملت لوحات المحاور والأعمدة، وتوزيع الأساسات والقواعد، وتفاصيل الأسقف والتسليح وفق اشتراطات الكود المصري.',
    },
    type: {
      en: 'Structural Drafting & Detailing',
      ar: 'إعداد وتفصيل اللوحات الإنشائية',
    },
    category: 'structural-drafting',
    status: {
      en: 'Completed (Training / Coursework)',
      ar: 'مكتمل (تدريب عملي)',
    },
    mentor: {
      en: 'Eng. Eslam Ahmed',
      ar: 'م. إسلام أحمد',
    },
    software: ['AutoCAD'],
    codesAndStandards: ['Egyptian Code of Practice (ECP)'],
    disciplines: [
      { en: 'Structural Detailing', ar: 'التفاصيل الإنشائية' },
      { en: 'Execution Drawings', ar: 'اللوحات التنفيذية' },
    ],
    drawingSheets: [
      {
        sheetNumber: '01',
        title: { en: 'Column & Axis Layout', ar: 'لوحة المحاور والأعمدة' },
        imageUrl: '/assets/projects/residential-villa/01-axes-columns.jpg',
      },
      {
        sheetNumber: '02',
        title: { en: 'Foundations Layout', ar: 'لوحة القواعد والأساسات' },
        imageUrl: '/assets/projects/residential-villa/02-foundations.jpg',
      },
      {
        sheetNumber: '03',
        title: { en: 'Basement Slab Structural Drawing', ar: 'لوحة سقف البدروم' },
        imageUrl: '/assets/projects/residential-villa/03-basement-slab.jpg',
      },
      {
        sheetNumber: '04',
        title: { en: 'Ground Floor Slab Structural Drawing', ar: 'لوحة سقف الأرضي' },
        imageUrl: '/assets/projects/residential-villa/04-ground-floor-slab.jpg',
      },
      {
        sheetNumber: '05',
        title: { en: 'Typical Floor Slab Structural Drawing', ar: 'لوحة سقف المتكرر' },
        imageUrl: '/assets/projects/residential-villa/05-typical-floor-slab.jpg',
      },
      {
        sheetNumber: '06',
        title: { en: 'Roof Rooms Structural Drawing', ar: 'لوحة سقف غرف السطح' },
        imageUrl: '/assets/projects/residential-villa/06-roof-rooms.jpg',
      },
    ],
    images: [
      '/assets/projects/residential-villa/cover.webp',
      '/assets/projects/residential-villa/01-axes-columns.jpg',
      '/assets/projects/residential-villa/02-foundations.jpg',
      '/assets/projects/residential-villa/03-basement-slab.jpg',
      '/assets/projects/residential-villa/04-ground-floor-slab.jpg',
      '/assets/projects/residential-villa/05-typical-floor-slab.jpg',
      '/assets/projects/residential-villa/06-roof-rooms.jpg',
    ],
    documents: [
      {
        title: { en: 'View Complete Drawing Set', ar: 'عرض مجموعة الرسومات كاملة' },
        fileUrl: '/assets/projects/residential-villa/complete-drawing-set.pdf',
        type: 'drawing',
      },
    ],
    links: [
      {
        label: { en: 'View LinkedIn Post', ar: 'عرض المنشور على LinkedIn' },
        href: 'https://www.linkedin.com/posts/hosam-ismail_%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D9%81%D9%8A%D9%84%D8%A7-%D8%B3%D9%83%D9%86%D9%8A%D8%A9-activity-7373959003590168576-gRLM',
      },
    ],
    featured: true,
  },
];

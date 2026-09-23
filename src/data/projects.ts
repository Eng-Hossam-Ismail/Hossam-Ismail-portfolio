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
  {
    id: 'two-hinged-frames',
    title: {
      en: '2-Hinged Frames — Structural Design & Drafting',
      ar: 'مشروع 2-Hinged Frames — التصميم والرسم الإنشائي',
    },
    shortDescription: {
      en: 'Structural design and drafting of a 2-Hinged Frames structural system covering an area of 1,080 m² (18 × 60 m), completed as part of the ENSKIPA Workshop mentored by Eng. Eslam Ahmed.',
      ar: 'مشروع التصميم والرسم الإنشائي لنظام 2-Hinged Frames بمساحة 1080 م² (18 × 60 م)، تم إعداده ضمن ورشة عمل ENSKIPA بإشراف م. إسلام أحمد.',
    },
    detailedDescription: {
      en: 'Structural design and drafting project for a 2-Hinged Frames system covering an area of 1,080 m² with dimensions of 18 × 60 m, prepared during the ENSKIPA Workshop under the supervision of Eng. Eslam Ahmed. The project deliverables include the Solid Slab Plan, Column & Axis Layout, Foundation Plan, and structural Sections.',
      ar: 'مشروع التصميم والرسم الإنشائي لمنشأ بنظام 2-Hinged Frames بمساحة 1080 م² وأبعاد 18 × 60 م، تم إنجازه ضمن ورشة عمل ENSKIPA بإشراف وتوجيه م. إسلام أحمد. تشمل مخرجات المشروع لوحة سقف البلاطة المصمتة (Solid Slab Plan)، لوحة المحاور والأعمدة، لوحة القواعد والأساسات، ولوحة القطاعات الإنشائية.',
    },
    type: {
      en: 'Structural Design & Drafting',
      ar: 'التصميم والرسم الإنشائي',
    },
    category: 'structural-design',
    status: {
      en: 'Completed (ENSKIPA Workshop)',
      ar: 'مكتمل (ورشة عمل ENSKIPA)',
    },
    mentor: {
      en: 'Eng. Eslam Ahmed',
      ar: 'م. إسلام أحمد',
    },
    drawingSheets: [
      {
        sheetNumber: '01',
        title: { en: 'Solid Slab Plan', ar: 'لوحة سقف البلاطة المصمتة' },
        imageUrl: '/assets/projects/two-hinged-frames/05-solid-slab-plan.jpg',
      },
      {
        sheetNumber: '02',
        title: { en: 'Column & Axis Layout', ar: 'لوحة المحاور والأعمدة' },
        imageUrl: '/assets/projects/two-hinged-frames/06-column-axis-layout.jpg',
      },
      {
        sheetNumber: '03',
        title: { en: 'Foundation Plan', ar: 'لوحة القواعد والأساسات' },
        imageUrl: '/assets/projects/two-hinged-frames/07-foundation-plan.jpg',
      },
      {
        sheetNumber: '04',
        title: { en: 'Sections', ar: 'لوحة القطاعات' },
        imageUrl: '/assets/projects/two-hinged-frames/08-sections.jpg',
      },
      {
        sheetNumber: '3D',
        title: { en: 'Second 3D View', ar: 'منظور ثلاثي الأبعاد ثانٍ' },
        imageUrl: '/assets/projects/two-hinged-frames/04-3d-view-02.jpg',
      },
      {
        sheetNumber: 'Doc',
        title: { en: 'ENSKIPA Workshop Certificate', ar: 'شهادة ورشة عمل ENSKIPA' },
        imageUrl: '/assets/projects/two-hinged-frames/certificate-enskipa.jpg',
      },
    ],
    images: [
      '/assets/projects/two-hinged-frames/03-3d-view-01.jpg',
      '/assets/projects/two-hinged-frames/04-3d-view-02.jpg',
      '/assets/projects/two-hinged-frames/05-solid-slab-plan.jpg',
      '/assets/projects/two-hinged-frames/06-column-axis-layout.jpg',
      '/assets/projects/two-hinged-frames/07-foundation-plan.jpg',
      '/assets/projects/two-hinged-frames/08-sections.jpg',
      '/assets/projects/two-hinged-frames/certificate-enskipa.jpg',
    ],
    documents: [
      {
        title: { en: 'Complete Drawing Set', ar: 'مجموعة اللوحات الكاملة' },
        fileUrl: '/assets/projects/two-hinged-frames/complete-drawing-set.pdf',
        type: 'drawing',
      },
      {
        title: { en: 'ENSKIPA Workshop Certificate', ar: 'شهادة ورشة عمل ENSKIPA' },
        fileUrl: '/assets/projects/two-hinged-frames/certificate-enskipa.jpg',
        type: 'other',
      },
    ],
  },
];

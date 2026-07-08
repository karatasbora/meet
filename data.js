// --- 1. SINGLE SOURCE OF TRUTH (Local Definitions) ---
/**
 * @typedef {Object} LocalizedString
 * @property {string} tr
 * @property {string} en
 */
/** @type {{ baseUrl: string, image: string, email: string, linkedin: string, linkedinLabel: string, location: LocalizedString, keywords: LocalizedString, verificationCodes: { google: string } }} */
const meta = {
    baseUrl: "https://karatasbora.github.io/me",
    image: "profil.webp",
    email: "speak@withbora.io",
    linkedin: "https://www.linkedin.com/in/karatasbora",
    linkedinLabel: "linkedin.com/in/karatasbora",
    location: { tr: "Eskişehir, Türkiye", en: "Eskisehir, Turkey" },
    verificationCodes: {
        google: "QzyLRgFCHH93peNx08rdCue9fZDR-5OYVc818U5goIU"
    },
    keywords: {
        tr: "Bora Karataş, Eğitim Teknoloğu, Öğretim Tasarımı, ELT, Yapay Zeka, Eğitimde YZ",
        en: "Bora Karataş, Instructional Technologist, Instructional Design, ELT, AI in Education, EdTech"
    }
};

/** @type {{ "@type": string, name: string, jobTitle: LocalizedString, description: LocalizedString, hasOccupation: Array<any>, hasCredential: Array<any>, alumniOf: Array<any>, knowsLanguage: Array<any>, knowsAbout: Array<any> }} */
const person = {
    "@type": "Person",
    name: "Bora Karataş",
    jobTitle: {
        tr: "Yenilikçi Eğitim Uzmanı & Öğretim Teknoloğu | YZ Destekli Öğretim Tasarımı | ELT · EdTech · Erişilebilir & İnsan Merkezli Eğitim",
        en: "Innovative Education Specialist & Instructional Technologist | AI-Supported Instructional Design | ELT · EdTech · Accessible & Human-Centered Education"
    },
    description: {
        tr: "Pedagojik ilkeleri, jenerik çözümlerin ötesine geçerek verimlilikle bütünleştiren stratejik bir eğitimciyim. İnsan merkezli tasarım felsefesiyle, eleştirel düşünmeyi destekleyen erişilebilir dijital ekosistemler ve özelleştirilmiş eğitim araçları geliştirme konusunda uzmanım. Amacım, kurumsal hafızayı ölçülebilir yetkinliğe dönüştüren, sürtünmesiz ve yüksek güvenlikli öğrenme katmanları kurgulamaktır.",
        en: "I am a forward-thinking educator dedicated to integrating pedagogical principles with efficiency, moving beyond generic solutions. Expert in developing accessible digital ecosystems and educational tools guided by a human-centered design philosophy. My objective is to build frictionless, high-security learning layers that transform institutional memory into measurable competence."
    },

    hasOccupation: [
        {
            "@type": "EmployeeRole",
            id: "job-editor",
            jobTitle: { tr: "İçerik Editörü", en: "Content Editor" },
            startDate: { tr: "Aralık 2022 - Temmuz 2026", en: "Dec 2022 - Jul 2026" },
            workMode: {
                tr: "Hibrit · Yarı zamanlı", en: "Hybrid · Part-time"
            },
            description: {
                tr: "Üretken yapay zeka protokollerini editoryal süreçlere entegre ederek üretim süresini azaltırken, akademik standartlarda tutarlılığı maksimize ettim. Statik öğretim materyallerini, Evrensel Tasarım Standartları (UDL) ile uyumlu, dinamik ve kapsayıcı dijital kaynaklara dönüştürdüm. Disiplinlerarası ekiplerle, geniş öğrenci kitleleri için yüksek kaliteli ve ölçeklenebilir öğrenme kaynakları sundum.",
                en: "Integrated generative AI protocols into editorial processes, significantly reducing production time while maximizing consistency across academic platforms. Transformed static instructional materials into dynamic, inclusive digital resources compliant with Universal Design for Learning (UDL) standards. Partnered with interdisciplinary teams to deliver high-quality learning resources for a diverse and large-scale student population."
            },
            worksFor: {
                "@type": "Organization",
                name: { tr: "Anadolu Üniversitesi", en: "Anadolu University" },
                department: { tr: "Öğrenme Teknolojileri Ar-Ge Birimi", en: "Learning Technologies R&D Unit" },
                address: { tr: "Eskişehir, Türkiye", en: "Eskisehir, Turkey" }
            }
        },
        {
            "@type": "EmployeeRole",
            id: "job-teacher",
            jobTitle: { tr: "İngilizce Öğretmeni", en: "English Teacher" },
            startDate: { tr: "Eylül 2025 - Haziran 2026", en: "Sep 2025 - Jun 2026" },
            workMode: { tr: "Yerinde · Staj", en: "On-site · Internship" },
            description: {
                tr: "Ezbere dayalı yöntemleri, öğrenen merkezli ve oyunlaştırılmış stratejilerle değiştirerek sınıf motivasyonunda ölçülebilir artış sağladım. Müfredat odağını; eleştirel düşünme, iş birliği ve gerçek zamanlı senaryo uygulamalarına kaydırarak yetkinlik bazlı bir öğrenme ortamı oluşturdum.",
                en: "Replaced rote-learning methods with learner-centered, gamified strategies, resulting in a measurable increase in classroom motivation and engagement. Shifted curriculum focus toward critical thinking and collaboration, creating a learning environment where students applied skills in real-time scenarios."
            },
            worksFor: {
                "@type": "Organization",
                name: { tr: "T.C. Millî Eğitim Bakanlığı", en: "Ministry of National Education" },
                department: { tr: "Gülay Kanatlı Ortaokulu", en: "Gülay Kanatlı Secondary School" },
                address: { tr: "Eskişehir, Türkiye", en: "Eskisehir, Turkey" }
            }
        }
    ],


    alumniOf: [
        {
            "@type": "EducationalOrganization",
            id: "edu-elt",
            name: { tr: "Anadolu Üniversitesi", en: "Anadolu University" },
            address: { tr: "Eskişehir, Türkiye", en: "Eskişehir, Turkey" },
            studyMode: { tr: "Örgün Eğitim", en: "Formal Education" },
            description: {
                tr: "Modern pedagojik stratejiler geliştirmek için geleneksel yöntemleri, güncel eğitim teknolojileri ile harmanlayarak öğrenen merkezli ve veri odaklı öğretim materyalleri tasarlamaya odaklandım.",
                en: "Focused on synthesizing traditional frameworks with current educational technologies to develop modern pedagogical strategies to design learner-centered, data-driven instructional materials."
            },
            award: { tr: "İngilizce Öğretmenliği Lisans Derecesi", en: "B.A. in English Language Teaching" },
            startDate: { tr: "Eylül 2022 - Haziran 2026", en: "Sep 2022 - Jun 2026" }
        },
        {
            "@type": "EducationalOrganization",
            id: "edu-erasmus",
            name: { tr: "Coimbra Üniversitesi", en: "University of Coimbra" },
            address: { tr: "Coimbra, Portekiz", en: "Coimbra, Portugal" },
            studyMode: { en: "Erasmus+" },
            description: {
                tr: "Uluslararası eğitim sistemlerini ve kurumsal iletişim modellerini karşılaştırmalı olarak analiz ettim. Küresel iş ortamlarında dil bariyerlerinin operasyonel verimlilik üzerindeki etkilerini gözlemleyerek kültürlerarası iletişim stratejileri geliştirdim.",
                en: "Conducted comparative analyses of international education systems and corporate communication models. Observed the effects of language barriers on operational efficiency in global business environments and developed strategies for cross-cultural communication."
            },
            award: { tr: "Anglo-Amerikan Çalışmaları", en: "Anglo-American Studies" },
            startDate: { tr: "Eylül 2024 - Şubat 2025", en: "Sep 2024 - Feb 2025" }
        },
        {
            "@type": "EducationalOrganization",
            id: "edu-econ",
            name: { tr: "Anadolu Üniversitesi", en: "Anadolu University" },
            studyMode: { tr: "Uzaktan Eğitim", en: "Remote Learning" },
            description: {
                tr: "Eğitim politikalarını ve kurumsal gelişim süreçlerini analiz etmek için sistem düşüncesi ve veri okuryazarlığı yetkinliklerimi kullanıyorum. Eğitim yatırımlarının geri dönüşünü ve operasyonel maliyet optimizasyonunu iktisadi perspektifle değerlendiriyorum.",
                en: "Applying systems thinking and data literacy to analyze educational policies and corporate development. Leveraging an economic perspective to evaluate the return on investment of training programs and optimize operational cost structures in educational workflows."
            },
            award: { tr: "İktisat (İngilizce) Lisans Derecesi", en: "B.S. in Economics (English)" },
            startDate: { tr: "Eylül 2022 - Halen", en: "Sep 2022 - Present" }
        },
        {
            "@type": "EducationalOrganization",
            id: "edu-cert-front",
            name: { tr: "Meta, Inc.", en: "Meta, Inc." },
            address: { tr: "Coursera", en: "Coursera" },
            studyMode: { tr: "Sertifika Programı", en: "Sertifika Program" },
            description: {
                tr: "Kullanıcı deneyimini optimize eden yüksek performanslı arayüzlerin geliştirilmesi, güvenli istemci tarafı mantığının kurgulanması ve modern ön uç iş akışlarının yönetimi üzerine eğitim alıyorum.",
                en: "I am studying for developing responsive and high-performance user interfaces, implementing secure client-side logic, and optimizing front-end workflows for frictionless user experiences."
            },
            award: { tr: "Meta Front-End Geliştirici Profesyonel Sertifikası", en: "Meta Front-End Developer Professional Certificate" },
            startDate: { tr: "Şubat 2026 - Halen", en: "Şubat 2026 - Present" }
        },
    ],

    knowsLanguage: [
        {
            "@type": "Language",
            name: { tr: "TÜRKÇE", en: "TURKISH" },
            proficiencyLevel: { tr: "Ana Dili / Editoryal Hakimiyet", en: "Native / Editorial Proficiency" }
        },
        {
            "@type": "Language",
            name: { tr: "İNGİLİZCE", en: "ENGLISH" },
            proficiencyLevel: { tr: "Tam Profesyonel / C2 (Akademik)", en: "Full Professional / C2 (Academic)" }
        },
        {
            "@type": "Language",
            name: { tr: "PORTEKİZCE", en: "PORTUGUESE" },
            proficiencyLevel: { tr: "Temel Kültürel Aşinalık", en: "Basic Cultural Familiarity" }
        }
    ],

    knowsAbout: [
        {
            category: { tr: "Teknoloji", en: "Technology" },
            items: [
                { name: { tr: "Öğrenme ve Gelişim için Üretken YZ", en: "Generative AI for Learning and Development" }, targets: ["job-editor"] },
                { name: { tr: "Web Geliştirme", en: "Web Development" }, targets: ["edu-cert-front"] },
                { name: { tr: "Öğrenme Yönetim Sistemleri", en: "Learning Management Systems" }, targets: ["job-editor"] },
                { name: { tr: "İçerik Yönetim Sistemleri", en: "Content Management Systems" }, targets: ["job-editor"] },
                { name: { tr: "Dijital Dönüşüm", en: "Digital Transformation" }, targets: ["job-editor"] }
            ]
        },
        {
            category: { tr: "Pedagoji & Tasarım", en: "Pedagogy & Design" },
            items: [
                { name: { tr: "Öğretim Tasarımı", en: "Instructional Design" }, targets: ["job-teacher", "job-editor", "edu-elt"] },
                { name: { tr: "Pedagoji", en: "Pedagogy" }, targets: ["edu-elt"] },
                { name: { tr: "Yabancı Dil olarak İngilizce Öğretimi", en: "Teaching English as a Foreign Language" }, targets: ["job-teacher"] },
                { name: { tr: "Evrensel Tasarım", en: "Universal Design" }, targets: ["job-editor"] },
                { name: { tr: "Erişilebilirlik", en: "Accessibility" }, targets: ["job-editor"] },
                { name: { tr: "EdTech Entegrasyonu", en: "EdTech Integration" }, targets: ["edu-elt"] },
                { name: { tr: "Program Geliştirme", en: "Curriculum Development" }, targets: ["job-teacher", "edu-elt"] },
                { name: { tr: "Oyunlaştırma", en: "Gamification" }, targets: ["job-teacher"] },
                { name: { tr: "21. Yüzyıl Yetkinlikleri", en: "21st Century Skills" }, targets: ["job-teacher"] }
            ]
        },
        {
            category: { tr: "Analiz & Strateji", en: "Analysis & Strategy" },
            items: [
                { name: { tr: "Sistem Düşüncesi", en: "Systems Thinking" }, targets: ["edu-econ"] },
                { name: { tr: "Veri Okuryazarlığı", en: "Data Literacy" }, targets: ["edu-econ"] }
            ],
        },
        {
            category: { tr: "Kişilerarası Beceriler", en: "Interpersonal Skills" },
            items: [
                { name: { tr: "Kültürlerarası İletişim", en: "Intercultural Communication" }, targets: ["edu-erasmus"] },
                { name: { tr: "Küreselleşme", en: "Globalization" }, targets: ["edu-erasmus"] },
            ]
        }
    ]
};

// --- 2. EXPORT OBJECT & GRAPH CONSTRUCTION ---
const resumeData = {
    // UI Config
    structure: [
        { type: 'text', titleKey: 'about', dataKey: 'person.description' },
        { type: 'list', titleKey: 'experience', dataKey: 'person.hasOccupation' },
        //{ type: 'list', titleKey: 'projects', dataKey: 'person.hasCredential' },
        { type: 'list', titleKey: 'education', dataKey: 'person.alumniOf' },
        { type: 'grid', titleKey: 'languages', dataKey: 'person.knowsLanguage' },
        { type: 'tags', titleKey: 'skills', dataKey: 'person.knowsAbout' },
		{ type: 'list', titleKey: 'references', dataKey: 'person.references'}
    ],
    ui: {
        about: { tr: "Hakkında", en: "About" },
        experience: { tr: "Deneyim", en: "Experience" },
        //projects: { tr: "Projeler", en: "Projects" },
        education: { tr: "Eğitim", en: "Education" },
        skills: { tr: "Yetkinlikler Özeti", en: "Skills Summary" },
        languages: { tr: "Diller", en: "Languages" },
		references: { tr: "Referans", en: "Reference"},
        print: { tr: "PDF", en: "PDF" },
        connections: { tr: "Bağlantılar:", en: "Connections:" },
        viewCategory: { tr: "Kategoriyi Görüntüle", en: "View Category" },
        unknownRole: { tr: "Bilinmeyen Rol", en: "Unknown Role" },
        copied: { tr: "Kopyalandı!", en: "Copied!" },
        showDetails: { tr: "Detayları Göster", en: "Show Details" },

        documentTitle: {
            tr: "Bora Karataş - Özgeçmiş",
            en: "Bora Karataş - Resume"
        },
        seoDesc: {
            tr: "Yenilikçi Eğitim Uzmanı & Öğretim Teknoloğu | YZ Destekli Öğretim Tasarımı | ELT · EdTech · Erişilebilir & İnsan Merkezli Eğitim",
            en: "Innovative Education Specialist & Instructional Technologist | AI-Supported Instructional Design | ELT · EdTech · Accessible & Human-Centered Education"
        },
        jobTitleShort: {
            tr: "Yenilikçi Eğitim Uzmanı & Öğretim Teknoloğu",
            en: "Innovative Education Specialist & Instructional Technologist"
        }
    },

    meta: meta,
    person: person,

    jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "name": person.name,
                "url": meta.baseUrl + "/"
            },
            {
                "@type": "ProfilePage",
                "name": "Bora Karataş - Resume", // Strict string (EN)
                "mainEntity": {
                    "@type": "Person",
                    "name": person.name,
                    "jobTitle": person.jobTitle.en, // Pick EN for strict valid Text
                    "description": person.description.en, // Pick EN
                    "image": `${meta.baseUrl}/${meta.image}`,
                    "url": meta.baseUrl + "/",
                    "sameAs": [
                        meta.linkedin,
                        `mailto:${meta.email}`
                    ],

                    // --- SKILLS (ItemList) ---
                    "knowsAbout": person.knowsAbout.map(cat => ({
                        "@type": "ItemList",
                        "name": cat.category.en, // Pick EN
                        "itemListElement": cat.items.map(i => i.name.en || i.name) // Pick EN
                    })),

                    // --- EXPERIENCE (Strict) ---
                    // Using 'worksFor' to list organizations.
                    "worksFor": person.hasOccupation.map(job => {
                        return {
                            "@type": "Organization",
                            "name": job.worksFor.name.en || job.worksFor.name
                        };
                    }),

                    // --- EDUCATION ---
                    "alumniOf": person.alumniOf.map(edu => {
                        return {
                            "@type": "EducationalOrganization",
                            "name": edu.name.en || edu.name
                        };
                    })

                    // --- PROJECTS (CreativeWork) ---
                    //"hasPart": person.hasCredential.map(proj => ({
                        //"@type": "CreativeWork",
                        //"name": proj.name.en || proj.name, // CAUTION: Verify if project name is localized
                        //"description": proj.description ? (proj.description.en || proj.description) : undefined,
                        //"url": proj.links ? proj.links[0].url : proj.demoUrl,
                        //"creator": {
                            //"@type": "Person",
                            //"name": person.name
                        //}
                    //}))
                }
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = resumeData;
} else if (typeof window !== 'undefined') {
    window.resumeData = resumeData;
}

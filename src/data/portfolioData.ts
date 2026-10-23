// ============================================================================
// DATA PORTOFOLIO 3D MODERN — BIAMTIERO AMIRAL KALMAN
// Mudah diedit di satu file ini. Setiap bagian terhubung langsung dengan objek 3D.
// ============================================================================

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  accentHex: string;
  badgeClass: string;
  description: string;
  items: { name: string; role: string; exp: string }[];
}

export interface ProjectShowcase {
  id: string;
  code: string;
  title: string;
  category: string;
  year: string;
  accentHex: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  demoUrl: string;
  repoUrl: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Biamtiero Amiral Kalman",
    shortName: "Biamtiero",
    role: "Full-Stack Web Developer",
    status: "Available for Full-Time & Freelance Projects",
    location: "Indonesia (UTC+7)",
    headline: "Membangun Aplikasi Web Modern & Pengalaman Digital Interaktif.",
    bio: "Saya adalah Full-Stack Developer yang menggabungkan ketelitian arsitektur backend dengan antarmuka frontend yang bersih, cepat, dan interaktif. Saya senang memecahkan masalah kompleks menjadi produk digital yang mudah digunakan.",
    traits: [
      "Teliti & Terstruktur",
      "Problem Solver",
      "Clean Architecture",
      "Interactive UI/3D",
    ],
    stats: [
      { label: "Pengalaman", value: "3+ Tahun" },
      { label: "Proyek Selesai", value: "15+ Produk" },
      { label: "Spesialisasi", value: "Full-Stack & 3D Web" },
    ],
    email: "biamtieroamiral@gmail.com",
    github: "https://github.com/biamtiero",
    linkedin: "https://www.linkedin.com/in/biam-tiero-a43113334/",
    instagram: "https://instagram.com/btiero_",
  },

  sections: [
    {
      index: 0,
      id: "beranda",
      label: "01. Beranda",
      objectTitle: "3D Pro Developer Workstation",
      objectHint:
        "Geser untuk memutar laptop 3D · Klik objek untuk menyalakan kompilasi & lanjut ke Skill",
      nextButtonLabel: "Compile & Kirim ke Skill ↓",
    },
    {
      index: 1,
      id: "skill",
      label: "02. Keahlian",
      objectTitle: "3D Orbital Tech Core & Gyroscope",
      objectHint:
        "Klik kategori skill untuk mengubah frekuensi inti 3D · Klik objek untuk merakit ke Proyek",
      nextButtonLabel: "Rakit Skill ke Proyek ↓",
    },
    {
      index: 2,
      id: "proyek",
      label: "03. Proyek",
      objectTitle: "3D Ultrawide Project Showcase Display",
      objectHint:
        "Pilih kartu proyek untuk menampilkan pratinjau langsung di layar monitor 3D",
      nextButtonLabel: "Lanjut ke Pengalaman & Kontak ↓",
    },
    {
      index: 3,
      id: "kontak",
      label: "04. Pengalaman & Kontak",
      objectTitle: "3D Signal Beacon & Chronology Core",
      objectHint:
        "Ketik pesan di form kontak untuk melihat kristal sinyal 3D bereaksi secara real-time",
      nextButtonLabel: "Kembali ke Atas ↑",
    },
  ],

  skills: [
    {
      id: "frontend",
      title: "Frontend & Interactive 3D",
      subtitle: "Antarmuka Responsif, Cepat & Mengesankan",
      accentHex: "#38BDF8",
      badgeClass: "text-sky-400 border-sky-500/30 bg-sky-500/10",
      description:
        "Merancang antarmuka modern dengan komponen modular, state terprediksi, serta integrasi grafis WebGL / Three.js yang tetap ringan di berbagai perangkat.",
      items: [
        {
          name: "React & Next.js",
          role: "UI Architecture & SSR",
          exp: "Advanced",
        },
        { name: "TypeScript & ES6+", role: "Type-Safe Logic", exp: "Advanced" },
        {
          name: "Tailwind CSS & Motion",
          role: "Modern Styling & Animation",
          exp: "Advanced",
        },
        {
          name: "Three.js / WebGL",
          role: "Interactive 3D Assets",
          exp: "Intermediate-Adv",
        },
      ],
    },
    {
      id: "backend",
      title: "Backend & API Architecture",
      subtitle: "Logika Server Andal, Aman & Mudah Diskalakan",
      accentHex: "#34D399",
      badgeClass: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      description:
        "Membangun layanan backend, REST/GraphQL API, autentikasi berlapis, dan integrasi AI yang cepat serta mudah dipelihara.",
      items: [
        {
          name: "Node.js & Express",
          role: "REST API & Microservices",
          exp: "Advanced",
        },
        {
          name: "Python & FastAPI",
          role: "Backend & AI Integration",
          exp: "Advanced",
        },
        {
          name: "Authentication & Security",
          role: "JWT, OAuth2 & RBAC",
          exp: "Advanced",
        },
        {
          name: "Real-Time WebSockets",
          role: "Live Sync & Notifications",
          exp: "Intermediate-Adv",
        },
      ],
    },
    {
      id: "database",
      title: "Database, Cloud & DevOps",
      subtitle: "Penyimpanan Data Terstruktur & Deployment Modern",
      accentHex: "#818CF8",
      badgeClass: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      description:
        "Memodelkan basis data relasional maupun vektor, mengoptimalkan performa kueri, serta mengotomatisasi proses deployment ke cloud.",
      items: [
        {
          name: "PostgreSQL & MySQL",
          role: "Relational Database Design",
          exp: "Advanced",
        },
        {
          name: "Prisma ORM & Redis",
          role: "Type-Safe Query & Caching",
          exp: "Advanced",
        },
        {
          name: "Git, GitHub & Docker",
          role: "Version Control & Containers",
          exp: "Advanced",
        },
        {
          name: "Vercel / Cloud Hosting",
          role: "CI/CD & Production Deploy",
          exp: "Advanced",
        },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "proj-1",
      code: "PROJECT 01",
      title: "NexaFlow — Workspace Manajemen Proyek & Kolaborasi Tim",
      category: "Full-Stack Web App",
      year: "2026",
      accentHex: "#38BDF8",
      summary:
        "Platform kolaborasi tim modern dengan papan Kanban interaktif, pelacakan progres real-time, analitik sprint, dan manajemen dokumen terpusat.",
      highlights: [
        "Interaksi drag-and-drop mulus dengan pembaruan status real-time",
        "Arsitektur full-stack TypeScript dengan waktu respons API < 35ms",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
      ],
      demoUrl: "https://github.com/biamtiero",
      repoUrl: "https://github.com/biamtiero",
    },
    {
      id: "proj-2",
      code: "PROJECT 02",
      title: "Lumina Commerce — Platform E-Commerce & Dashboard Inventaris",
      category: "E-Commerce Platform",
      year: "2025",
      accentHex: "#34D399",
      summary:
        "Aplikasi toko online berkecepatan tinggi dengan fitur pencarian instan, keranjang belanja persisten, integrasi payment gateway, dan panel admin lengkap.",
      highlights: [
        "Skor performa Google Lighthouse 99/100 di perangkat mobile & desktop",
        "Manajemen stok otomatis dan laporan penjualan visual real-time",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Prisma ORM",
        "PostgreSQL",
        "Midtrans API",
      ],
      demoUrl: "https://github.com/biamtiero",
      repoUrl: "https://github.com/biamtiero",
    },
    {
      id: "proj-3",
      code: "PROJECT 03",
      title: "AskDoc AI — Asisten Riset & Analisis Dokumen Pintar",
      category: "AI & Backend Application",
      year: "2025",
      accentHex: "#818CF8",
      summary:
        "Aplikasi berbasis AI yang memungkinkan pengguna mengunggah dokumen PDF dan melakukan tanya-jawab instan lengkap dengan rujukan halaman kutipan.",
      highlights: [
        "Pencarian semantik berbasis vektor untuk akurasi jawaban tinggi",
        "Antarmuka pembaca dokumen berdampingan dengan asisten chat AI",
      ],
      techStack: ["Python", "FastAPI", "React", "TypeScript", "Vector Search"],
      demoUrl: "https://github.com/biamtiero",
      repoUrl: "https://github.com/biamtiero",
    },
    {
      id: "proj-4",
      code: "PROJECT 04",
      title: "PulseMetric — Real-Time Cloud Telemetry & API Monitor",
      category: "DevOps & Analytics",
      year: "2025",
      accentHex: "#F472B6",
      summary:
        "Dashboard observabilitas real-time untuk memantau latensi endpoint API, kesehatan server, log terdistribusi, serta peringatan insiden otomatis.",
      highlights: [
        "Streaming metrik WebSocket langsung dengan visualisasi grafik 60fps",
        "Sistem notifikasi anomali otomatis via Webhook & Telegram",
      ],
      techStack: ["TypeScript", "Node.js", "WebSockets", "Redis", "React"],
      demoUrl: "https://github.com/biamtiero",
      repoUrl: "https://github.com/biamtiero",
    },
    {
      id: "proj-5",
      code: "PROJECT 05",
      title: "Aether Studio — Interactive 3D WebGL Product Configurator",
      category: "Creative 3D & WebGL",
      year: "2024",
      accentHex: "#FBBF24",
      summary:
        "Pengalaman web 3D interaktif yang memungkinkan pengguna memutar, mengganti material shader, dan mengatur pencahayaan produk secara real-time di browser.",
      highlights: [
        "Custom GLSL shader dengan pantulan PBR yang ringan di perangkat mobile",
        "Transisi kamera sinematik berbasis kurva halus tanpa jeda",
      ],
      techStack: ["Three.js", "WebGL / GLSL", "React", "TypeScript", "Vite"],
      demoUrl: "https://github.com/biamtiero",
      repoUrl: "https://github.com/biamtiero",
    },
    {
      id: "proj-6",
      code: "PROJECT 06",
      title: "FinVault — Sistem Ledger Keuangan & Invoicing Otomatis",
      category: "Fintech Web System",
      year: "2024",
      accentHex: "#2DD4BF",
      summary:
        "Platform manajemen arus kas, pembuatan faktur multi-mata uang, rekonsiliasi transaksi otomatis, dan laporan audit keuangan terenkripsi.",
      highlights: [
        "Arsitektur transaksi double-entry yang presisi dan aman (RBAC + JWT)",
        "Ekspor laporan PDF/CSV instan dengan filter periode dinamis",
      ],
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
      demoUrl: "https://github.com/biamtiero",
      repoUrl: "https://github.com/biamtiero",
    },
  ] as ProjectShowcase[],

  experience: [
    {
      id: "exp-1",
      period: "2024 — Sekarang",
      role: "Full-Stack Developer",
      company: "Pengembangan Produk Digital & Freelance",
      location: "Indonesia (Remote)",
      description:
        "Merancang dan membangun aplikasi web full-stack dari tahap perancangan database, pembuatan REST API, hingga antarmuka frontend modern yang responsif.",
      tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      id: "exp-2",
      period: "2023 — 2024",
      role: "Frontend Web Developer",
      company: "Kolaborasi Studio & Proyek Teknologi",
      location: "Jakarta / Bandung",
      description:
        "Mengembangkan sistem komponen UI yang dapat digunakan kembali, mengoptimalkan performa halaman web, dan mengintegrasikan antarmuka dengan API backend.",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "Git"],
    },
    {
      id: "exp-3",
      period: "2020 — 2024",
      role: "Sarjana Teknik Informatika / Ilmu Komputer",
      company: "Pendidikan Tinggi & Riset Rekayasa Perangkat Lunak",
      location: "Indonesia",
      description:
        "Fokus pada Rekayasa Perangkat Lunak, Algoritma & Struktur Data, Basis Data, dan Pengembangan Sistem Web Modern.",
      tags: ["Software Engineering", "Web Architecture", "Database Systems"],
    },
  ] as ExperienceItem[],
};

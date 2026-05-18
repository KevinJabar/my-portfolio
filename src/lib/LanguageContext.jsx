import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    nav: {
      name: "Alex Morgan",
      work: "Work",
      process: "Process",
      about: "About",
      contact: "Contact",
      hire: "Hire Me",
    },
    hero: {
      available: "Available for new projects",
      heading1: "Hi, I'm Alex —",
      heading2: "a",
      heading3: "Web Developer",
      heading4: "& UI/UX Engineer",
      description: "I build fast, accessible, and beautiful web experiences. From design systems to full-stack apps — I care about every detail.",
      cta1: "See My Work",
      cta2: "Contact Me",
    },
    projects: {
      label: "Selected Work",
      heading: "Featured Projects",
      items: [
        {
          title: "FinFlow Dashboard",
          description: "A real-time financial analytics platform with advanced data visualization for enterprise teams.",
          result: "40% faster decisions. 98 Lighthouse score.",
        },
        {
          title: "Meridian Commerce",
          description: "A next-gen e-commerce experience with AI-powered personalization and seamless checkout.",
          result: "32% increase in conversion rate.",
        },
        {
          title: "Nexus Collaboration",
          description: "A real-time design tool for distributed teams with infinite canvas workspaces.",
          result: "Adopted by 12K+ teams. 99.97% uptime.",
        },
      ],
    },
    process: {
      label: "How I Work",
      heading: "My Process",
      steps: [
        { number: "01", title: "Discovery", description: "Understanding your goals, users, and constraints to define a clear strategic direction." },
        { number: "02", title: "Design", description: "Crafting wireframes, prototypes, and visual designs that balance beauty with usability." },
        { number: "03", title: "Build", description: "Writing clean, performant code that brings the design to life across all devices." },
        { number: "04", title: "Launch", description: "Deploying, testing, and iterating — ensuring everything works flawlessly in production." },
      ],
    },
    about: {
      label: "About Me",
      heading: "Passionate about building things that matter",
      bio1: "I'm a full-stack web developer and UI/UX engineer who loves turning ideas into polished, user-friendly products. I care deeply about performance, accessibility, and clean code.",
      bio2: "With 5+ years of experience, I've worked with startups and enterprises alike — always bringing the same level of craft and attention to detail to every project.",
      stats: [
        { value: "5+", label: "Years Experience" },
        { value: "40+", label: "Projects Delivered" },
        { value: "98", label: "Lighthouse Score" },
        { value: "15+", label: "Happy Clients" },
      ],
    },
    contact: {
      label: "Get In Touch",
      heading: "Let's work together",
      description: "Have a project in mind or just want to say hi? My inbox is always open. I'll get back to you as soon as I can.",
      emailLabel: "Your Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      sent: "Sent!",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  id: {
    nav: {
      name: "Alex Morgan",
      work: "Karya",
      process: "Proses",
      about: "Tentang",
      contact: "Kontak",
      hire: "Rekrut Saya",
    },
    hero: {
      available: "Tersedia untuk proyek baru",
      heading1: "Halo, saya Alex —",
      heading2: "seorang",
      heading3: "Pengembang Web",
      heading4: "& UI/UX Engineer",
      description: "Saya membangun pengalaman web yang cepat, aksesibel, dan indah. Dari sistem desain hingga aplikasi full-stack — saya peduli pada setiap detail.",
      cta1: "Lihat Karya Saya",
      cta2: "Hubungi Saya",
    },
    projects: {
      label: "Karya Pilihan",
      heading: "Proyek Unggulan",
      items: [
        {
          title: "FinFlow Dashboard",
          description: "Platform analitik keuangan real-time dengan visualisasi data canggih untuk tim enterprise.",
          result: "Pengambilan keputusan 40% lebih cepat. Skor Lighthouse 98.",
        },
        {
          title: "Meridian Commerce",
          description: "Pengalaman e-commerce generasi berikutnya dengan personalisasi berbasis AI dan checkout yang mulus.",
          result: "Peningkatan tingkat konversi 32%.",
        },
        {
          title: "Nexus Collaboration",
          description: "Alat desain real-time untuk tim terdistribusi dengan ruang kerja kanvas tak terbatas.",
          result: "Digunakan oleh 12.000+ tim. Uptime 99,97%.",
        },
      ],
    },
    process: {
      label: "Cara Saya Bekerja",
      heading: "Proses Saya",
      steps: [
        { number: "01", title: "Penemuan", description: "Memahami tujuan, pengguna, dan batasan Anda untuk menentukan arah strategis yang jelas." },
        { number: "02", title: "Desain", description: "Membuat wireframe, prototipe, dan desain visual yang menyeimbangkan keindahan dengan kegunaan." },
        { number: "03", title: "Pengembangan", description: "Menulis kode yang bersih dan berperforma tinggi yang menghidupkan desain di semua perangkat." },
        { number: "04", title: "Peluncuran", description: "Menerapkan, menguji, dan melakukan iterasi — memastikan semuanya berjalan sempurna di produksi." },
      ],
    },
    about: {
      label: "Tentang Saya",
      heading: "Bersemangat membangun hal-hal yang bermakna",
      bio1: "Saya adalah pengembang web full-stack dan UI/UX engineer yang senang mengubah ide menjadi produk yang halus dan ramah pengguna. Saya sangat peduli pada performa, aksesibilitas, dan kode yang bersih.",
      bio2: "Dengan pengalaman lebih dari 5 tahun, saya telah bekerja dengan startup maupun perusahaan besar — selalu membawa tingkat keahlian dan perhatian terhadap detail yang sama di setiap proyek.",
      stats: [
        { value: "5+", label: "Tahun Pengalaman" },
        { value: "40+", label: "Proyek Selesai" },
        { value: "98", label: "Skor Lighthouse" },
        { value: "15+", label: "Klien Puas" },
      ],
    },
    contact: {
      label: "Hubungi Saya",
      heading: "Mari bekerja sama",
      description: "Punya proyek dalam pikiran atau sekadar ingin menyapa? Kotak masuk saya selalu terbuka. Saya akan membalas secepat mungkin.",
      emailLabel: "Email Anda",
      emailPlaceholder: "anda@perusahaan.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritakan proyek Anda...",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      sent: "Terkirim!",
    },
    footer: {
      rights: "Hak cipta dilindungi.",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const toggle = () => setLang((l) => (l === "en" ? "id" : "en"));

  return <LanguageContext.Provider value={{ lang, toggle, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

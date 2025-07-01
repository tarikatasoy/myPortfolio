
import {
  Code2,
  Palette,
  Zap,
  Globe,
  Database,
  Smartphone,
  Terminal,
  Rocket,
  Award,
  Coffee,
  Candy
} from "lucide-react";

export const NAV_LINKS = [
  { id: "about", label: "Hakkımda" },
  { id: "skills", label: "Yeteneklerim" },
  { id: "projects", label: "Projelerim" },
  { id: "contact", label: "İletişim" },
];

export const SKILLS = [
  {
    name: "Frontend Geliştirme",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    description: "Modern web uygulamaları ve etkileşimli kullanıcı arayüzleri geliştirme",
    technologies: ["React", "Next.js", "TypeScript", "Vue.js", "Vite"]
  },
  {
    name: "Backend Geliştirme", 
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    description: "Güvenli ve ölçeklenebilir sunucu tarafı uygulamalar ve API'ler",
    technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    name: "UI/UX Tasarımı",
    icon: Palette,
    color: "from-pink-500 to-purple-500", 
    bgColor: "from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20",
    description: "Kullanıcı odaklı tasarım ve seamless deneyim oluşturma",
    technologies: ["Figma", "Tailwind CSS", "Framer Motion", "Adobe XD"]
  },
  {
    name: "Mobil Geliştirme",
    icon: Smartphone,
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20", 
    description: "Cross-platform mobil uygulamalar ve native performans",
    technologies: ["React Native", "Flutter", "Expo", "Electron"]
  },
  {
    name: "Cloud & DevOps",
    icon: Terminal,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    description: "Bulut altyapısı yönetimi ve otomatik deployment süreçleri",
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Vercel"]
  },
  {
    name: "Web Performansı",
    icon: Zap,
    color: "from-yellow-500 to-amber-500",
    bgColor: "from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20",
    description: "Site hızı optimizasyonu ve kullanıcı deneyimini iyileştirme",
    technologies: ["Lighthouse", "Web Vitals", "Bundle Analysis", "PWA"]
  }
];

export const PROJECTS = [
  {
    title: "Gerçek Zamanlı Konum Takibi",
    description:
      "Gerçek zamanlı Wi-Fi izleme, konum takibi ve etkileyici veri görselleştirmeleri sunan gelişmiş Electron masaüstü uygulaması.",
    tech: ["Electron", "React", "Tailwind", "Node.js", "Chart.js"],
    repo: "https://github.com/tarik-atasoy/location-tracker",
    demo: "https://location.tarikatasoy.dev",
    featured: true,
    gradient: "from-purple-700 via-purple-500 to-purple-300",
    category: "Desktop App",
  },
  {
    title: "Smoothie Planlayıcı",
    description:
      "Besin analizi, kalori takibi ve kişisel önerilerle akıllı smoothie tarif oluşturucu.",
    tech: ["React", "Redux Toolkit", "Tailwind", "Chart.js"],
    repo: "https://github.com/tarik-atasoy/smoothie-planner",
    demo: "https://smoothie.tarikatasoy.dev",
    featured: true,
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    category: "Web App",
  },
  {
    title: "Banka Uygulama Prototipi",
    description:
      "Güvenli kimlik doğrulama, gerçek zamanlı işlemler ve mobil & web için duyarlı tasarıma sahip tam kapsamlı bir banka çözümü.",
    tech: ["React", "React Native", "Node.js", "Tailwind", "JWT"],
    repo: "https://github.com/tarik-atasoy/bank-prototype",
    featured: false,
    gradient: "from-blue-600 via-violet-600 to-purple-600",
    category: "Full Stack",
  },
];

export const FEATURES = [
  {
    icon: Code2,
    title: "Temiz Kod",
    description:
      "En iyi uygulamalarla sürdürülebilir ve ölçeklenebilir kod yazma",
  },
  {
    icon: Palette,
    title: "Modern Tasarım",
    description: "Kullanıcı odaklı ve estetik arayüzler oluşturma",
  },
  {
    icon: Zap,
    title: "Performans",
    description: "Hız ve üstün kullanıcı deneyimi için optimizasyon",
  },
  {
    icon: Globe,
    title: "Duyarlı Tasarım",
    description: "Tüm cihazlar ve ekran boyutları için uyumlu geliştirme",
  },
];

export const HERO_STATS = [
  { icon: Rocket, value: "10+", label: "Tamamlanan Proje" },
  { icon: Award, value: "3+", label: "Yıllık Deneyim" },
  { icon: Coffee, value: "∞", label: "İçilen Kahve" },
  { icon: Candy, value: "100%", label: "Keyif" },
];

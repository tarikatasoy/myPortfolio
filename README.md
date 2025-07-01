# 💼 Tarık Atasoy Portfolio – Next.js Edition

Bu proje, modern bir portföy sitesi oluşturmak için **Next.js 14 (App Router) + TypeScript + Tailwind CSS** teknolojileriyle geliştirilmiştir. SEO, performans ve kullanıcı deneyimi ön planda tutulmuştur.

## 🚀 Özellikler

- ⚡ **Static Rendering**: Ana sayfa `app/page.tsx` üzerinden statik olarak sunulur.
- 🧠 **Metadata API**: SEO için `app/layout.tsx` içinde yapılandırılmış JSON-LD, OpenGraph ve Twitter metaları.
- 🌍 **i18n Desteği**: `next.config.mjs` üzerinden `tr` ve `en` dilleri tanımlıdır.
- 🖼️ **Next/Image**: Otomatik boyutlandırma ve lazy-loading ile optimize görsel yönetimi.
- 🎨 **Tailwind CSS**: `tailwind.config.mjs` ile modern, responsive tasarım.
- 🔔 **Lucide-react**: Hafif ve sade ikon seti.
- 📈 **Core Web Vitals**: Google Fonts yerine self-host edilen Inter font ile yüksek performans.

---

## ⚙️ Kurulum ve Çalıştırma

```bash
pnpm install     # veya npm install
pnpm dev         # http://localhost:3000 üzerinden geliştirici sunucusu
pnpm build       # production için derleme

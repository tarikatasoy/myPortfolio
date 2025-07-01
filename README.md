
# Tarık Atasoy Portfolio – Next.js Edition

Bu repo, React tabanlı portföy projenizin **Next.js 14 (App Router) + TypeScript + Tailwind CSS** kullanılarak yeniden yapılandırılmış halidir. SEO uyumluluğu ve performans için aşağıdaki iyileştirmeler uygulanmıştır:

* **Static Rendering** – Ana sayfa `app/page.tsx`'de statik olarak sunulur.
* **Metadata API** – `app/layout.tsx` içinde JSON-LD benzeri meta etiketleri ve OpenGraph/Twitter kartları.
* **Internationalization (i18n)** – `next.config.mjs` içinde `tr` ve `en` dilleri.
* **Next/Image** – Görseller için otomatik boyutlandırma ve lazy‑loading.
* **Tailwind CSS** – `tailwind.config.mjs` ile ağacın her yerinde kullanılabilir.
* **Lucide-react** – Hafif ve ağ gereksinimi düşük ikon seti.
* **Core Web Vitals** – Inter fontu Google Fonts API ile otomatik self‑host (Next font optimizer).

## Nasıl Çalıştırılır?

```bash
pnpm install # veya npm i
pnpm dev     # localhost:3000
pnpm build   # statik veya edge dağıtım için prod build
```

> **Not:** `public/avatar.gif` yerine gerçek GIF dosyanızı eklemeyi unutmayın.

## Dağıtım

`next build && next start` komutu ile herhangi bir Node.js barındırma üzerinde çalışır. Vercel, Netlify Edge Functions veya AWS Lambda@Edge üzerinde de anında dağıtabilirsiniz.

---

İyi kodlamalar! 🚀

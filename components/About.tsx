
import { FEATURES } from "./data";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-4xl font-bold text-transparent">
              Hakkımda
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Tasarıma karşı keskin bir bakış açısına ve olağanüstü kullanıcı
                deneyimleri oluşturma tutkusuna sahip bir frontend
                geliştiricisiyim. Yolculuğum, modern teknolojiler ve
                framework’lerde ustalaştığım birkaç yıla yayılıyor.
              </p>
              <p>
                React, TypeScript ve modern CSS framework’lerinde uzmanım —
                her zaman en güncel trendleri takip ederim. Amacım, tasarım ile
                işlevsellik arasındaki boşluğu kapatarak hem estetik hem de
                yüksek performanslı arayüzler geliştirmek.
              </p>
              <p>
                Kod yazmadığım zamanlarda yeni teknolojileri keşfeder, açık
                kaynak projelere katkıda bulunur ya da geliştirici topluluğuyla
                bilgi paylaşırım.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-gray-900/80 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 opacity-0 transition-opacity group-hover:opacity-100" />

                <feature.icon className="mb-4 h-12 w-12 text-cyan-400" />

                <h3 className="mb-2 text-xl font-semibold text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

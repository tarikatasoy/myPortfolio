import { FEATURES } from "./data";

export function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <div>
            <h2 className="mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold text-transparent">
              Hakkımda
            </h2>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
              <p>
                Kullanıcı deneyimini ön planda tutan, detaylara hakim ve yenilikçi tasarım ilkelerine bağlı bir frontend geliştiricisiyim. Kariyerim boyunca modern teknolojilere ve popüler framework'lere odaklanarak, sektördeki gelişmeleri yakından takip ettim ve uzmanlık alanımı sürekli olarak genişlettim.
              </p>
              <p>
                Özellikle React, TypeScript ve güncel CSS framework'lerinde tecrübeye sahibim. Çalışmalarımda estetik değerlerle işlevselliği bir araya getirerek, kullanıcıların etkileşimlerini en üst seviyeye çıkaran arayüzler tasarlamayı amaçlıyorum.
              </p>
              <p>
                Çalışma saatleri dışında zamanımı yeni teknolojileri araştırmak, kişisel projeler geliştirmek ve mesleki yetkinliğimi artıracak eğitimlere katılarak geçiriyorum.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-xl sm:rounded-2xl bg-gray-900/80 p-4 sm:p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 opacity-0 transition-opacity group-hover:opacity-100" />

                <feature.icon className="mb-3 sm:mb-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-cyan-400" />

                <h3 className="mb-2 text-lg sm:text-xl font-semibold text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
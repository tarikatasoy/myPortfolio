"use client";
import Image from "next/image";
import { ArrowRight, Send } from "lucide-react";
import { HERO_STATS } from "./data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
        <div className="absolute top-1/4 left-1/4 h-48 w-48 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-40 w-40 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full bg-lime-400/25 blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <div className="mx-auto mb-6 sm:mb-8 flex items-center justify-center">
            <Image
              src="/avatar.gif"
              width={160}
              height={160}
              priority
              alt="Tarık Atasoy Avatar"
              className="rounded-full border-4 border-cyan-400 shadow-lg sm:w-48 sm:h-48 lg:w-60 lg:h-60"
            />
          </div>
          <h1 className="mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-transparent">
            <span className="block sm:inline bg-gradient-to-r from-lime-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>

          <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 px-4 sm:px-0">
            Güncel teknolojilerle geliştirilmiş, kullanıcı odaklı tasarım ilkelerine bağlı kalarak yüksek kalitede ve kullanıcıların beklentilerini karşılayan dijital çözümler sunuyorum.
          </p>

          <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row px-4 sm:px-0">
            <a
              href="#projects"
              className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/40 w-full sm:w-auto justify-center"
            >
              <span className="mr-2 text-sm sm:text-base">Çalışmalarıma Göz at</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center rounded-2xl bg-white/10 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-gray-100 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 w-full sm:w-auto justify-center"
            >
              <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">İletişime Geç</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 md:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative rounded-xl sm:rounded-2xl bg-gray-900/80 p-3 sm:p-4 lg:p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/5 to-fuchsia-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative text-center">
                <stat.icon className="mx-auto mb-2 sm:mb-3 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-cyan-400" />
                <div className="mb-1 text-lg sm:text-xl lg:text-2xl font-bold text-gray-100">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
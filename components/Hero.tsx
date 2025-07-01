
"use client";
import Image from "next/image";
import { ArrowRight, Send } from "lucide-react";
import { HERO_STATS } from "./data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-lime-400/25 blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-8 flex items-center justify-center">
            <Image
              src="/avatar.gif"
              width={240}
              height={240}
              priority
              alt="Tarık Atasoy Avatar"
              className="rounded-full border-4 border-cyan-400 shadow-lg"
            />
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-6xl font-black leading-tight text-transparent sm:text-7xl md:text-8xl">
            <span className="ml-5 bg-gradient-to-r from-lime-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
            İleri düzey teknolojiler, yumuşacık animasyonlar ve piksel
            hassasiyetinde tasarımlarla kullanıcıların bayıldığı olağanüstü
            dijital deneyimler oluşturuyorum.
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/40"
            >
              <span className="mr-2">Çalışmalarıma Göz at</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center rounded-2xl bg-white/10 px-8 py-4 font-semibold text-gray-100 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            >
              <Send className="mr-2 h-5 w-5" />
              İletişime Geç
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl bg-gray-900/80 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-fuchsia-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative text-center">
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-cyan-400" />
                <div className="mb-1 text-2xl font-bold text-gray-100">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { Mail, ArrowRight, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-4xl font-bold text-transparent">
          İletişimde Kalalım!
        </h2>

        <p className="mb-12 text-xl text-gray-300">
          Görüş alışverişi yapmak, projeler üzerine konuşmak ya da sadece
          merhaba demek istersen benimle iletişime geçebilirsin.
        </p>

        <div className="mb-12 rounded-3xl bg-gray-900/80 p-8 backdrop-blur-sm shadow-lg">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="mailto:tarikcn12@gmail.com"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
            >
              <Mail size={20} />
              <span>Email Gönder</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/tarikatasoy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-2xl bg-gray-800/60 p-4 text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800/80"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/tarik-atasoy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-2xl bg-gray-800/60 p-4 text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800/80"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { SKILLS } from "./data";
import { Star } from "lucide-react";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent">
            Yetenekler&nbsp;&amp;&nbsp;Uzmanlık Alanları
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Fikirleri hayata geçirmek için kullandığım teknolojiler ve araçlar
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-900/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Hover effect arka plan */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
              />
              
              {/* Border glow effect */}
              <div
                className={`absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-1 group-hover:ring-opacity-50 transition-all duration-300`}
                style={{
                  boxShadow: `0 0 20px rgba(0, 0, 0, 0), inset 0 0 0 1px transparent`
                }}
              />

              <div className="relative z-10">
                <div
                  className={`mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg`}
                >
                  <skill.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>

                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-gray-100">
                  {skill.name}
                </h3>

                <p className="mb-4 text-sm sm:text-base text-gray-400 leading-relaxed">{skill.description}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${skill.color} bg-clip-text text-transparent bg-gray-800/50 border border-gray-700/50`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
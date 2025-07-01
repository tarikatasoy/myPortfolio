
import { SKILLS } from "./data";
import { Star } from "lucide-react";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-4xl font-bold text-transparent">
            Yetenekler&nbsp;&amp;&nbsp;Uzmanlık Alanları
          </h2>
          <p className="text-xl text-gray-300">
            Fikirleri hayata geçirmek için kullandığım teknolojiler ve araçlar
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {SKILLS.map((skill) => (
    <div
      key={skill.name}
      className={`group relative overflow-hidden rounded-3xl
      bg-gray-900/80 p-8 backdrop-blur-sm
      transition-all duration-300 hover:-translate-y-2
    `}
    >
      <div
        className={`
        absolute inset-0 rounded-3xl
        ring-2 ring-transparent
        group-hover:ring-0
        before:absolute before:inset-0 before:rounded-3xl
        before:bg-gradient-to-br ${skill.color}
        before:opacity-0 before:transition-opacity
        before:duration-300 group-hover:before:opacity-100 before:blur-sm
      `}
      />

      <div className="relative">
        <div
          className={`
          mb-6 flex h-16 w-16 items-center justify-center rounded-2xl
          bg-gradient-to-r ${skill.color}
          shadow-lg
        `}
        >
          <skill.icon className="h-8 w-8 text-white" />
        </div>

        <h3 className="mb-3 text-xl font-bold text-gray-100">
          {skill.name}
        </h3>

        <p className="mb-4 text-gray-400">{skill.description}</p>

        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech) => (
            <span
              key={tech}
              className={`
                px-3 py-1 text-xs font-medium rounded-full
                bg-gradient-to-r ${skill.color}
                bg-clip-text text-transparent
                bg-gray-800/50 border border-gray-700/50
              `}
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

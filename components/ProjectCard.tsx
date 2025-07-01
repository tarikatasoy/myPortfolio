import { Github, ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import type { PROJECTS as ProjectType } from "./data";

interface Props {
  project: (typeof ProjectType)[number];
  index: number;
}

export const ProjectCard: FC<Props> = ({ project, index }) => {
  const isFeatured = project.featured;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 hover:scale-[1.02] ${
        isFeatured 
          ? "bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700/50 backdrop-blur-xl hover:border-purple-500/50" 
          : "bg-slate-900/60 border-slate-800/50 backdrop-blur-sm hover:border-slate-600/50"
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]"></div>
      </div>

      {/* Glow Effect */}
      {isFeatured && (
        <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 -z-10`}></div>
      )}

      <div className="relative p-8">
        {/* Category & Featured Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-slate-800/50 text-slate-300 rounded-full border border-slate-700/50">
            {project.category}
          </span>
          
          {isFeatured && (
            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 rounded-full border border-yellow-500/30">
              <Sparkles size={12} />
              <span className="text-xs font-medium">Öne Çıkan</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className={`mb-4 font-bold group-hover:text-white transition-colors duration-300 ${
          isFeatured ? "text-2xl text-white" : "text-xl text-slate-200"
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`mb-6 leading-relaxed ${
          isFeatured ? "text-slate-300 text-base" : "text-slate-400 text-sm"
        }`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={tech}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                  isFeatured
                    ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30"
                    : "bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:text-slate-300"
                }`}
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50"
            >
              <Github size={16} />
              <span className="text-sm font-medium">Kod</span>
            </Link>
          )}

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/btn flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 ${
                isFeatured
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-purple-500/25"
                  : "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white"
              }`}
            >
              <span>Canlı Demo</span>
              <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
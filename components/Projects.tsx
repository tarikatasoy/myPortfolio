import { PROJECTS } from "./data";
import { ProjectCard } from "./ProjectCard";
import { Sparkles, Code2, Zap } from "lucide-react";

export function Projects() {
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-fuchsia-500/5 to-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Seçkin Çalışmalar</span>
          </div>
          
          <h2 className="mb-6 text-5xl md:text-6xl font-black">
            {/* <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Yaratıcı
            </span> */}
            {/* <br /> */}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projelerim
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Her proje, yenilikçi teknolojiler ve kullanıcı deneyimine odaklanan 
            dikkatli bir tasarım sürecinin ürünüdür
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
              <Zap size={14} className="text-yellow-400" />
              <span className="text-sm font-medium text-yellow-300">Öne Çıkan</span>
            </div>
            <div className="h-px bg-gradient-to-r from-yellow-500/50 to-transparent flex-1"></div>
          </div>
          
           <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold text-white">Çok Yakında</span>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
              </div>

          {/* proje ekleyince burası açılacak */}
          {/* <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div> */}
        </div>

{/* proje ekleyince burası açılacak */}
        {/* Other Projects */}
        {/* {otherProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-slate-500/20 to-slate-400/20 rounded-full border border-slate-500/30">
                <Code2 size={14} className="text-slate-400" />
                <span className="text-sm font-medium text-slate-300">Diğer Projeler</span>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-500/50 to-transparent flex-1"></div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + featuredProjects.length} />
              ))}
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}
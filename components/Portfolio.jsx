const projects = [
  { title: "Luminary App", tag: "UI/UX", bg: "from-violet-600 to-indigo-600" },
  { title: "NovaBrand Identity", tag: "Branding", bg: "from-pink-500 to-rose-600" },
  { title: "ShopEase Platform", tag: "Web Dev", bg: "from-cyan-500 to-blue-600" },
  { title: "Pulse Dashboard", tag: "UI/UX", bg: "from-amber-500 to-orange-600" },
  { title: "GreenLeaf Campaign", tag: "Marketing", bg: "from-emerald-500 to-teal-600" },
  { title: "Archeo Website", tag: "Web Dev", bg: "from-fuchsia-500 to-purple-700" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Portfolio</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A selection of projects we're proud to have built and shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Thumbnail */}
              <div
                className={`h-56 bg-gradient-to-br ${project.bg} transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/60">
                  {project.tag}
                </span>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>

              {/* Always visible title below */}
              <div className="mt-3 px-1">
                <span className="text-xs text-violet-400 font-medium uppercase tracking-wider">
                  {project.tag}
                </span>
                <h3 className="text-white font-semibold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
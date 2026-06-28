export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Gradient background blobs */}
      <div className="absolute top-[-10rem] left-[-10rem] w-[40rem] h-[40rem] bg-violet-700/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <span className="inline-block text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Creative Design Agency
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          We Build{" "}
          <span className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            Bold Digital
          </span>{" "}
          Experiences
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Pixelo Studio blends strategy, design, and technology to craft products
          that stand out in a crowded digital world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-full font-semibold text-white">
          
            View Our Work
          </a>
        <a
            href="#contact"
            className="border border-white/20 hover:border-white/50 transition px-8 py-4 rounded-full font-semibold text-white/80 hover:text-white">
          
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
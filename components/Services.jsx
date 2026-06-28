const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "We design intuitive, user-centered interfaces that are beautiful and functional across all devices.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "From landing pages to full-stack apps, we build fast, scalable, and modern web solutions.",
  },
  {
    icon: "✦",
    title: "Branding",
    description:
      "We create strong brand identities — logos, color systems, and guidelines that tell your story.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description:
      "Data-driven strategies to grow your online presence, reach the right audience, and convert.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Our Services</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            End-to-end digital services built to elevate your brand and product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-400 transition">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
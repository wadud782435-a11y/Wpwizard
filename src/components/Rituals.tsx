import { motion } from "motion/react";

export function Rituals() {
  const images = [
    { src: "/src/assets/images/tantric_ritual_1_1782382312786.jpg", alt: "Tantric Ritual" },
    { src: "/src/assets/images/tantric_shrine_2_1782382334291.jpg", alt: "Sacred Shrine" },
    { src: "/src/assets/images/tantric_voodoo_3_1782382350672.jpg", alt: "Mystical Setup" },
  ];

  return (
    <section className="py-16 md:py-20 bg-brand-black border-t border-white/5 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-brand-red font-semibold tracking-wider uppercase mb-2">Powerful Practices</h3>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              A Tantric Doing <span className="text-brand-yellow">Blackmagic</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Glimpses of our authentic and powerful rituals performed to solve deep-rooted problems. 
              Our practices are ancient, confidential, and highly effective.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group overflow-hidden rounded-2xl border border-white/10 aspect-[4/5] md:aspect-square"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

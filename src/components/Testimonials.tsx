import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-brand-yellow font-semibold tracking-wider uppercase mb-2">Client Stories</h3>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Trusted by Many
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-brand-black p-8 rounded-2xl border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <h4 className="font-bold text-white">{t.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

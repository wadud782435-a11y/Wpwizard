import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { WHY_CHOOSE_US, CONTACT_PHONE } from "../constants";

export function Features() {
  return (
    <section className="py-16 md:py-20 bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Why Choose <span className="text-brand-yellow">Ram Ojha</span>?
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4 p-6 bg-brand-dark rounded-xl border border-white/5"
            >
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-gray-300">
                Experience guaranteed privacy and powerful results. <br className="md:hidden" />
                Contact <strong className="text-brand-yellow">{CONTACT_PHONE}</strong> to begin.
            </p>
        </div>
      </div>
    </section>
  );
}

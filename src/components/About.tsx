import { motion } from "motion/react";
import { PhoneCall } from "lucide-react";
import { CONTACT_PHONE, CONTACT_CALL } from "../constants";

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-brand-black relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-brand-yellow/20 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/40 to-transparent z-10" />
              <img src="/src/assets/images/scary_tantrik_hero_1782382695746.jpg" alt="Tantrik Ram Ojha" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-red text-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="font-bold text-xl mb-1">Decades of Experience</p>
              <p className="text-sm opacity-90">Authentic Mayong Tradition</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-brand-yellow font-semibold tracking-wider uppercase mb-2">About The Guide</h3>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Trusted Spiritual Guide from Mayong, Assam
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Mayong Tantrik Ram Ojha brings years of profound experience and deep knowledge of the ancient spiritual traditions of Mayong. Known for his powerful and effective guidance, he has dedicated his life to helping people overcome their most difficult challenges.
              </p>
              <p>
                Whether you are facing struggles in love, marital discord, career obstacles, or family disputes, Ram Ojha provides highly personalized, strictly confidential, and genuine spiritual remedies. 
              </p>
              <p>
                Our foundation is built on trust, respect, and a genuine desire to bring peace and success to our clients' lives.
              </p>
            </div>

            <div className="mt-10 p-6 bg-brand-dark/50 border border-brand-blue rounded-xl">
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Speak Directly With Guruji</p>
              <a href={CONTACT_CALL} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center group-hover:bg-brand-red transition-colors">
                  <PhoneCall className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                    {CONTACT_PHONE}
                  </p>
                  <p className="text-green-400 text-sm font-medium">Available for Consultation</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

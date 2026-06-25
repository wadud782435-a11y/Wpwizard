import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { SERVICES, CONTACT_PHONE, CONTACT_WHATSAPP } from "../constants";

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-brand-dark relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-20" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-brand-yellow font-semibold tracking-wider uppercase mb-2">Our Expertise</h3>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Spiritual Services & Guidance
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Powerful, traditional, and strictly confidential remedies for life's most complex problems. Call {CONTACT_PHONE} for immediate assistance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            // Dynamically grab the icon component
            const IconComponent = (Icons as any)[service.icon] || Icons.Star;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-brand-black border border-brand-blue/30 rounded-xl hover:border-brand-yellow/50 transition-colors group relative overflow-hidden flex flex-col"
              >
                <div className="w-full h-48 md:h-56 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-black/60 backdrop-blur-sm flex items-center justify-center text-brand-yellow border border-white/10 group-hover:bg-brand-red/80 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-2 font-serif group-hover:text-brand-yellow transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 font-medium text-sm mt-auto">
                    {service.hindi}
                  </p>
                  
                  <a 
                    href={CONTACT_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="mt-6 inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-yellow transition-colors uppercase tracking-wider"
                  >
                    Consult Now <Icons.ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mid-page CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-brand-blue-dark to-brand-red-dark p-8 md:p-12 rounded-3xl text-center border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
              Need immediate guidance for your problem?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Don't wait. Share your concerns privately and get powerful traditional solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <span className="text-gray-400 font-medium uppercase tracking-widest text-sm">Call Direct:</span>
               <a href={`tel:${CONTACT_PHONE}`} className="text-3xl md:text-5xl font-bold text-brand-yellow hover:text-white transition-colors">
                 {CONTACT_PHONE}
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

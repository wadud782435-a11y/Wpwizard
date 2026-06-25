import { motion } from "motion/react";
import { PhoneCall, MessageCircle, MapPin } from "lucide-react";
import { CONTACT_PHONE, CONTACT_CALL, CONTACT_WHATSAPP } from "../constants";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-brand-dark border-t border-white/5 relative">
      <div className="container mx-auto px-4 max-w-xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-brand-yellow font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Get in Touch</h3>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Contact Guruji Today
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10">
            For fast, direct, and completely confidential support, reach out via phone call or WhatsApp. We do not require complex booking forms—just direct help when you need it.
          </p>

          <div className="space-y-6 text-left bg-brand-black p-6 rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6 text-brand-yellow" />
              </div>
              <div>
                <p className="text-gray-400 uppercase tracking-widest text-xs mb-1">Direct Phone Call</p>
                <a href={CONTACT_CALL} className="text-2xl font-bold text-white hover:text-brand-red transition-colors block">
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="w-12 h-12 rounded-full bg-green-900/40 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-gray-400 uppercase tracking-widest text-xs mb-1">WhatsApp Chat</p>
                <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:text-green-500 transition-colors block">
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <p className="text-gray-400 uppercase tracking-widest text-xs mb-1">Location</p>
                <p className="text-lg font-bold text-white">
                  Mayong, Assam, India
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col gap-4">
            <a href={CONTACT_CALL} className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(225,29,72,0.3)]">
              <PhoneCall className="w-5 h-5" /> Call {CONTACT_PHONE}
            </a>
            <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(22,163,74,0.3)]">
              <MessageCircle className="w-5 h-5" /> WhatsApp {CONTACT_PHONE}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

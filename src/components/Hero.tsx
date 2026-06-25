import { motion } from "motion/react";
import { PhoneCall, MessageCircle } from "lucide-react";
import { CONTACT_PHONE, CONTACT_CALL, CONTACT_WHATSAPP } from "../constants";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-dark/95 to-brand-black z-10" />
        <img 
          src="/src/assets/images/scary_tantrik_hero_1782382695746.jpg" 
          alt="Scary Tantrik Black Magic" 
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          onError={(e) => {
            // Fallback if image not ready
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Decorative Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/30 rounded-full blur-[100px] z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[100px] z-0" />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-brand-red mb-6 overflow-hidden shadow-[0_0_30px_rgba(225,29,72,0.5)]">
             <img src="/src/assets/images/scary_tantrik_hero_1782382695746.jpg" alt="Tantrik" className="w-full h-full object-cover" />
          </div>
          
          <h2 className="text-brand-yellow font-serif text-lg md:text-2xl mb-2 tracking-widest font-bold">
            मयोंग तांत्रिक राम ओझा
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Mayong Tantrik <br />
            <span className="text-brand-red">Ram Ojha</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-2 font-medium px-4">
            Trusted Spiritual Guidance for Love, Marriage, Family, Career, and Life Challenges
          </p>
          <p className="text-xs sm:text-sm md:text-lg text-gray-400 mb-8 px-4">
            प्रेम, विवाह, परिवार, करियर और जीवन की चुनौतियों के लिए विश्वसनीय आध्यात्मिक मार्गदर्शन
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-dark/90 backdrop-blur-md border border-brand-red/30 p-5 sm:p-6 md:p-8 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] mb-8 max-w-2xl mx-auto w-full"
        >
          <p className="text-gray-300 mb-2 uppercase tracking-widest text-xs sm:text-sm font-bold">Direct Contact For Immediate Help</p>
          <a href={CONTACT_CALL} className="block text-3xl sm:text-4xl md:text-6xl font-bold text-brand-yellow mb-6 hover:text-white transition-colors">
            {CONTACT_PHONE}
          </a>
          
          <div className="flex flex-col gap-3 justify-center w-full">
            <a
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-[0_0_20px_rgba(22,163,74,0.4)]"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Chat on WhatsApp
            </a>
            <a
              href={CONTACT_CALL}
              className="w-full bg-brand-red hover:bg-brand-red-dark text-white text-base sm:text-lg font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-[0_0_20px_rgba(225,29,72,0.4)]"
            >
              <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { PhoneCall, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { CONTACT_PHONE, CONTACT_WHATSAPP, CONTACT_CALL } from "../constants";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-4 w-full max-w-md pointer-events-auto"
      >
        <a
          href={CONTACT_CALL}
          className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-white shadow-lg rounded-full py-3 px-4 flex items-center justify-center gap-2 font-bold text-sm md:text-base transition-colors border border-blue-400/20"
        >
          <PhoneCall className="w-5 h-5 fill-current" />
          <span>Call {CONTACT_PHONE}</span>
        </a>
        <a
          href={CONTACT_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-full py-3 px-4 flex items-center justify-center gap-2 font-bold text-sm md:text-base transition-colors border border-green-400/20"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>WhatsApp Now</span>
        </a>
      </motion.div>
    </div>
  );
}

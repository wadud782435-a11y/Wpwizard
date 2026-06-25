import { CONTACT_CALL, CONTACT_PHONE } from "../constants";
import { PhoneCall } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-black/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-serif font-bold text-white leading-none">
                Mayong Tantrik
            </span>
            <span className="text-brand-red font-bold tracking-widest text-[10px] md:text-sm uppercase mt-1">
                Ram Ojha
            </span>
        </div>
        
        <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                <a href="#about" className="hover:text-brand-yellow transition-colors">About</a>
                <a href="#services" className="hover:text-brand-yellow transition-colors">Services</a>
                <a href="#contact" className="hover:text-brand-yellow transition-colors">Contact</a>
            </div>
            
            <a 
                href={CONTACT_CALL}
                className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2 rounded-full font-bold transition-colors text-sm"
            >
                <PhoneCall className="w-4 h-4" />
                <span className="hidden sm:inline">{CONTACT_PHONE}</span>
                <span className="sm:hidden">Call</span>
            </a>
        </div>
      </div>
    </nav>
  );
}

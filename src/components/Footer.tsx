import { CONTACT_PHONE } from "../constants";

export function Footer() {
  return (
    <footer className="bg-brand-black py-8 border-t border-white/10 text-center pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-serif font-bold text-white mb-4">Mayong Tantrik Ram Ojha</h2>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Providing powerful, traditional, and strictly confidential spiritual guidance to solve life's complex challenges.
        </p>
        <p className="text-xl font-bold text-brand-yellow mb-6">
          Helpline: {CONTACT_PHONE}
        </p>
        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Mayong Tantrik Ram Ojha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

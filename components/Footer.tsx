export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1C3A18] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Practice info */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold">Dr. Maya Reynolds, PsyD</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Licensed Clinical Psychologist providing compassionate, evidence-based therapy for trauma, anxiety, and relationship growth in Santa Monica, California.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#E8F0E8]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Dr. Maya</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#office" className="hover:text-white transition-colors">Our Office</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: Contact details */}
        <div className="space-y-4">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#E8F0E8]">Get in Touch</h4>
          <p className="text-sm text-gray-300">Ready to take the next step? Reach out to schedule your free 15-minute consultation.</p>
          <p className="text-sm text-gray-300"><strong>Office:</strong> 123th Street 45 W, Santa Monica, CA 90401</p>
          <p className="text-sm text-gray-300"><strong>Email:</strong> contact@drmayareynolds.com</p>
          <p className="text-sm text-gray-300"><strong>Phone:</strong> (555) 234-5678</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-gray-400">
        © 2026 Dr. Maya Reynolds Psychology Practice. All rights reserved.
      </div>
    </footer>
  );
}
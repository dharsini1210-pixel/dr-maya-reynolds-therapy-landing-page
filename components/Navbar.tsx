import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Practice Logo / Name */}
        <Link href="/" className="font-serif text-xl font-bold text-[#1C3A18]">
          Dr. Maya Reynolds <span className="block text-xs font-sans font-normal text-gray-600">Clinical Psychology & Therapy</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link href="#home" className="hover:text-[#2D5A27] transition-colors">Home</Link>
          <Link href="#about" className="hover:text-[#2D5A27] transition-colors">About Dr. Maya</Link>
          <Link href="#services" className="hover:text-[#2D5A27] transition-colors">Services</Link>
          <Link href="#office" className="hover:text-[#2D5A27] transition-colors">Our Office</Link>
          <Link href="#faq" className="hover:text-[#2D5A27] transition-colors">FAQ</Link>
        </nav>

        {/* CTA Button */}
        <div>
          <a 
            href="#contact" 
            className="bg-[#2D5A27] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1C3A18] transition-all shadow-sm"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
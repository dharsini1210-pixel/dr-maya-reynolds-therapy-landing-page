import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#FAF8F5] py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Headline, Subtext, CTAs */}
        <div className="space-y-6">
          <span className="inline-block bg-[#E8F0E8] text-[#2D5A27] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Licensed Clinical Psychologist • Dr. Maya Reynolds, PsyD
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C3A18] leading-tight">
            Compassionate Anxiety & Trauma Therapy in Santa Monica
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Empowering high-achieving adults and couples to heal from deep-rooted trauma, reduce daily burnout, and cultivate meaningful, fulfilling relationships in a safe and supportive space.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-center bg-[#2D5A27] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#1C3A18] transition-all shadow-md"
            >
              Book a Free 15-Min Consultation
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto text-center border border-[#2D5A27] text-[#2D5A27] px-8 py-3.5 rounded-full font-medium hover:bg-[#E8F0E8] transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Column: Official Therapist Photo */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <img 
              src="/maya-headshot.png" 
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
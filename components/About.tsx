export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Official Therapist Photo */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <img 
              src="/maya-headshot.png" 
              alt="Dr. Maya Reynolds in her Santa Monica practice" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Column: Official Bio & Approach */}
        <div className="space-y-6">
          <span className="text-[#2D5A27] text-xs font-semibold px-3 py-1 bg-[#E8F0E8] rounded-full uppercase tracking-wider">
            Meet Dr. Maya Reynolds, PsyD
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3A18] leading-tight">
            A Safe, Empathetic Space for Your Growth and Healing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I am a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted or emotionally on edge.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My approach is warm, collaborative, and grounded. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness, and body-oriented techniques to help you process trauma, manage professional burnout, and build deep resilience.
          </p>
          <div className="pt-2">
            <a 
              href="#contact" 
              className="inline-block bg-[#2D5A27] text-white px-7 py-3 rounded-full font-medium hover:bg-[#1C3A18] transition-all shadow-sm"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
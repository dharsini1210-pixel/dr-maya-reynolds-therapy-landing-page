import { HeartHandshake, ShieldAlert, Sparkles } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#2D5A27] text-xs font-semibold px-3 py-1 bg-[#E8F0E8] rounded-full uppercase tracking-wider">
            Specialized Care
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3A18]">
            Tailored Therapy Services for Your Unique Journey
          </h2>
          <p className="text-gray-600 text-lg">
            Evidence-based, compassionate approaches designed to help you process difficult experiences, navigate life transitions, and build deeper connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E8F0E8] flex items-center justify-center text-[#2D5A27] mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C3A18] mb-3">
                Anxiety & Stress Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Break free from constant worry and perfectionism. Using targeted CBT and mindfulness strategies, we help calm your nervous system and restore daily peace.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-sm font-semibold text-[#2D5A27]">
              Learn more →
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E8F0E8] flex items-center justify-center text-[#2D5A27] mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C3A18] mb-3">
                Trauma & EMDR Therapy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Process past painful memories and heal from emotional wounds safely. EMDR and somatic techniques help release the past so you can live fully in the present.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-sm font-semibold text-[#2D5A27]">
              Learn more →
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E8F0E8] flex items-center justify-center text-[#2D5A27] mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C3A18] mb-3">
                Relationship & Couples Counseling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Improve communication, rebuild trust, and navigate conflicts constructively. Create a secure, vulnerable, and deeply supportive bond with your partner.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-sm font-semibold text-[#2D5A27]">
              Learn more →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
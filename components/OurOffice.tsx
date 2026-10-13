export default function OurOffice() {
  return (
    <section id="office" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#2D5A27] text-xs font-semibold px-3 py-1 bg-[#E8F0E8] rounded-full uppercase tracking-wider">
            Our Physical Space
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3A18]">
            A Calm, Safe Space Designed for Healing in Santa Monica
          </h2>
          <p className="text-gray-600 text-lg">
            Located at 123th Street 45 W, Santa Monica, CA, our practice office is a quiet, private environment featuring natural light and a comfortable, uncluttered atmosphere[cite: 5].
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Office Photo 1 */}
          <div className="bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <div className="h-[350px] bg-gray-200 overflow-hidden">
              <img 
                src="/office-1.png" 
                alt="Dr. Maya Reynolds Therapy Consultation Room" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-lg font-bold text-[#1C3A18] mb-2">Private Consultation Room</h3>
              <p className="text-gray-600 text-sm">Comfortable, grounded seating with abundant natural light designed to help you feel completely at ease.</p>
            </div>
          </div>

          {/* Office Photo 2 */}
          <div className="bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <div className="h-[350px] bg-gray-200 overflow-hidden">
              <img 
                src="/office-2.png" 
                alt="Therapy Office Interior and Seating" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-lg font-bold text-[#1C3A18] mb-2">Calming & Private Environment</h3>
              <p className="text-gray-600 text-sm">An intentional, uncluttered space providing absolute client confidentiality and peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
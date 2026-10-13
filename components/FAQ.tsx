export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#2D5A27] text-xs font-semibold px-3 py-1 bg-[#E8F0E8] rounded-full uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3A18]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about starting therapy and what to expect during our sessions.
          </p>
        </div>

        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[#1C3A18] mb-2">
              What can I expect in the first session?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your first session is all about getting to know you. We will discuss what brings you to therapy, your current challenges, and what you hope to achieve, ensuring you feel comfortable and respected every step of the way.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[#1C3A18] mb-2">
              Do you offer virtual sessions or only in-person?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We offer both secure telehealth video sessions for clients across the state as well as in-person sessions at our private office space, depending on what works best for your schedule and comfort.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[#1C3A18] mb-2">
              How do I book a free 15-minute consultation?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You can click any of the "Schedule Consultation" buttons on this page to send a quick message or book a time directly. We’ll chat briefly to discuss your needs and see if we're a good fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
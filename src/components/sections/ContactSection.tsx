export default function ContactSection() {
  return (
    <section id="contact" className="bg-ink text-paper py-24 md:py-28 mt-24">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <div>
          <p className="case-index text-brass text-sm mb-4">No. 008 — Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
            Every conversation begins in confidence.
          </h2>
          <p className="font-sans text-paper/60 leading-relaxed max-w-md">
            Tell us briefly about the situation. A partner will respond
            directly, typically within one business day, and always
            under confidentiality.
          </p>
        </div>
        <form className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="bg-transparent border border-paper/25 px-4 py-3 font-sans text-sm placeholder:text-paper/40 focus:border-brass outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              className="bg-transparent border border-paper/25 px-4 py-3 font-sans text-sm placeholder:text-paper/40 focus:border-brass outline-none"
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="w-full bg-transparent border border-paper/25 px-4 py-3 font-sans text-sm placeholder:text-paper/40 focus:border-brass outline-none"
          />
          <textarea
            name="message"
            placeholder="Briefly, what would you like to discuss?"
            rows={4}
            className="w-full bg-transparent border border-paper/25 px-4 py-3 font-sans text-sm placeholder:text-paper/40 focus:border-brass outline-none"
          />
          <button
            type="submit"
            className="bg-brass text-ink font-sans text-sm px-7 py-3.5 hover:bg-paper transition-colors"
          >
            Send confidentially
          </button>
        </form>
      </div>
    </section>
  );
}

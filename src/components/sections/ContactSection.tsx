export default function ContactSection() {
  return (
    <section id="contact" className="bg-cream text-ink py-24 md:py-24 ">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <div>
          <p className="case-index text-ink font-display text-lg mb-4">
          Get in Touch
          </p>

          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6 text-ink">
            Every conversation begins in{" "}
            <span className="text-gradient-gold">confidence.</span>
          </h2>

          <p className="font-sans text-ink/60 leading-relaxed max-w-md">
            Tell us briefly about the situation. A partner will respond
            directly, typically within one business day, and always under
            confidentiality.
          </p>
        </div>

        <form className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="rounded-full bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Work email"
              className="rounded-full bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors"
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company"
            className="w-full rounded-full bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors"
          />

          <textarea
            name="message"
            placeholder="Briefly, what would you like to discuss?"
            rows={4}
            className="w-full rounded-2xl bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors resize-none"
          />

          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-7 py-3.5 shadow-lg hover:opacity-90 transition-opacity"
          >
            Send confidentially
          </button>
        </form>
      </div>
    </section>
  );
}

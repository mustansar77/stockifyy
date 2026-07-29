import { stats } from "@/content/stats";

export default function StatsSection() {
  return (
    <section className="bg-teal/5 border-y border-line py-20 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-paper rounded-[20px] border border-line p-9 text-center"
            >
              <p className="font-display text-4xl md:text-5xl text-ink mb-3">
                {s.value}
              </p>
              <p className="font-sans text-sm text-slate uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

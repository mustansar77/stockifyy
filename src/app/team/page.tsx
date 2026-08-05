import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Professional financial advisory and stock market guidance to help you grow, protect, and manage your wealth with confidence.",
};

export default function TeamPage() {
  const leaders = team.filter((m) =>
    ["Chairman", "Chief Executive Officer"].includes(m.role)
  );
  const directors = team.filter(
    (m) => !["Chairman", "Chief Executive Officer"].includes(m.role)
  );

  return (
    <div className="bg-cream">
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-goldDeep">
            Stockifyy - Wealth Multiplier
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-ink font-semibold mt-5">
            Our Team
          </h1>
          <p className="font-sans text-slate mt-4 leading-relaxed">
            Professional Financial Advisory &amp; Stock Market Guidance to Help
            You Grow, Protect, and Manage Your Wealth with Confidence.
          </p>
        </div>

        {/* Leadership row — Chairman & CEO centered */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {leaders.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              className="w-[calc(50%-1rem)] sm:w-56 max-w-[220px]"
            />
          ))}
        </div>

        {/* Directors row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-6">
          {directors.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}

function MemberCard({
  member,
  className = "",
}: {
  member: { name: string; role: string; image: any };
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center text-center rounded-2xl border border-line bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`}
    >
      <div className="p-3 pb-0 w-full">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 45vw"
          />
        </div>
      </div>
      <div className="px-4 py-5">
        <h2 className="font-display text-lg text-ink">{member.name}</h2>
        <p className="font-sans text-sm text-gold font-medium mt-1">
          {member.role}
        </p>
      </div>
    </div>
  );
}

type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle:string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  index,
  title,
  subtitle,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto" : ""}>
      <p className="case-index font-display text-ink text-lg mb-4">{index}</p>
      <h2
        className={`font-display text-3xl md:text-5xl max-w-2xl text-ink ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {title} <span className="text-gradient-gold">{subtitle}</span>
      </h2>
      {description && (
        <p
          className={`font-sans mt-5 max-w-xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-paper/60" : "text-slate"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

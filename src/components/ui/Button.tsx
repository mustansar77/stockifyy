import Link from "next/link";
import { cx } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "accent";
  className?: string;
};

const variants = {
  primary:
    "bg-gradient-to-r from-gold to-goldDeep text-white shadow-lg hover:opacity-90",
  outline:
    "border border-gold/40 text-goldDeep hover:bg-gold/5",
  accent: "bg-gold text-ink hover:bg-cream",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-block font-sans text-sm px-7 py-3.5 transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

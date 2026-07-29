import Link from "next/link";
import { cx } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "accent";
  className?: string;
};

const variants = {
  primary: "bg-ink text-paper hover:bg-teal",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  accent: "bg-brass text-ink hover:bg-paper",
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

"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(raw: string) {
  const match = raw.match(/^([^0-9.]*)([0-9]*\.?[0-9]+)([^0-9]*)$/);
  if (!match) return { prefix: "", number: 0, decimals: 0, suffix: raw };
  const [, prefix, numberStr, suffix] = match;
  const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;
  return { prefix, number: parseFloat(numberStr), decimals, suffix };
}

function format(prefix: string, current: number, decimals: number, suffix: string) {
  return `${prefix}${current.toFixed(decimals)}${suffix}`;
}

/** Animates a stat like "500+" or "$4.2B+" counting up from 0 when it scrolls into view. */
export default function Counter({
  value,
  duration = 1500,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => {
    const { prefix, decimals, suffix } = parseValue(value);
    return format(prefix, 0, decimals, suffix);
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { prefix, number, decimals, suffix } = parseValue(value);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(format(prefix, number, decimals, suffix));
      return;
    }

    let frame: number;
    let started = false;

    const step = (start: number, now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(format(prefix, number * eased, decimals, suffix));
      if (progress < 1) {
        frame = requestAnimationFrame((t) => step(start, t));
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            frame = requestAnimationFrame((t) => step(t, t));
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Link2, Mail, Check } from "lucide-react";

export default function ShareLinks({ title, path }: { title: string; path: string }) {
  const [url, setUrl] = useState(path);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.origin + path);
  }, [path]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard permission denied or unavailable — no-op
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-gold hover:text-goldDeep transition-colors"
      >
        {copied ? (
          <Check className="size-4 text-gold" aria-hidden="true" />
        ) : (
          <Link2 className="size-4" aria-hidden="true" />
        )}
        {copied ? "Copied" : "Copy link"}
      </button>

      <a
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
        className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-gold hover:text-goldDeep transition-colors"
      >
        <Mail className="size-4" aria-hidden="true" />
        Email
      </a>
    </div>
  );
}

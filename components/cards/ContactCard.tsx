import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const links: { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string; href: string }[] = [
  {
    icon: Mail,
    label: "putman.patrick@gmail.com",
    href: "mailto:putman.patrick@gmail.com",
  },
  {
    icon: GitHubIcon,
    label: "github.com/patrickputmansec",
    href: "https://github.com/patrickputmansec",
  },
  {
    icon: LinkedInIcon,
    label: "linkedin.com/in/patrickputman",
    href: "https://linkedin.com/in/patrickputman",
  },
];

export function ContactCard() {
  return (
    <div className="relative col-span-2 card-base p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 scanline-overlay pointer-events-none" aria-hidden="true" />
      <div>
        <p className="text-[10px] font-mono font-medium text-neon/60 uppercase tracking-widest mb-2">
          // connect
        </p>
        <p className="text-mist text-xs mb-4">
          Have a security concern or need an audit? Reach out.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="flex items-center gap-3 rounded-lg bg-surface border border-edge px-4 py-3 text-mist hover:text-neon hover:border-neon/30 transition-colors group"
          >
            <Icon width={16} height={16} className="flex-shrink-0" />
            <span className="text-sm font-mono truncate">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

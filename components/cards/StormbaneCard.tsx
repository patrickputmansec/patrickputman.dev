import { ArrowUpRight } from "lucide-react";

export function StormbaneCard() {
  return (
    <a
      href="https://www.stormbane.net"
      target="_blank"
      rel="noopener noreferrer"
      className="relative card-base p-6 flex flex-col justify-between hover:border-neon/30 transition-colors group overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-neon/[0.04] blur-[60px] pointer-events-none"
        aria-hidden="true"
      />
      <div>
        <svg
          viewBox="0 0 15 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 mb-4 drop-shadow-[0_0_12px_rgba(0,255,65,0.4)]"
          aria-hidden="true"
        >
          <path
            d="M12 0L1 10h5L3 24l11-11H9z"
            fill="currentColor"
            className="text-neon"
          />
        </svg>
        <p className="text-ink font-semibold text-base mb-1">Stormbane Security</p>
        <p className="text-mist text-xs mb-3">Founder</p>
        <p className="text-dim text-xs leading-relaxed">
          AI-enriched vulnerability scanning &amp; security consulting.
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="font-mono text-[10px] text-neon/40">stormbane.net</span>
        <ArrowUpRight
          size={14}
          className="text-dim group-hover:text-neon transition-colors"
        />
      </div>
    </a>
  );
}

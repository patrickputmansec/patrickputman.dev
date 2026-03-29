import { ArrowUpRight } from "lucide-react";

export function StormbaneCard() {
  return (
    <a
      href="https://www.stormbane.net"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-edge bg-panel p-6 flex flex-col justify-between hover:border-bolt/40 transition-colors group"
    >
      <svg
        viewBox="0 0 15 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 mb-4"
        aria-hidden="true"
      >
        <path
          d="M12 0L1 10h5L3 24l11-11H9z"
          fill="currentColor"
          className="text-bolt"
        />
      </svg>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-ink font-semibold text-sm">Stormbane Security</p>
          <p className="text-mist text-xs">Founder</p>
        </div>
        <ArrowUpRight
          size={14}
          className="text-dim group-hover:text-bolt transition-colors"
        />
      </div>
    </a>
  );
}

import { ArrowUpRight } from "lucide-react";

export function LatestPostCard() {
  return (
    <a
      href="https://www.stormbane.net/blog/cicd-supply-chain-risks"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-edge bg-panel p-6 flex flex-col justify-between hover:border-bolt/40 transition-colors group"
    >
      <div>
        <p className="text-xs font-medium text-mist uppercase tracking-wide mb-3">
          Latest Post
        </p>
        <p className="text-ink text-sm font-semibold leading-snug">
          CI/CD Supply Chain Risks
        </p>
        <p className="text-dim text-xs mt-1">stormbane.net/blog</p>
      </div>
      <div className="flex justify-end mt-4">
        <ArrowUpRight
          size={14}
          className="text-dim group-hover:text-bolt transition-colors"
        />
      </div>
    </a>
  );
}

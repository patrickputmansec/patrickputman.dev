import { ExternalLink } from "lucide-react";

function HeatmapGrid() {
  const weeks = 12;
  const days = 7;
  const cells: { x: number; y: number; opacity: number }[] = [];

  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const hash = (w * 7 + d) * 2654435761;
      const rand = ((hash >>> 0) % 100) / 100;
      let opacity = 0;
      if (rand > 0.7) opacity = 0.2;
      if (rand > 0.82) opacity = 0.4;
      if (rand > 0.9) opacity = 0.7;
      if (rand > 0.96) opacity = 1;
      cells.push({ x: w * 14, y: d * 14, opacity });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${weeks * 14} ${days * 14}`}
      className="w-full h-auto"
      aria-hidden="true"
    >
      {cells.map(({ x, y, opacity }, i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="10"
          height="10"
          rx="2"
          fill={opacity === 0 ? "var(--color-edge)" : "var(--color-ok)"}
          opacity={opacity === 0 ? 1 : opacity}
        />
      ))}
    </svg>
  );
}

export function GitHubCard() {
  return (
    <a
      href="https://github.com/patrickputmansec"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-edge bg-panel p-6 flex flex-col justify-between hover:border-bolt/40 transition-colors group"
    >
      <div className="mb-4">
        <HeatmapGrid />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-ink font-semibold text-sm">GitHub</p>
          <p className="text-mist text-xs">@patrickputmansec</p>
        </div>
        <ExternalLink
          size={14}
          className="text-dim group-hover:text-bolt transition-colors"
        />
      </div>
    </a>
  );
}

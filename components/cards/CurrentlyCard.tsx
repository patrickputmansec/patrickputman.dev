export function CurrentlyCard() {
  return (
    <div className="relative rounded-2xl border border-edge bg-panel p-6 flex flex-col justify-between overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-[150px] h-[150px] rounded-full bg-ok/[0.04] blur-[60px] pointer-events-none"
        aria-hidden="true"
      />
      <p className="text-xs font-medium text-mist uppercase tracking-wide mb-3">
        Currently
      </p>
      <p className="text-ink text-sm font-semibold leading-snug mb-4">
        Building AI-powered vulnerability scanning tools
      </p>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-75 animate-pulse-dot" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ok shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
        </span>
        <span className="text-ok text-xs font-medium">active</span>
      </div>
    </div>
  );
}

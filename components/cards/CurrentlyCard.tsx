export function CurrentlyCard() {
  return (
    <div className="relative card-base p-6 flex flex-col justify-between overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-[120px] h-[120px] rounded-full bg-neon/[0.04] blur-[60px] pointer-events-none"
        aria-hidden="true"
      />
      <div>
        <p className="text-[10px] font-mono font-medium text-neon/60 uppercase tracking-widest mb-3">
          // currently
        </p>
        <p className="text-ink text-base font-semibold leading-snug mb-3">
          Building AI-powered vulnerability scanning tools
        </p>
        <p className="text-mist text-xs leading-relaxed mb-4">
          Automating the tedious parts of security audits so humans can focus on the hard problems.
        </p>
      </div>
      <div>
        <div className="h-px bg-neon/10 mb-3" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 animate-pulse-dot" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon shadow-[0_0_8px_rgba(0,255,65,0.6)]" />
            </span>
            <span className="text-neon text-xs font-mono font-medium">active</span>
          </div>
          <span className="text-dim text-[10px] font-mono">since 2024</span>
        </div>
      </div>
    </div>
  );
}

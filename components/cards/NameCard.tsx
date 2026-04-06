export function NameCard() {
  return (
    <div className="relative col-span-1 sm:col-span-2 row-span-1 card-base p-5 sm:p-6 overflow-hidden min-w-0">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-[15%] w-[250px] h-[250px] rounded-full bg-neon/[0.06] blur-[100px] animate-glow-drift-1" />
      </div>
      <div className="absolute inset-0 scanline-overlay pointer-events-none" aria-hidden="true" />
      <div className="relative flex flex-col justify-between h-full">
        <div>
          <p className="font-mono text-[10px] text-neon/50 mb-3 tracking-wider">
            &gt; whoami
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2 min-w-0">
            <h1 className="text-[1.625rem] leading-tight sm:text-4xl font-bold tracking-[-0.03em] text-white drop-shadow-[0_0_20px_rgba(0,255,65,0.15)] min-w-0 break-words">
              Patrick Putman
            </h1>
            <svg
              viewBox="0 0 15 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 sm:h-8 flex-shrink-0 drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]"
              aria-hidden="true"
            >
              <path
                d="M12 0L1 10h5L3 24l11-11H9z"
                fill="currentColor"
                className="text-neon"
              />
            </svg>
          </div>
          <p className="text-mist text-sm sm:text-base leading-snug">
            <span className="block sm:inline">Security Researcher &amp; Engineer</span>
            <span className="hidden sm:inline text-dim mx-2">·</span>
            <span className="block sm:inline text-dim">Birmingham, AL</span>
          </p>
        </div>
        <p className="font-mono text-xs text-neon/40 mt-4">
          Breaking things so you don&apos;t have to.
        </p>
      </div>
    </div>
  );
}

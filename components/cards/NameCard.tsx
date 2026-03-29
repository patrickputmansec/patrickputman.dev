export function NameCard() {
  return (
    <div className="relative col-span-2 row-span-1 rounded-2xl border border-edge bg-panel p-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-bolt/[0.08] blur-[100px] animate-glow-drift-1" />
        <div className="absolute top-[30%] right-[10%] w-[250px] h-[250px] rounded-full bg-bolt/[0.05] blur-[80px] animate-glow-drift-2" />
      </div>
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
            Patrick Putman
          </h1>
          <svg
            viewBox="0 0 15 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 sm:h-8 flex-shrink-0"
            aria-hidden="true"
          >
            <path
              d="M12 0L1 10h5L3 24l11-11H9z"
              fill="currentColor"
              className="text-bolt"
            />
          </svg>
        </div>
        <p className="text-mist text-base">Security Researcher &amp; Engineer</p>
      </div>
    </div>
  );
}

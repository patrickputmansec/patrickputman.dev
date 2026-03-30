import { ExternalLink } from "lucide-react";

export function BeaconCard() {
  return (
    <a
      href="https://github.com/patrickputmansec/beacon"
      target="_blank"
      rel="noopener noreferrer"
      className="relative card-base border-neon/15 p-5 flex flex-col justify-between hover:border-neon/30 transition-colors group overflow-hidden"
    >
      <div
        className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-neon/[0.05] blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-10" aria-hidden="true" />

      <div className="relative z-20">
        <div className="rounded-lg bg-void border border-neon/10 overflow-hidden mb-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-neon/10">
            <span className="w-2 h-2 rounded-full bg-crit/70" />
            <span className="w-2 h-2 rounded-full bg-warn/70" />
            <span className="w-2 h-2 rounded-full bg-neon/70" />
            <span className="text-[10px] text-dim font-mono ml-2">beacon v0.4.1</span>
          </div>
          <div className="p-2.5 font-mono text-[11px] leading-[1.5]">
            <p className="text-neon">
              <span className="text-neon/60">$</span> beacon scan --target api.example.com
            </p>
            <p className="text-neon/40">[*] Scanning target surface...</p>
            <p className="text-neon/60">[+] Port 443 — TLS 1.2 (weak cipher)</p>
            <p className="text-warn">[!] CVE-2024-3094 — xz backdoor</p>
            <p className="text-neon/60">[+] Exposed .env — 3 secrets</p>
            <p className="text-neon">[✓] 3 findings · 1 critical</p>
            <p className="text-neon/80">
              <span className="text-neon/60">$</span>
              <span className="inline-block w-[6px] h-[12px] bg-neon ml-1 animate-blink-caret" />
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex items-center justify-between">
        <div>
          <p className="text-ink font-semibold text-sm">Beacon</p>
          <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider bg-neon/10 text-neon px-2 py-0.5 rounded-full border border-neon/20">
            Open Source
          </span>
        </div>
        <ExternalLink
          size={14}
          className="text-dim group-hover:text-neon transition-colors"
        />
      </div>
    </a>
  );
}

import { ExternalLink } from "lucide-react";

export function BeaconCard() {
  return (
    <a
      href="https://github.com/patrickputmansec/beacon"
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-2xl border border-ok/20 bg-panel p-5 flex flex-col justify-between hover:border-ok/40 transition-colors group overflow-hidden"
    >
      {/* Green ambient glow */}
      <div
        className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-ok/[0.06] blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 scanline-overlay pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Terminal window */}
      <div className="relative z-20">
        <div className="rounded-lg bg-void/80 border border-ok/10 overflow-hidden mb-4">
          {/* Title bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-ok/10">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-ok/70" />
            <span className="text-[10px] text-dim font-mono ml-2">beacon v0.4.1</span>
          </div>

          {/* Terminal body */}
          <div className="p-3 font-mono text-[11px] leading-[1.6] space-y-0.5">
            <p className="text-ok">
              <span className="text-ok/60">$</span> beacon scan --target api.example.com
            </p>
            <p className="text-ok/50">[*] Enumerating subdomains...</p>
            <p className="text-ok/50">[*] Scanning target surface...</p>
            <p className="text-ok/70">[+] Port 443/tcp open — TLS 1.2 (weak cipher)</p>
            <p className="text-warn">[!] CVE-2024-3094 — xz backdoor detected</p>
            <p className="text-ok/70">[+] Exposed .env at /.env — 3 secrets</p>
            <p className="text-ok">[✓] 3 findings · 1 critical · report ready</p>
            <p className="text-ok/80">
              <span className="text-ok/60">$</span>
              <span className="inline-block w-[6px] h-[13px] bg-ok ml-1 animate-blink-caret" />
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 flex items-center justify-between">
        <div>
          <p className="text-ink font-semibold text-sm">Beacon</p>
          <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider bg-ok/10 text-ok px-2 py-0.5 rounded-full border border-ok/20">
            Open Source
          </span>
        </div>
        <ExternalLink
          size={14}
          className="text-dim group-hover:text-ok transition-colors"
        />
      </div>
    </a>
  );
}

import { ExternalLink } from "lucide-react";

export function BeaconCard() {
  return (
    <a
      href="https://github.com/patrickputmansec/beacon"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-edge bg-panel p-6 flex flex-col justify-between hover:border-bolt/40 transition-colors group"
    >
      <div>
        <div className="rounded-lg bg-void border border-edge p-3 mb-4 font-mono text-xs leading-relaxed">
          <p className="text-ok">$ beacon scan --target api.example.com</p>
          <p className="text-mist mt-1">[*] Scanning target surface...</p>
          <p className="text-mist">[+] 3 findings detected</p>
          <p className="text-ok">[✓] Report ready</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-ink font-semibold text-sm">Beacon</p>
          <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider bg-bolt/10 text-bolt px-2 py-0.5 rounded-full">
            Open Source
          </span>
        </div>
        <ExternalLink
          size={14}
          className="text-dim group-hover:text-bolt transition-colors"
        />
      </div>
    </a>
  );
}

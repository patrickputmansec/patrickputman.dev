export function StatusCard() {
  return (
    <div className="relative card-base p-5 overflow-hidden font-mono flex flex-col justify-between">
      <div className="absolute inset-0 scanline-overlay pointer-events-none" aria-hidden="true" />
      <div className="relative space-y-2 text-xs leading-relaxed">
        <div className="flex items-center justify-between">
          <span className="text-dim text-[10px] tracking-wider">SYS.STATUS</span>
          <span className="text-neon text-[10px] flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_6px_rgba(0,255,65,0.6)]" />
            ONLINE
          </span>
        </div>
        <div className="h-px bg-neon/10" />
        <div className="flex justify-between">
          <span className="text-mist">uptime</span>
          <span className="text-neon/80">365d 08h</span>
        </div>
        <div className="flex justify-between">
          <span className="text-mist">threat_lvl</span>
          <span className="text-warn font-semibold">ELEVATED</span>
        </div>
        <div className="flex justify-between">
          <span className="text-mist">scans_run</span>
          <span className="text-neon/80">2,847</span>
        </div>
        <div className="flex justify-between">
          <span className="text-mist">vulns_found</span>
          <span className="text-crit font-semibold">1,203</span>
        </div>
        <div className="h-px bg-neon/10" />
        <div className="flex justify-between">
          <span className="text-mist">last_scan</span>
          <span className="text-neon/60">2m ago</span>
        </div>
        <div className="flex justify-between">
          <span className="text-mist">targets</span>
          <span className="text-neon/60">142 active</span>
        </div>
        <div className="flex justify-between">
          <span className="text-mist">encryption</span>
          <span className="text-neon/80">AES-256</span>
        </div>
      </div>
    </div>
  );
}

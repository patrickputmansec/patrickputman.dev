import { MapPin } from "lucide-react";

export function LocationCard() {
  return (
    <div className="relative rounded-2xl border border-edge bg-panel p-6 overflow-hidden flex flex-col justify-between">
      {/* Subtle topo-line pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        aria-hidden="true"
      >
        <pattern
          id="topo"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 20 Q10 10 20 20 T40 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-bolt"
          />
          <path
            d="M0 30 Q10 20 20 30 T40 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-bolt"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>
      <div className="relative">
        <MapPin size={18} className="text-mist mb-3" />
        <p className="text-ink font-semibold text-sm">Birmingham, AL</p>
      </div>
    </div>
  );
}

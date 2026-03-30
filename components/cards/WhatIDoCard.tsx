const skills = [
  "Cloud Security",
  "Kubernetes",
  "CI/CD",
  "Identity & OIDC",
  "Terraform",
  "Pentesting",
];

export function WhatIDoCard() {
  return (
    <div className="relative col-span-2 card-base p-6 sm:p-8 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 scanline-overlay pointer-events-none" aria-hidden="true" />
      <p className="text-[10px] font-mono font-medium text-neon/60 uppercase tracking-widest mb-4">
        // what_i_do
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-mono font-medium px-3 py-1.5 rounded border border-neon/20 text-neon/80 bg-neon/[0.05]"
          >
            {skill}
          </span>
        ))}
      </div>
      <p className="text-mist text-sm leading-relaxed">
        I find and fix the attack surface that modern organizations expose as
        they scale — CI/CD pipelines, cloud infrastructure, Kubernetes clusters,
        and identity systems. From automated scanning to manual pentesting,
        I turn exposed infrastructure into hardened systems.
      </p>
    </div>
  );
}

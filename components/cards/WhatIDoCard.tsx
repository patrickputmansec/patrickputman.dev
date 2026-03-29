const skills = ["Cloud Security", "Kubernetes", "CI/CD", "Identity & OIDC"];

export function WhatIDoCard() {
  return (
    <div className="col-span-2 rounded-2xl border border-edge bg-panel p-8 flex flex-col justify-center">
      <p className="text-xs font-medium text-mist uppercase tracking-wide mb-4">
        What I Do
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-edge text-ink bg-surface"
          >
            {skill}
          </span>
        ))}
      </div>
      <p className="text-mist text-sm leading-relaxed">
        I find and fix the attack surface that modern organizations expose as
        they scale — CI/CD pipelines, cloud infrastructure, Kubernetes clusters,
        and identity systems.
      </p>
    </div>
  );
}

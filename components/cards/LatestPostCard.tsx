"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";

const BLOG_BASE = "https://www.stormbane.net/blog";

const posts = [
  { slug: "cicd-supply-chain-risks", title: "Your CI/CD Pipeline Has Production Credentials", tag: "CI/CD" },
  { slug: "kubernetes-rbac-misconfigs", title: "Kubernetes RBAC: The Same Five Misconfigs", tag: "K8S" },
  { slug: "beacon-intro", title: "One Passive Scan, Three Attack Paths", tag: "BEACON" },
  { slug: "terraform-state-security", title: "Your Terraform State File Is a Secrets Dump", tag: "IaC" },
  { slug: "how-to-secure-github-actions", title: "How to Secure GitHub Actions", tag: "CI/CD" },
  { slug: "kubernetes-container-escape", title: "Container Escape in Kubernetes", tag: "K8S" },
];

const INTERVAL = 4000;

export function LatestPostCard() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const advance = useCallback(() => {
    setFading(true);
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % posts.length);
      setFading(false);
    }, 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, INTERVAL);
    return () => clearInterval(id);
  }, [advance]);

  const post = posts[index];

  return (
    <a
      href={`${BLOG_BASE}/${post.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative card-base p-6 flex flex-col justify-between hover:border-neon/30 transition-colors group overflow-hidden"
    >
      <div>
        <p className="text-[10px] font-mono font-medium text-neon/60 uppercase tracking-widest mb-4">
          // latest_posts
        </p>
        <div
          className="transition-opacity duration-300 min-h-[3.5rem]"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <span className="inline-block font-mono text-[10px] text-neon/70 border border-neon/20 rounded px-1.5 py-0.5 mb-2">
            {post.tag}
          </span>
          <p className="text-ink text-base font-semibold leading-snug">
            {post.title}
          </p>
        </div>
      </div>
      <div>
        <p className="text-dim font-mono text-[11px] mb-3">stormbane.net/blog</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {posts.map((_, i) => (
              <span
                key={i}
                className={`block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  i === index ? "bg-neon shadow-[0_0_4px_rgba(0,255,65,0.6)]" : "bg-edge"
                }`}
              />
            ))}
          </div>
          <ArrowUpRight
            size={14}
            className="text-dim group-hover:text-neon transition-colors"
          />
        </div>
      </div>
    </a>
  );
}

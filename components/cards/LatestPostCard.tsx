"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";

const BLOG_BASE = "https://www.stormbane.net/blog";

const posts = [
  { slug: "cicd-supply-chain-risks", title: "Your CI/CD Pipeline Has Production Credentials" },
  { slug: "kubernetes-rbac-misconfigs", title: "Kubernetes RBAC: The Same Five Misconfigs" },
  { slug: "beacon-intro", title: "One Passive Scan, Three Attack Paths" },
  { slug: "terraform-state-security", title: "Your Terraform State File Is a Secrets Dump" },
  { slug: "how-to-secure-github-actions", title: "How to Secure GitHub Actions" },
  { slug: "kubernetes-container-escape", title: "Container Escape in Kubernetes" },
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
      className="rounded-2xl border border-edge bg-panel p-6 flex flex-col justify-between hover:border-bolt/40 transition-colors group relative overflow-hidden"
    >
      <div>
        <p className="text-xs font-medium text-mist uppercase tracking-wide mb-3">
          Latest Posts
        </p>
        <div
          className="transition-opacity duration-300"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <p className="text-ink text-sm font-semibold leading-snug">
            {post.title}
          </p>
        </div>
        <p className="text-dim text-xs mt-2">stormbane.net/blog</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-1">
          {posts.map((_, i) => (
            <span
              key={i}
              className={`block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                i === index ? "bg-bolt" : "bg-edge"
              }`}
            />
          ))}
        </div>
        <ArrowUpRight
          size={14}
          className="text-dim group-hover:text-bolt transition-colors"
        />
      </div>
    </a>
  );
}

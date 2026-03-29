"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";

interface StaggerGridProps {
  children: ReactNode;
}

export function StaggerGrid({ children }: StaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cards = el.querySelectorAll(":scope > div > *");
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}

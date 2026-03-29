"use client";

import { useEffect, useRef } from "react";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";
const COL_WIDTH = 20;
const FONT_SIZE = 13;

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let cols: number;
    let drops: number[];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      cols = Math.floor(canvas!.width / COL_WIDTH);
      drops = Array.from({ length: cols }, () =>
        Math.random() * -100
      );
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx!.fillStyle = "rgba(8, 8, 13, 0.08)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * COL_WIDTH;
        const y = drops[i] * FONT_SIZE;

        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx!.fillStyle = "rgba(52, 211, 153, 0.9)";
        } else if (brightness > 0.7) {
          ctx!.fillStyle = "rgba(52, 211, 153, 0.3)";
        } else {
          ctx!.fillStyle = "rgba(52, 211, 153, 0.08)";
        }

        ctx!.fillText(char, x, y);

        if (y > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      aria-hidden="true"
    />
  );
}

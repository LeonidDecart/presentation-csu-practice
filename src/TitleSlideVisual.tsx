/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export function TitleSlideVisual() {
  return (
    <div className="title-slide-art relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden rounded-2xl border border-blue-100/60 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 py-2">
      {/* Ambient glow */}
      <div className="title-art-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

      <svg
        viewBox="0 -40 420 460"
        preserveAspectRatio="xMidYMid meet"
        className="relative w-full h-full max-h-[400px] px-4 py-3"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="de-brand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
          <linearGradient id="de-brand-soft" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="de-face-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="de-face-left" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="de-face-right" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
          <filter id="de-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid dots */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={40 + col * 48}
              cy={40 + row * 48}
              r="1"
              fill="#2563eb"
              opacity={0.08 + (row + col) * 0.008}
            />
          ))
        )}

        {/* Network connections */}
        <g stroke="url(#de-brand)" strokeWidth="1.2" opacity="0.25" fill="none">
          <path d="M 60 120 Q 140 80 210 100" className="title-art-line" />
          <path d="M 350 140 Q 280 90 210 100" className="title-art-line-delay" />
          <path d="M 80 320 Q 160 280 210 260" className="title-art-line" />
          <path d="M 340 300 Q 270 270 210 260" className="title-art-line-delay" />
          <path d="M 210 100 L 210 260" strokeDasharray="4 4" opacity="0.2" />
        </g>

        {/* Outer nodes */}
        <g className="title-art-float-slow">
          <circle cx="60" cy="120" r="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
          <circle cx="60" cy="120" r="3" fill="#2563eb" />
          <text x="60" y="145" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="600">
            ВУЗ
          </text>
        </g>
        <g className="title-art-float" style={{ animationDelay: "-1.5s" }}>
          <circle cx="350" cy="140" r="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
          <circle cx="350" cy="140" r="3" fill="#93c5fd" />
          <text x="350" y="165" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="600">
            HR
          </text>
        </g>
        <g className="title-art-float-delay">
          <circle cx="80" cy="320" r="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
          <circle cx="80" cy="320" r="3" fill="#2563eb" />
          <text x="80" y="345" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="600">
            CRM
          </text>
        </g>
        <g className="title-art-float-slow" style={{ animationDelay: "-3s" }}>
          <circle cx="340" cy="300" r="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
          <circle cx="340" cy="300" r="3" fill="#93c5fd" />
          <text x="340" y="325" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="600">
            API
          </text>
        </g>

        {/* Isometric layered stack — center */}
        <g transform="translate(210, 212)" className="title-art-float">
          {/* Layer 3 — bottom */}
          <g transform="translate(0, 28)">
            <polygon points="-52,0 0,-30 52,0 0,30" fill="url(#de-face-top)" opacity="0.55" />
            <polygon points="-52,0 -52,14 0,44 0,30" fill="url(#de-face-left)" opacity="0.7" />
            <polygon points="52,0 52,14 0,44 0,30" fill="url(#de-face-right)" opacity="0.5" />
            <text y="6" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" opacity="0.9">
              MySQL
            </text>
          </g>
          {/* Layer 2 — middle */}
          <g transform="translate(0, 4)">
            <polygon points="-46,0 0,-26 46,0 0,26" fill="url(#de-face-top)" opacity="0.75" />
            <polygon points="-46,0 -46,12 0,38 0,26" fill="url(#de-face-left)" opacity="0.85" />
            <polygon points="46,0 46,12 0,38 0,26" fill="url(#de-face-right)" opacity="0.65" />
            <text y="5" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">
              Bitrix D7
            </text>
          </g>
          {/* Layer 1 — top */}
          <g transform="translate(0, -22)" filter="url(#de-glow)">
            <polygon points="-40,0 0,-23 40,0 0,23" fill="url(#de-face-top)" />
            <polygon points="-40,0 -40,11 0,34 0,23" fill="url(#de-face-left)" />
            <polygon points="40,0 40,11 0,34 0,23" fill="url(#de-face-right)" />
            <text y="4" textAnchor="middle" fill="white" fontSize="8" fontWeight="800">
              Портал
            </text>
          </g>

          {/* Pulse ring */}
          <circle r="58" fill="none" stroke="url(#de-brand)" strokeWidth="1" opacity="0.2" className="title-art-pulse-ring" />
        </g>

        {/* Floating accent chips */}
        <g className="title-art-float-delay">
          <rect x="288" y="82" width="72" height="22" rx="6" fill="white" stroke="#bfdbfe" strokeWidth="1" />
          <text x="324" y="97" textAnchor="middle" fill="#2563eb" fontSize="8" fontWeight="700">
            Enterprise
          </text>
        </g>
        <g className="title-art-float-slow">
          <rect x="58" y="228" width="64" height="22" rx="6" fill="white" stroke="#bfdbfe" strokeWidth="1" />
          <text x="90" y="243" textAnchor="middle" fill="#2563eb" fontSize="8" fontWeight="700">
            Интеграция
          </text>
        </g>

        {/* Brand mark */}
        <text x="210" y="395" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="800" letterSpacing="0.12em" opacity="0.45">
          ЦИФРОВОЙ ЭЛЕМЕНТ
        </text>
      </svg>
    </div>
  );
}

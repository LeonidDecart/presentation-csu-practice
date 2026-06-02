/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import { Play, Circle } from "lucide-react";
import demoVideo from "../media/itsworks.mp4";

export function VideoDemoPanel({ isActive }: { isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.currentTime = 0;
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <div className="w-full h-full min-h-[320px] flex flex-col rounded-xl border border-slate-200 bg-slate-950 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.35)] overflow-hidden">
      <div className="flex items-center justify-between gap-2 bg-slate-900 border-b border-slate-800 px-3 py-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
          <span className="text-[9px] font-mono text-slate-400 ml-1 hidden sm:inline">
            demo · intern.digital-element.ru
          </span>
        </div>
        <span className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-900/50 px-2 py-0.5 rounded-full">
          <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400 animate-pulse" />
          Live demo
        </span>
      </div>

      <div className="relative flex-1 min-h-0 bg-slate-950 flex items-center justify-center">
        <video
          ref={videoRef}
          src={demoVideo}
          className="w-full h-full object-contain bg-slate-950"
          muted
          loop
          playsInline
          preload="metadata"
        />
        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <Play className="w-5 h-5 text-white ml-0.5" />
            </div>
          </div>
        )}
      </div>

      <div className="bg-slate-900 border-t border-slate-800 px-3 py-1.5 flex items-center justify-between shrink-0">
        <span className="text-[8px] text-slate-500 font-medium">
          Подача заявки · кабинет кандидата · HR-панель
        </span>
        <span className="text-[8px] text-slate-600 font-mono">itsworks.mp4</span>
      </div>
    </div>
  );
}

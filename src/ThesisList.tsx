/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Users,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Boxes,
  Layers,
  Braces,
  Route,
  Lock,
  FileLock,
  ClipboardCheck,
  Eye,
  Coins,
  Clock,
  Target,
  CheckCircle2,
  ArrowRight,
  TrendingDown
} from "lucide-react";
import type { RelevanceItem } from "./types";

function ThesisIcon({ name }: { name: string }) {
  const cls = "w-4 h-4";
  switch (name) {
    case "Users":
      return <Users className={cls} />;
    case "ShieldCheck":
      return <ShieldCheck className={cls} />;
    case "Smartphone":
      return <Smartphone className={cls} />;
    case "Sparkles":
      return <Sparkles className={cls} />;
    case "Boxes":
      return <Boxes className={cls} />;
    case "Layers":
      return <Layers className={cls} />;
    case "Braces":
      return <Braces className={cls} />;
    case "Route":
      return <Route className={cls} />;
    case "Lock":
      return <Lock className={cls} />;
    case "FileLock":
      return <FileLock className={cls} />;
    case "ClipboardCheck":
      return <ClipboardCheck className={cls} />;
    case "Eye":
      return <Eye className={cls} />;
    case "Coins":
      return <Coins className={cls} />;
    case "Clock":
      return <Clock className={cls} />;
    case "Target":
      return <Target className={cls} />;
    case "CheckCircle2":
      return <CheckCircle2 className={cls} />;
    default:
      return <ShieldCheck className={cls} />;
  }
}

export function ThesisListCompact({ items }: { items: RelevanceItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-start gap-2"
        >
          <div className="p-1 bg-blue-50 text-blue-600 rounded shrink-0">
            <ThesisIcon name={item.iconName} />
          </div>
          <div>
            <h3 className="text-[10px] font-black text-slate-900 leading-tight">{item.title}</h3>
            <p className="text-[9px] text-slate-500 leading-snug mt-0.5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ThesisList({ items }: { items: RelevanceItem[] }) {
  return (
    <div className="space-y-2 mt-1 max-w-xl">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-start gap-3 hover:bg-white hover:border-slate-200 transition-all duration-200"
        >
          <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md shrink-0">
            <ThesisIcon name={item.iconName} />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-xs font-black text-slate-950 uppercase tracking-tight">
              {item.id}. {item.title}
            </h3>
            <p className="text-[11px] text-slate-500 leading-snug">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

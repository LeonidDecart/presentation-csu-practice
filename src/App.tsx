/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  Sparkles,
  Check,
  XCircle,
  Cpu,
  Cloud,
  FileText,
  ShieldCheck,
  User,
  GraduationCap,
  Briefcase,
  AlertTriangle,
  Database,
  Eye,
  Lock,
  ArrowRightLeft
} from "lucide-react";
import { slides, dashboardCandidates } from "./data";
import { ThesisList, ThesisListCompact } from "./ThesisList";
import { TitleSlideVisual } from "./TitleSlideVisual";
import { VideoDemoPanel } from "./VideoDemoPanel";
import {
  RoadmapTimeline,
  ErDiagram,
  ArchitectureFlow,
  UseCaseDiagram,
  CodeIdePanel,
  EconomicsKpiPanel,
  ConclusionPanel
} from "./slideVisuals";

const SLIDE_COUNT = String(slides.length).padStart(2, "0");
const THESIS_SLIDE_IDS = new Set([4, 7, 9, 10, 12]);
const FULL_WIDTH_DIAGRAM_SLIDES = new Set([6, 8, 11]);

const statusBadgeClass: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200"
};

export default function App() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const currentSlide = slides[currentIdx];

  // Keyboard controls for Arrow keys & Space
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIdx]);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      return;
    }
    await document.exitFullscreen();
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    handleFullscreenChange();

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-50 overflow-hidden flex flex-col justify-between p-1.5 md:p-3 select-none relative font-sans">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none opacity-60"></div>
      
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Slide Container Area (Wider width boundaries to half the distance to edges) */}
      <div className="w-full h-full max-w-[96vw] mx-auto flex-1 flex items-center justify-center relative">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 0.99, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.99, y: -5 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full bg-white rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col p-4 md:p-5 pb-3 md:pb-4 relative justify-between"
            style={{ minHeight: "520px" }}
          >
            {/* Top Slide Metadata Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-black font-display text-blue-600">
                    {currentSlide.numberStr}
                  </span>
                  <span className="text-slate-300 font-bold text-xs">/</span>
                  <span className="text-slate-400 font-semibold text-[10px]">{SLIDE_COUNT}</span>
                </div>
                
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>

                {currentSlide.badge && (
                  <span className="text-[9px] md:text-[10px] font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100/40">
                    {currentSlide.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold tracking-wider text-slate-400 uppercase font-display">
                <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                <span>ООО «Цифровой Элемент»</span>
              </div>
            </div>

            {/* Main Interactive Slide Layout Grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch min-h-0 overflow-y-auto pr-1 select-text">

              {/* Слайды 6 и 8: диаграмма на всю ширину и высоту */}
              {FULL_WIDTH_DIAGRAM_SLIDES.has(currentSlide.id) && (
                <div className="lg:col-span-12 flex flex-col min-h-0 flex-1 gap-2.5 h-full">
                  <div className="space-y-0.5 shrink-0">
                    <h1 className="text-xl md:text-2xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
                      {currentSlide.title}
                    </h1>
                    {currentSlide.subtitle && (
                      <p className="text-[11px] md:text-xs text-slate-400 font-medium">
                        {currentSlide.subtitle}
                      </p>
                    )}
                  </div>
                  {currentSlide.relevanceList && (
                    <ThesisListCompact items={currentSlide.relevanceList} />
                  )}
                  <div className="flex-1 min-h-0 flex">
                    {currentSlide.id === 6 ? (
                      <ErDiagram />
                    ) : currentSlide.id === 8 ? (
                      <UseCaseDiagram />
                    ) : (
                      <VideoDemoPanel isActive={currentSlide.id === 11} />
                    )}
                  </div>
                </div>
              )}
              
              {/* Left Column (Minimalist structured copy text and interactive points) */}
              {!FULL_WIDTH_DIAGRAM_SLIDES.has(currentSlide.id) && (
              <div className="lg:col-span-6 max-w-xl mx-auto w-full flex flex-col h-full justify-center space-y-3.5">
                
                <div className="space-y-1">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
                    {currentSlide.title}
                  </h1>
                  {currentSlide.subtitle && (
                    <p className="text-xs md:text-sm text-slate-400 font-medium">
                      {currentSlide.subtitle}
                    </p>
                  )}
                </div>

                {/* SLIDE 1: Title Screen & Author Plate */}
                {currentSlide.id === 1 && currentSlide.authorInfo && (
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-100">
                    
                    <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100 flex items-start gap-4 relative overflow-hidden group hover:bg-slate-50 hover:shadow-sm transition-all duration-300">
                      <div className="w-1 bg-blue-600 absolute left-0 top-0 h-full rounded-r"></div>
                      <div className="p-2.5 bg-blue-100/50 text-blue-600 rounded-lg">
                        <User className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-bold text-slate-400 uppercase block">Выполнил Студент:</span>
                        <h3 className="text-sm font-black text-slate-900 font-display">
                          {currentSlide.authorInfo.presenter}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium font-mono">Группа: {currentSlide.authorInfo.group}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100 flex items-start gap-4 relative overflow-hidden group hover:bg-slate-50 hover:shadow-sm transition-all duration-300">
                      <div className="w-1 bg-indigo-600 absolute left-0 top-0 h-full rounded-r"></div>
                      <div className="p-2.5 bg-indigo-100/50 text-indigo-600 rounded-lg">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-bold text-slate-400 uppercase block">Научный руководитель:</span>
                        <h3 className="text-sm font-black text-slate-900 font-display">
                          {currentSlide.authorInfo.supervisor}
                        </h3>
                      </div>
                    </div>

                  </div>
                )}

                {/* SLIDE 2: Minimalist Problems List */}
                {currentSlide.id === 2 && currentSlide.problemsGrid && (
                  <div className="space-y-2 mt-1 max-w-xl">
                    {currentSlide.problemsGrid.map((prob) => (
                      <div
                        key={prob.id}
                        className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-start gap-3 hover:bg-white hover:border-slate-200 transition-all duration-200"
                      >
                        <div className="p-1.5 bg-rose-50 text-rose-600 rounded-md shrink-0">
                          {prob.iconName === "Database" && <Database className="w-4 h-4" />}
                          {prob.iconName === "ShieldCheck" && <ShieldCheck className="w-4 h-4" />}
                          {prob.iconName === "Eye" && <Eye className="w-4 h-4" />}
                        </div>
                        <div className="space-y-0.5">
                          <h3 className="text-xs font-black text-slate-950 uppercase tracking-tight">
                            {prob.id}. {prob.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 leading-snug">
                            {prob.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* SLIDE 3: Comparison Columns */}
                {currentSlide.id === 3 && currentSlide.comparisonGrid && (
                  <div className="grid grid-cols-1 gap-2 mt-1 max-h-[min(420px,50vh)] overflow-y-auto pr-0.5">
                    {currentSlide.comparisonGrid.map((col) => {
                      const isChosenWinner = col.isWinner;
                      return (
                        <div
                          key={col.id}
                          className={`relative rounded-xl p-3 border transition-all duration-250 flex flex-col justify-between ${
                            isChosenWinner
                              ? "bg-blue-50/70 border-blue-200 shadow-sm"
                              : "bg-slate-50/60 border-slate-100"
                          }`}
                        >
                          {isChosenWinner && (
                            <span className="absolute -top-2 right-2 bg-blue-600 text-white font-extrabold text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow-sm">
                              <Sparkles className="w-2.5 h-2.5 fill-current" /> Выбор
                            </span>
                          )}

                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`p-1.5 rounded-lg ${
                                isChosenWinner ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700"
                              }`}>
                                {col.iconName === "FileText" && <FileText className="w-3.5 h-3.5" />}
                                {col.iconName === "Cloud" && <Cloud className="w-3.5 h-3.5" />}
                                {col.iconName === "Cpu" && <Cpu className="w-3.5 h-3.5" />}
                              </div>
                              <div>
                                <h3 className="text-xs font-bold text-slate-900 leading-tight">
                                  {col.optionName}
                                </h3>
                                <span className="text-[9px] text-slate-400 font-bold block">
                                  {col.subtitle}
                                </span>
                              </div>
                            </div>

                            {col.description && (
                              <p className="text-[9px] text-slate-500 leading-snug mb-2">
                                {col.description}
                              </p>
                            )}

                            <div className="space-y-1.5 pt-2 border-t border-slate-100">
                              {col.prosCons.map((item, index) => (
                                <div key={index} className="flex items-start gap-1 text-[10px] leading-tight">
                                  {item.isPro ? (
                                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                                      <Check className="w-2 h-2" />
                                    </span>
                                  ) : (
                                    <span className="w-3.5 h-3.5 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                                      <XCircle className="w-2 h-2" />
                                    </span>
                                  )}
                                  <div className="min-w-0">
                                    <span className={item.isPro ? "text-slate-800 font-semibold" : "text-slate-500 font-semibold"}>
                                      {item.text}
                                    </span>
                                    {item.hint && (
                                      <p className="text-[8px] text-slate-400 leading-snug mt-0.5">
                                        {item.hint}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* SLIDE 5: Цель проекта */}
                {currentSlide.id === 5 && currentSlide.goalStatement && (
                  <div className="mt-2 space-y-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
                      Цель проекта
                    </span>
                    <p className="text-sm md:text-base font-bold text-slate-900 leading-snug bg-blue-50/60 border border-blue-100 rounded-xl p-3.5">
                      {currentSlide.goalStatement}
                    </p>
                  </div>
                )}

                {/* Слайды с тезисами: 4, 6, 7, 9 */}
                {THESIS_SLIDE_IDS.has(currentSlide.id) && currentSlide.relevanceList && (
                  <ThesisList items={currentSlide.relevanceList} />
                )}

              </div>
              )}

              {/* Right Column (Advanced pure responsive inline React schemas / flowcharts / auto-scroll mockup diagrams) */}
              {!FULL_WIDTH_DIAGRAM_SLIDES.has(currentSlide.id) && (
                <div className="lg:col-span-6 h-full flex flex-col justify-center lg:pl-5 lg:border-l lg:border-slate-100 min-h-[300px]">

                  {currentSlide.id === 1 && <TitleSlideVisual />}
                  
                  {/* SLIDE 2: Изоляция vs хаос в CRM */}
                  {currentSlide.id === 2 && (
                    <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 flex flex-col justify-center my-auto space-y-3">
                      <div className="flex items-center gap-1.5 border-b border-slate-200/50 pb-1.5">
                        <ArrowRightLeft className="w-3.5 h-3.5 text-slate-500" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700">
                          Пересечение процессов
                        </span>
                      </div>

                      <div className="bg-white border-2 border-rose-200 rounded-xl p-3 shadow-sm space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-rose-100 text-rose-700 rounded-lg">
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                          <h5 className="text-[10px] font-black text-rose-900 uppercase leading-tight">
                            Общая CRM
                          </h5>
                        </div>
                        <p className="text-[10px] text-slate-600 font-semibold leading-snug">
                          Клиенты + Стажёры + Продажи = <span className="text-rose-600">Хаос</span>
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {["Коммерческие сделки", "Лиды со hh.ru", "Анкеты стажёров"].map((tag) => (
                            <span
                              key={tag}
                              className="text-[8px] font-bold uppercase tracking-wide bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <div className="text-[9px] font-bold text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                          VS
                        </div>
                      </div>

                      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-3 shadow-sm space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-blue-600 text-white rounded-lg">
                            <Lock className="w-4 h-4" />
                          </div>
                          <h5 className="text-[10px] font-black text-blue-900 uppercase leading-tight">
                            Кастомный портал
                          </h5>
                        </div>
                        <p className="text-[10px] text-slate-700 font-semibold leading-snug">
                          Только HR + Наставники + Стажёры = <span className="text-blue-700">Изоляция</span>
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {["Личный кабинет", "Права наставника", "Без доступа к продажам"].map((tag) => (
                            <span
                              key={tag}
                              className="text-[8px] font-bold uppercase tracking-wide bg-white text-blue-700 px-1.5 py-0.5 rounded border border-blue-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 3: Матрица критериев */}
                  {currentSlide.id === 3 && (
                    <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-100 flex flex-col justify-center my-auto">
                      <div className="flex items-center gap-1.5 border-b border-slate-200/50 pb-1.5 mb-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700">
                          Критерии выбора
                        </span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-[9px] border-collapse">
                          <thead>
                            <tr className="text-left text-slate-400 uppercase tracking-wide">
                              <th className="pb-1.5 pr-1 font-bold">Критерий</th>
                              <th className="pb-1.5 px-1 font-bold text-center">CRM</th>
                              <th className="pb-1.5 px-1 font-bold text-center">ATS</th>
                              <th className="pb-1.5 pl-1 font-bold text-center text-blue-600">Портал</th>
                            </tr>
                          </thead>
                          <tbody className="text-slate-600">
                            {[
                              ["Изоляция данных", false, false, true],
                              ["Личный кабинет", false, false, true],
                              ["Контроль ПДн (ФЗ-152)", false, false, true],
                              ["Права для наставников", false, false, true]
                            ].map(([label, crm, ats, portal]) => (
                              <tr key={String(label)} className="border-t border-slate-100">
                                <td className="py-1.5 pr-1 font-semibold text-slate-700">{label}</td>
                                {[crm, ats, portal].map((val, i) => (
                                  <td key={i} className="py-1.5 text-center">
                                    {val === true ? (
                                      <Check className="w-3.5 h-3.5 text-emerald-600 mx-auto" />
                                    ) : val === "partial" ? (
                                      <span className="text-[8px] font-bold text-amber-600">~</span>
                                    ) : (
                                      <XCircle className="w-3.5 h-3.5 text-rose-400 mx-auto" />
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 4: Светлый дашборд заявок */}
                  {currentSlide.id === 4 && (
                    <div className="bg-white rounded-xl border border-slate-200 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] overflow-hidden flex flex-col h-full min-h-[320px] select-none">
                      <div className="bg-slate-50 px-2.5 py-1.5 flex items-center justify-between border-b border-slate-200 shrink-0">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-rose-300"></span>
                          <span className="w-2 h-2 rounded-full bg-amber-300"></span>
                          <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                        </div>
                        <div className="bg-white border border-slate-200 rounded px-3 py-0.5 text-[8px] font-mono text-slate-500 text-center truncate w-[180px]">
                          intern.digital-element.ru
                        </div>
                        <div className="w-4" />
                      </div>

                      <div className="flex-1 overflow-y-auto p-3 space-y-2.5 bg-slate-50/80">
                        <div className="flex items-center justify-between">
                          <h5 className="text-[10px] font-black uppercase text-slate-800 tracking-wide">
                            Заявки на стажировку
                          </h5>
                          <span className="text-[8px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded">
                            Кабинет наставника
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          {dashboardCandidates.map((cand) => (
                            <div
                              key={cand.name}
                              className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200 shadow-sm"
                            >
                              <div className="min-w-0">
                                <p className="text-[10px] font-bold text-slate-900 truncate">{cand.name}</p>
                                <p className="text-[8px] text-slate-400 font-medium">{cand.role}</p>
                              </div>
                              <span
                                className={`text-[8px] font-bold px-1.5 py-0.5 rounded border shrink-0 ml-2 ${statusBadgeClass[cand.tone]}`}
                              >
                                {cand.status}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white rounded-lg p-2 border border-slate-200 flex items-start gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <p className="text-[8px] text-slate-500 leading-relaxed">
                            Согласие на обработку ПДн зафиксировано при подаче заявки. Данные не покидают контур компании.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentSlide.id === 5 && currentSlide.roadmapSteps && (
                    <div className="w-full h-full min-h-[360px] flex items-stretch">
                      <RoadmapTimeline steps={currentSlide.roadmapSteps} />
                    </div>
                  )}

                  {currentSlide.id === 7 && <ArchitectureFlow />}

                  {currentSlide.id === 9 && <CodeIdePanel />}

                  {currentSlide.id === 10 && <EconomicsKpiPanel />}

                  {currentSlide.id === 12 && <ConclusionPanel />}

                </div>
              )}

            </div>

            {/* Bottom Slide Footer Area */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-3 text-slate-400 text-[9px] md:text-[10px] shrink-0 select-none">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Выполнил: Симоненко Л.Л. (ПрИ-301)</span>
              </span>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* Floating Bottom-Right Controls Panel */}
      <div 
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-2 bg-slate-900/40 hover:bg-slate-950 backdrop-blur-md border border-white/10 px-2.5 py-1.5 rounded-xl shadow-xl transition-all duration-300 opacity-70 hover:opacity-100"
        id="floating-navigation-dock"
      >
        <div className="flex items-center gap-1 select-none">
          <button
            onClick={prevSlide}
            className="p-1 px-2 bg-slate-800/80 hover:bg-blue-600 text-white rounded-lg transition duration-150 active:scale-95 text-[10px] font-bold flex items-center gap-1"
            title="Назад"
          >
            <ArrowLeft className="w-3 h-3" />
            <span className="hidden sm:inline">Назад</span>
          </button>

          <span className="w-px h-4 bg-slate-700/60 mx-1"></span>

          {/* Quick Select Slide Pip List */}
          <div className="flex items-center gap-1 px-1">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIdx === idx ? "w-5 bg-blue-500" : "bg-slate-600 hover:bg-slate-450"
                }`}
                title={`Слайд ${s.numberStr}`}
              />
            ))}
          </div>

          <span className="w-px h-4 bg-slate-700/60 mx-1"></span>

          <button
            onClick={nextSlide}
            className="p-1 px-2 bg-slate-800/80 hover:bg-blue-600 text-white rounded-lg transition duration-150 active:scale-95 text-[10px] font-bold flex items-center gap-1"
            title="Вперед"
          >
            <span className="hidden sm:inline">Далее</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1 px-2 bg-slate-800/80 hover:bg-blue-600 text-white rounded-lg transition duration-150 active:scale-95 text-[10px] font-bold flex items-center gap-1"
            title={isFullscreen ? "Выйти из полноэкранного режима" : "Полноэкранный режим"}
          >
            {isFullscreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            <span className="hidden sm:inline">{isFullscreen ? "Окно" : "Экран"}</span>
          </button>
        </div>
      </div>

    </div>
  );
}

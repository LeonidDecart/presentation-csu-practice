/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Target,
  Database,
  Server,
  Globe,
  Layers,
  GitBranch,
  Lock,
  ChevronRight,
  Briefcase,
  Search,
  FileUp,
  Settings,
  LayoutTemplate,
  ListChecks,
  Undo2,
  Users,
  UserPlus,
  MessageSquare,
  Pencil,
  Filter,
  UserCheck,
  ArrowRight,
  TrendingDown,
  Sparkles
} from "lucide-react";
import type { RoadmapStep } from "./types";

export function RoadmapTimeline({ steps }: { steps: RoadmapStep[] }) {
  return (
    <div className="bg-slate-50/70 p-5 md:p-6 rounded-xl border border-slate-100 my-auto w-full h-full min-h-[340px] flex flex-col justify-center">
      <div className="flex items-center gap-2.5 border-b border-slate-200/50 pb-3 mb-5">
        <Target className="w-5 h-5 text-blue-600" />
        <span className="text-sm font-extrabold uppercase tracking-wider text-slate-700">
          Roadmap проекта
        </span>
      </div>
      <div className="space-y-0 flex-1 flex flex-col justify-center">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex gap-4">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-11 h-11 rounded-full bg-blue-600 text-white text-sm font-black flex items-center justify-center shadow-md ring-4 ring-blue-100">
                {step.id}
              </div>
              {idx < steps.length - 1 && (
                <div className="w-0.5 flex-1 min-h-[28px] bg-blue-200 my-1" />
              )}
            </div>
            <div className={`pb-5 flex items-center ${idx === steps.length - 1 ? "pb-0" : ""}`}>
              <p className="text-sm md:text-base font-bold text-slate-800 leading-snug">
                {step.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type ErField = { type: string; name: string; tag?: string };

type ErTableMeta = {
  name: string;
  description: string;
  storageHint: string;
  headerClass: string;
  fields: ErField[];
};

function ErTableDetailed({
  name,
  description,
  storageHint,
  fields,
  headerClass,
  tall
}: ErTableMeta & { tall?: boolean }) {
  return (
    <div
      className={`rounded-xl border-2 border-violet-200 bg-white shadow-md min-w-[200px] lg:min-w-[240px] shrink-0 overflow-hidden flex flex-col ${
        tall ? "flex-1" : "self-center"
      }`}
    >
      <div className={`px-3 py-2.5 ${headerClass}`}>
        <p className="text-xs font-black text-white uppercase tracking-wide">{name}</p>
        <p className="text-[9px] font-semibold text-white/95 leading-snug mt-1 normal-case">
          {description}
        </p>
        <p className="text-[8px] font-mono text-white/75 mt-0.5 normal-case">{storageHint}</p>
      </div>
      <ul className={`divide-y divide-slate-100 ${tall ? "flex-1 flex flex-col justify-center" : ""}`}>
        {fields.map((f) => (
          <li key={`${f.name}-${f.type}`} className="px-3 py-2 text-[10px] leading-snug">
            <span className="font-mono text-violet-600 font-semibold">{f.type}</span>{" "}
            <span className="font-bold text-slate-800">{f.name}</span>
            {f.tag && <span className="text-slate-500 font-medium"> ({f.tag})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ErRelation({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 shrink-0 px-1 self-stretch">
      <div className="h-px w-12 bg-violet-200" />
      <span className="text-[9px] font-bold text-slate-600 text-center max-w-[88px] leading-snug">
        {label}
      </span>
      <ChevronRight className="w-4 h-4 text-violet-400" />
    </div>
  );
}

const ER_TABLES: ErTableMeta[] = [
  {
    name: "USERS",
    description: "Пользователи портала: кандидаты, наставники и HR",
    storageHint: "b_user · группы MENTORS / HR_DEPT",
    headerClass: "bg-violet-500",
    fields: [
      { type: "int", name: "ID", tag: "PK" },
      { type: "string", name: "LOGIN" },
      { type: "string", name: "EMAIL" },
      { type: "string", name: "NAME" },
      { type: "string", name: "LAST_NAME" },
      { type: "string", name: "PERSONAL_PHONE" },
      { type: "string", name: "UF_TELEGRAM" }
    ]
  },
  {
    name: "APPLICATIONS",
    description: "Заявки на стажировку — воронка рекрутинга",
    storageHint: "инфоблок applications",
    headerClass: "bg-violet-600",
    fields: [
      { type: "int", name: "ID", tag: "PK" },
      { type: "string", name: "NAME", tag: "Заголовок" },
      { type: "int", name: "USER_ID", tag: "FK → кандидат" },
      { type: "int", name: "DIRECTION_ID", tag: "FK → направление" },
      { type: "int", name: "MENTOR_ID", tag: "FK → наставник" },
      { type: "string", name: "STATUS", tag: "NEW, TEST…" },
      { type: "int", name: "RESUME", tag: "b_file" },
      { type: "json", name: "HR_COMMENT", tag: "множ." },
      { type: "boolean", name: "ACTIVE" }
    ]
  },
  {
    name: "DIRECTIONS",
    description: "Справочник направлений для лендинга и отклика",
    storageHint: "инфоблок directions",
    headerClass: "bg-violet-500",
    fields: [
      { type: "int", name: "ID", tag: "PK" },
      { type: "string", name: "NAME" },
      { type: "string", name: "PREVIEW_TEXT", tag: "Описание" },
      { type: "string", name: "REQ", tag: "Требования" },
      { type: "string", name: "STACK", tag: "множ." },
      { type: "boolean", name: "ACTIVE" }
    ]
  }
];

export function ErDiagram() {
  const [users, applications, directions] = ER_TABLES;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 w-full h-full flex flex-col shadow-sm min-h-0">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3 mb-3 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-violet-100 rounded-lg">
            <Database className="w-5 h-5 text-violet-600" />
          </div>
          <div>
            <span className="text-sm font-black text-slate-900 uppercase tracking-wide block">
              ER-модель
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              Справочник · транзакции · пользователи (UserRepository)
            </span>
          </div>
        </div>
        <span className="text-[9px] font-bold text-violet-600 bg-violet-50 border border-violet-100 px-2 py-1 rounded uppercase">
          MySQL / Битрикс ORM
        </span>
      </div>

      <div className="flex-1 min-h-0 flex items-stretch justify-center overflow-x-auto">
        <div className="flex items-stretch gap-3 lg:gap-4 px-1 w-full max-w-6xl mx-auto min-w-[720px] h-full py-1">
          <ErTableDetailed {...users} tall />
          <div className="flex flex-col justify-center gap-10 shrink-0 py-4">
            <ErRelation label="подает заявку (USER_ID)" />
            <ErRelation label="курирует (MENTOR_ID)" />
          </div>
          <ErTableDetailed {...applications} tall />
          <div className="flex flex-col justify-center shrink-0 self-stretch py-4">
            <ErRelation label="относится к (DIRECTION_ID)" />
          </div>
          <ErTableDetailed {...directions} tall />
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-2 shrink-0">
        <p className="text-[9px] text-slate-600 leading-snug">
          <span className="font-black text-violet-700">USERS</span> — авторизация, роли через группы;
          UF_TELEGRAM в анкете кандидата.
        </p>
        <p className="text-[9px] text-slate-600 leading-snug">
          <span className="font-black text-violet-700">APPLICATIONS</span> — ApplicationRepository:
          статус, резюме, HR_COMMENT (история заметок).
        </p>
        <p className="text-[9px] text-slate-600 leading-snug">
          <span className="font-black text-violet-700">DIRECTIONS</span> — DirectionRepository:
          карточки направлений на главной и в форме отклика.
        </p>
      </div>
    </div>
  );
}

type UseCaseRole = {
  name: string;
  subtitle: string;
  theme: "purple" | "emerald" | "blue" | "amber";
  actions: { text: string; icon: LucideIcon }[];
};

const USE_CASE_ROLES: UseCaseRole[] = [
  {
    name: "Кандидат",
    subtitle: "Личный кабинет",
    theme: "emerald",
    actions: [
      { text: "Просмотр списка направлений", icon: Search },
      { text: "Подача заявки / загрузка резюме", icon: FileUp },
      { text: "Просмотр статуса заявки", icon: ListChecks },
      { text: "Отзыв заявки", icon: Undo2 }
    ]
  },
  {
    name: "Наставник",
    subtitle: "Техническая оценка",
    theme: "blue",
    actions: [
      { text: "Просмотр назначенных заявок", icon: Users },
      { text: "Назначение себя наставником", icon: UserPlus },
      { text: "Комментарии к заявке", icon: MessageSquare },
      { text: "Изменение статуса заявки", icon: Pencil }
    ]
  },
  {
    name: "HR-специалист",
    subtitle: "Управление воронкой",
    theme: "amber",
    actions: [
      { text: "Все заявки с фильтрами", icon: Filter },
      { text: "Изменение статуса", icon: Pencil },
      { text: "Делегирование наставнику", icon: UserCheck },
      { text: "Комментарии к заявке", icon: MessageSquare }
    ]
  },
  {
    name: "Администратор",
    subtitle: "Админ-панель",
    theme: "purple",
    actions: [
      { text: "Управление настройками сайта", icon: Settings },
      { text: "Управление контентом сайта", icon: LayoutTemplate }
    ]
  }
];

const roleTheme: Record<
  UseCaseRole["theme"],
  { border: string; bg: string; header: string; pill: string; icon: string }
> = {
  purple: {
    border: "border-purple-200",
    bg: "bg-purple-50/60",
    header: "bg-purple-500",
    pill: "bg-white/90 text-purple-900 border-purple-100 hover:border-purple-200",
    icon: "text-purple-600"
  },
  emerald: {
    border: "border-emerald-200",
    bg: "bg-emerald-50/60",
    header: "bg-emerald-500",
    pill: "bg-white/90 text-emerald-900 border-emerald-100 hover:border-emerald-200",
    icon: "text-emerald-600"
  },
  blue: {
    border: "border-blue-200",
    bg: "bg-blue-50/60",
    header: "bg-blue-600",
    pill: "bg-white/90 text-blue-900 border-blue-100 hover:border-blue-200",
    icon: "text-blue-600"
  },
  amber: {
    border: "border-amber-200",
    bg: "bg-amber-50/60",
    header: "bg-amber-500",
    pill: "bg-white/90 text-amber-900 border-amber-100 hover:border-amber-200",
    icon: "text-amber-600"
  }
};

const TOTAL_USE_CASES = USE_CASE_ROLES.reduce((n, r) => n + r.actions.length, 0);

export function UseCaseDiagram() {
  return (
    <div className="bg-white rounded-xl border-2 border-dashed border-slate-300 p-4 w-full h-full min-h-0 flex flex-col shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3 mb-3 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-slate-100 rounded-lg">
            <Briefcase className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <span className="text-sm font-black text-slate-900 uppercase tracking-wide block">
              Портал стажировок
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              Граница системы · Use Case Diagram
            </span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="text-lg font-black text-blue-600 leading-none">{TOTAL_USE_CASES}</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase block tracking-wide">
            прецедентов
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 flex-1 min-h-0">
        {USE_CASE_ROLES.map((role) => {
          const t = roleTheme[role.theme];
          return (
            <div
              key={role.name}
              className={`rounded-xl border-2 ${t.border} ${t.bg} flex flex-col min-h-0 overflow-hidden`}
            >
              <div className={`${t.header} px-3 py-2 text-white shrink-0`}>
                <p className="text-xs font-black uppercase tracking-wide">{role.name}</p>
                <p className="text-[9px] font-medium opacity-90">{role.subtitle}</p>
              </div>
              <div className="p-2 flex flex-col gap-2 flex-1 justify-center">
                {role.actions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <div
                      key={action.text}
                      className={`flex items-start gap-2 text-[10px] font-semibold leading-snug px-2.5 py-2.5 rounded-lg border shadow-sm transition-colors ${t.pill}`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${t.icon}`} />
                      <span>{action.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="px-2 pb-2 text-center shrink-0">
                <span className="text-[8px] font-bold text-slate-400 uppercase">
                  {role.actions.length} действия
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 pt-2 border-t border-slate-100 flex flex-wrap gap-3 justify-center shrink-0">
        {USE_CASE_ROLES.map((role) => {
          const t = roleTheme[role.theme];
          return (
            <span key={role.name} className="flex items-center gap-1.5 text-[9px] font-semibold text-slate-500">
              <span className={`w-2 h-2 rounded-full ${t.header}`} />
              {role.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function ArchitectureFlow() {
  const nodes = [
    { label: "Клиент (Браузер)", icon: Globe, color: "bg-slate-100 text-slate-700 border-slate-200" },
    { label: "Controller", sub: "Проверка прав", icon: GitBranch, color: "bg-blue-50 text-blue-800 border-blue-200" },
    { label: "UseCase", sub: "Валидация, локи", icon: Layers, color: "bg-indigo-50 text-indigo-800 border-indigo-200" },
    { label: "Repository", sub: "СУБД", icon: Database, color: "bg-violet-50 text-violet-800 border-violet-200" },
    { label: "MySQL", icon: Server, color: "bg-emerald-50 text-emerald-800 border-emerald-200" }
  ];

  return (
    <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-100 my-auto">
      <div className="flex items-center gap-1.5 border-b border-slate-200/50 pb-1.5 mb-2">
        <Layers className="w-3.5 h-3.5 text-blue-600" />
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700">
          Поток данных
        </span>
      </div>
      <div className="flex flex-col items-center gap-1">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          return (
            <React.Fragment key={node.label}>
              <div className={`w-full rounded-lg border p-2 flex items-center gap-2 ${node.color}`}>
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <div>
                  <p className="text-[9px] font-bold leading-tight">{node.label}</p>
                  {node.sub && (
                    <p className="text-[8px] opacity-80">{node.sub}</p>
                  )}
                </div>
              </div>
              {idx < nodes.length - 1 && (
                <div className="w-px h-2 bg-slate-300" />
              )}
            </React.Fragment>
          );
        })}
        <div className="mt-1 flex items-center gap-1 text-[8px] text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">
          <Lock className="w-2.5 h-2.5" />
          BitrixLockManager при сохранении
        </div>
      </div>
    </div>
  );
}

const CODE_LINES: { text: string; kind: "kw" | "fn" | "var" | "str" | "cmt" | "plain" }[] = [
  { text: "public function streamResume(int $appId): void", kind: "fn" },
  { text: "{", kind: "plain" },
  { text: "    if (!$this->securityService->isStaff()) {", kind: "plain" },
  { text: "        CHTTP::SetStatus('403 Forbidden');", kind: "str" },
  { text: "        die('403');", kind: "str" },
  { text: "    }", kind: "plain" },
  { text: "", kind: "plain" },
  { text: "    $fileId = $this->query->getResumeFileId($appId);", kind: "plain" },
  { text: "    $file = \\CFile::GetFileArray($fileId);", kind: "plain" },
  { text: "", kind: "plain" },
  { text: "    // Безопасная отдача потоком", kind: "cmt" },
  { text: "    \\CFile::ViewByUser($file, ['force_download' => 'Y']);", kind: "plain" },
  { text: "}", kind: "plain" }
];

function codeClass(kind: string) {
  switch (kind) {
    case "fn":
      return "text-violet-700";
    case "kw":
      return "text-blue-600";
    case "str":
      return "text-emerald-700";
    case "cmt":
      return "text-slate-400 italic";
    default:
      return "text-slate-700";
  }
}

export function CodeIdePanel() {
  return (
    <div className="bg-[#f6f8fa] rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col min-h-[300px] my-auto select-text">
      <div className="bg-slate-100 border-b border-slate-200 px-2.5 py-1.5 flex items-center gap-2">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-rose-300" />
          <span className="w-2 h-2 rounded-full bg-amber-300" />
          <span className="w-2 h-2 rounded-full bg-emerald-300" />
        </div>
        <span className="text-[9px] font-mono text-slate-500 flex-1 text-center">
          ResumeFileService.php
        </span>
      </div>
      <div className="p-2.5 overflow-x-auto font-mono text-[9px] leading-relaxed bg-white flex-1">
        {CODE_LINES.map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-slate-300 w-4 text-right shrink-0 select-none">{i + 1}</span>
            <span className={codeClass(line.kind)}>{line.text || " "}</span>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-2.5 py-1 bg-emerald-50 border-t border-emerald-100 text-[8px] text-emerald-700 font-semibold"
      >
        Проверка isStaff() перед отдачей файла
      </motion.div>
    </div>
  );
}

const ECONOMICS_KPIS = [
  {
    title: "Стоимость отклика с портала",
    was: "~100 ₽",
    wasNote: "Покупка контакта hh.ru",
    now: "0 ₽",
    nowNote: "Прямой отклик на портал"
  },
  {
    title: "Трудозатраты HR на 1 заявку",
    was: "~10 мин",
    wasNote: "Ручной перенос",
    now: "0 мин",
    nowNote: "Автоматизация"
  },
  {
    title: "Имидж IT-работодателя",
    was: "hh.ru + CRM",
    wasNote: "Как у всех",
    now: "Свой портал",
    nowNote: "Современный IT-бренд"
  }
];

const TECH_STACK = [
  {
    label: "PHP 8",
    tip: "Серверная логика: D7 Controllers, UseCases, Repositories и сервисы безопасности"
  },
  {
    label: "1C-Bitrix D7",
    tip: "CMS и фреймворк: ORM, инфоблоки заявок и направлений, маршрутизация AJAX"
  },
  {
    label: "MySQL (InnoDB)",
    tip: "СУБД: пользователи (b_user), элементы инфоблоков, транзакционная целостность"
  },
  {
    label: "Vanilla JS",
    tip: "Клиентский код без React/Vue: формы, AJAX-запросы, динамика интерфейса"
  },
  {
    label: "BEM CSS",
    tip: "Методология вёрстки: изолированные блоки, адаптивный Mobile First UI"
  },
  {
    label: "Git",
    tip: "Контроль версий, ветки, code review и деплой через CI/CD"
  }
];

export function EconomicsKpiPanel() {
  return (
    <div className="bg-slate-50/70 rounded-xl border border-slate-100 p-4 w-full h-full flex flex-col justify-center gap-3 my-auto min-h-[320px]">
      <div className="flex items-center gap-2 border-b border-slate-200/60 pb-2 shrink-0">
        <TrendingDown className="w-4 h-4 text-emerald-600" />
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
          KPI: было → стало
        </span>
      </div>
      <div className="flex flex-col gap-3 flex-1 justify-center">
        {ECONOMICS_KPIS.map((kpi) => (
          <div
            key={kpi.title}
            className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm"
          >
            <p className="text-[10px] font-black text-slate-800 uppercase tracking-wide mb-2">
              {kpi.title}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 rounded-lg bg-rose-50 border border-rose-100 px-2.5 py-2 text-center">
                <span className="text-[8px] font-bold text-rose-400 uppercase block">Было</span>
                <span className="text-sm font-black text-rose-700">{kpi.was}</span>
                <span className="text-[8px] text-rose-500 block mt-0.5">{kpi.wasNote}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
              <div className="flex-1 rounded-lg bg-emerald-50 border border-emerald-100 px-2.5 py-2 text-center">
                <span className="text-[8px] font-bold text-emerald-500 uppercase block">Стало</span>
                <span className="text-sm font-black text-emerald-700">{kpi.now}</span>
                <span className="text-[8px] text-emerald-600 block mt-0.5">{kpi.nowNote}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ConclusionPanel() {
  return (
    <div className="w-full h-full flex flex-col gap-3 my-auto min-h-[320px] justify-center">
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 mb-3">
          Технологический стек
        </p>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((item) => (
            <span
              key={item.label}
              title={item.tip}
              className="group relative cursor-help text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg transition-colors hover:bg-blue-100 hover:border-blue-200"
            >
              {item.label}
              <span
                role="tooltip"
                className="pointer-events-none absolute top-[calc(100%+6px)] left-1/2 z-20 w-44 -translate-x-1/2 rounded-lg border border-slate-200 bg-slate-900 px-2.5 py-2 text-[9px] font-medium leading-snug text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
              >
                {item.tip}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-900" />
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5 text-white text-center shadow-lg flex-1 flex flex-col items-center justify-center min-h-[140px]">
        <Sparkles className="w-8 h-8 mb-2 opacity-90" />
        <p className="text-lg md:text-xl font-black font-display leading-tight">
          Спасибо за внимание!
        </p>
        <p className="text-sm font-medium text-blue-100 mt-1.5">
          Готов ответить на ваши вопросы
        </p>
      </div>
    </div>
  );
}

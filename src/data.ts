/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SlideData } from "./types";

export const slides: SlideData[] = [
  {
    id: 1,
    numberStr: "01",
    badge: "Проектный практикум",
    title: "Корпоративный веб-портал стажировок",
    subtitle: "Автоматизация процессов найма и рекрутинга в ООО «Цифровой элемент»",
    authorInfo: {
      presenter: "Симоненко Леонид Леонидович",
      group: "ПрИ-301",
      supervisor: "Рябченко Александр Николаевич"
    }
  },
  {
    id: 2,
    numberStr: "02",
    badge: "Предметная область",
    title: "Проблемы интеграции и изоляции процессов",
    problemsGrid: [
      {
        id: 1,
        title: "Мусор в основной CRM",
        description:
          "Штатные интеграции работных сайтов сваливают стажёров в общую базу лидов, мешая отделу продаж.",
        iconName: "Database"
      },
      {
        id: 2,
        title: "Проблема доступов",
        description:
          "Техническим специалистам (наставникам) нужен доступ к анкетам, но пускать их в коммерческую CRM небезопасно и требует лишних лицензий.",
        iconName: "ShieldCheck"
      },
      {
        id: 3,
        title: "Отсутствие прозрачности",
        description: "Кандидат не видит, на каком этапе находится его заявка.",
        iconName: "Eye"
      }
    ]
  },
  {
    id: 3,
    numberStr: "03",
    badge: "Анализ решений",
    title: "Сравнение подходов к автоматизации",
    comparisonGrid: [
      {
        id: 1,
        optionName: "Штатная интеграция с CRM",
        subtitle: "hh.ru → Битрикс24",
        iconName: "FileText",
        prosCons: [
          { text: "Смешивание стажёров с коммерческими лидами", isPro: false },
          { text: "Сложная настройка прав для техлидов", isPro: false },
          { text: "Нет личного кабинета кандидата", isPro: false }
        ],
        isWinner: false
      },
      {
        id: 2,
        optionName: "Облачная ATS",
        subtitle: "Хантфлоу / Potok",
        description:
          "Applicant Tracking System — облачный SaaS для автоматизации рекрутинга. Хантфлоу и Potok — готовые российские платформы «под ключ», без собственной разработки.",
        iconName: "Cloud",
        prosCons: [
          {
            text: "ПДн на чужих серверах",
            hint: "ФИО, телефон и резюме кандидатов хранятся на инфраструктуре вендора, а не в закрытом контуре компании.",
            isPro: false
          },
          {
            text: "Vendor lock-in",
            hint: "Привязка к поставщику: при отказе от сервиса сложно и дорого перенести базу, настройки и историю откликов.",
            isPro: false
          },
          {
            text: "Нет кастомного кабинета соискателя",
            hint: "Стандартный интерфейс сервиса — без брендинга компании и сценариев, заточенных под стажировки.",
            isPro: false
          }
        ],
        isWinner: false
      },
      {
        id: 3,
        optionName: "Свой веб-портал",
        subtitle: "на 1С-Битрикс",
        iconName: "Cpu",
        prosCons: [
          { text: "Изолированная среда HR + наставники", isPro: true },
          { text: "Личный кабинет соискателя", isPro: true },
          { text: "Контроль ПДн по ФЗ-152", isPro: true }
        ],
        isWinner: true
      }
    ]
  },
  {
    id: 4,
    numberStr: "04",
    badge: "Актуальность",
    title: "Ценность изолированного веб-портала",
    relevanceList: [
      {
        id: 1,
        title: "Разделение ролей",
        description:
          "HR управляет потоком, наставник видит только свои заявки, кандидат отслеживает статус в личном кабинете.",
        iconName: "Users"
      },
      {
        id: 2,
        title: "Соблюдение 152-ФЗ",
        description:
          "ПДн собираются с явным согласием и хранятся в закрытом локальном контуре компании.",
        iconName: "ShieldCheck"
      },
      {
        id: 3,
        title: "UI/UX",
        description:
          "Адаптивный интерфейс (Mobile First) без визуального шума сложных корпоративных систем.",
        iconName: "Smartphone"
      },
      {
        id: 4,
        title: "ИТ-бренд компании",
        description:
          "Собственная платформа найма с современным UX показывает технологичность работодателя и повышает лояльность кандидатов.",
        iconName: "Sparkles"
      }
    ]
  },
  {
    id: 5,
    numberStr: "05",
    badge: "Формальная постановка",
    title: "Цель и задачи проекта",
    goalStatement:
      "Проектирование и программная реализация веб-портала стажировок для автоматизации процессов рекрутинга в ООО «Цифровой элемент».",
    roadmapSteps: [
      { id: 1, label: "Анализ и проектирование БД" },
      { id: 2, label: "Разработка Backend-логики (D7)" },
      { id: 3, label: "Верстка интерфейсов (Mobile First)" },
      { id: 4, label: "Интеграция AJAX и уведомлений" },
      { id: 5, label: "Тестирование и деплой (CI/CD)" }
    ]
  },
  {
    id: 6,
    numberStr: "06",
    badge: "Архитектура",
    title: "Логическая структура базы данных",
    relevanceList: [
      {
        id: 1,
        title: "ORM и инфоблоки Битрикс",
        description: "Использование ORM и инфоблоков Битрикс для типовых сущностей портала.",
        iconName: "Boxes"
      },
      {
        id: 2,
        title: "Разделение сущностей",
        description:
          "Строгое разделение: справочники (Направления), транзакции (Заявки) и пользователи.",
        iconName: "Layers"
      },
      {
        id: 3,
        title: "История HR-заметок",
        description:
          "Хранение истории HR-заметок в формате JSON для оптимизации выборок.",
        iconName: "Braces"
      }
    ]
  },
  {
    id: 7,
    numberStr: "07",
    badge: "Backend",
    title: "Clean Architecture и Bitrix D7",
    relevanceList: [
      {
        id: 1,
        title: "D7 Controllers",
        description: "Отказ от монолитных ajax-файлов в пользу D7 Controllers.",
        iconName: "Route"
      },
      {
        id: 2,
        title: "Разделение слоёв (SRP)",
        description:
          "Controllers (маршрутизация), UseCases (бизнес-логика), Repositories (СУБД).",
        iconName: "Layers"
      },
      {
        id: 3,
        title: "Защита от Race Condition",
        description:
          "Использование BitrixLockManager при сохранении заявок.",
        iconName: "Lock"
      }
    ]
  },
  {
    id: 8,
    numberStr: "08",
    badge: "Функциональная модель",
    title: "Схема прецедентов",
    subtitle: "Роли и сценарии использования системы",
    relevanceList: [
      {
        id: 1,
        title: "Четыре роли",
        description:
          "Кандидат, Наставник, HR-специалист и Администратор — у каждого свой набор действий без пересечения с коммерческой CRM.",
        iconName: "Users"
      },
      {
        id: 2,
        title: "Сквозной процесс",
        description:
          "От просмотра направлений и регистрации до делегирования заявки наставнику и смены статуса.",
        iconName: "Route"
      },
      {
        id: 3,
        title: "Прозрачность для кандидата",
        description:
          "Подача резюме, отслеживание статуса и отзыв заявки — в личном кабинете без обращения к HR.",
        iconName: "Eye"
      }
    ]
  },
  {
    id: 9,
    numberStr: "09",
    badge: "Безопасность",
    title: "Изоляция данных и защита ПДн",
    relevanceList: [
      {
        id: 1,
        title: "Закрытый контур файлов",
        description:
          "Резюме не отдаются по прямым ссылкам, загрузка файлов вынесена в закрытый контур.",
        iconName: "FileLock"
      },
      {
        id: 2,
        title: "Безопасный стриминг",
        description:
          "Отдача файлов через ResumeFileService с проверкой прав (isStaff).",
        iconName: "ShieldCheck"
      },
      {
        id: 3,
        title: "Согласия ФЗ-152",
        description: "Строгий сбор согласий перед отправкой формы заявки.",
        iconName: "ClipboardCheck"
      }
    ]
  },
  {
    id: 10,
    numberStr: "10",
    badge: "Экономика",
    title: "Реальная бизнес-ценность внедрения",
    subtitle: "Снижение издержек и укрепление имиджа IT-работодателя",
    relevanceList: [
      {
        id: 1,
        title: "Дополнительные каналы отклика",
        description:
          "Портал — ещё один способ подать заявку. Бесплатный доступ к аудитории ВУЗов Челябинска (ЧелГУ, ЮУрГУ, МИДИС): кандидаты приходят напрямую, без покупки контактов на hh.ru (~100 ₽ за отклик).",
        iconName: "Coins"
      },
      {
        id: 2,
        title: "Экономия времени HR",
        description:
          "HR больше не тратит ~10 минут на каждую заявку: скачать резюме, завести карточку в CRM, написать техлиду. При 300 откликах — ~50 часов рутины заменены автоматизацией.",
        iconName: "Clock"
      },
      {
        id: 3,
        title: "IT-бренд компании",
        description:
          "Собственная платформа с современным UX показывает кандидату, что работодатель технологичный — это повышает лояльность и привлекательность компании на рынке стажировок.",
        iconName: "Sparkles"
      }
    ]
  },
  {
    id: 11,
    numberStr: "11",
    badge: "Демонстрация",
    title: "Портал в действии",
    subtitle: "Запись работы ключевых сценариев системы"
  },
  {
    id: 12,
    numberStr: "12",
    badge: "Итоги",
    title: "Результаты работы",
    subtitle: "Проект готов к внедрению в эксплуатацию",
    relevanceList: [
      {
        id: 1,
        title: "Цель достигнута",
        description:
          "Спроектирован и разработан корпоративный портал, автоматизирующий воронку найма стажёров.",
        iconName: "Target"
      },
      {
        id: 2,
        title: "Надёжная архитектура",
        description:
          "Clean Architecture поверх 1С-Битрикс обеспечивает безопасность и масштабируемость.",
        iconName: "Layers"
      },
      {
        id: 3,
        title: "Готовность",
        description:
          "Код прошёл рефакторинг, покрыт миграциями и протестирован на мобильных устройствах.",
        iconName: "CheckCircle2"
      }
    ]
  }
];

export const dashboardCandidates = [
  { name: "Козлов Никита", role: "Frontend", status: "На рассмотрении", tone: "blue" as const },
  { name: "Смирнова Дарья", role: "QA", status: "Тестовое задание", tone: "amber" as const },
  { name: "Петров Святослав", role: "Backend", status: "Собеседование", tone: "purple" as const },
  { name: "Яковлева Лидия", role: "Аналитика", status: "Принят", tone: "emerald" as const },
  { name: "Иванов Артём", role: "DevOps", status: "Отказ", tone: "rose" as const }
];

export const YEARS_RANGE = 100;

export interface CalendarToday {
  year: number;
  month: number;
  day: number;
}

export function currentToday(): CalendarToday {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth(), day: now.getDate() };
}

export function getMonthNames(locale: string): string[] {
  return Array.from({ length: 12 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { month: "long" }).format(
      new Date(2025, i, 1),
    ),
  );
}

export function getWeekdays(locale: string): string[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(2025, 0, 5 + i);
    return new Intl.DateTimeFormat(locale, { weekday: "short" }).format(d);
  });
}

export function allYears(todayYear: number): number[] {
  return Array.from({ length: YEARS_RANGE + 1 }, (_, i) => todayYear - i);
}

export function filterYears(
  query: string,
  currentYear: number,
  todayYear: number,
): number[] {
  const q = query.trim();
  if (!q || q === String(currentYear)) return allYears(todayYear);
  return allYears(todayYear).filter((y) => String(y).startsWith(q));
}

export function parseCommittedYear(
  query: string,
  todayYear: number,
): number | null {
  const parsed = Number.parseInt(query.trim(), 10);
  if (Number.isNaN(parsed)) return null;
  return Math.min(todayYear, Math.max(todayYear - YEARS_RANGE, parsed));
}

export function startOfMonth(year: number, month: number): Date {
  return new Date(year, month, 1);
}

export function addDays(date: Date, n: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + n);
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isBeforeDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() < b.getFullYear() ||
    (a.getFullYear() === b.getFullYear() && a.getMonth() < b.getMonth()) ||
    (a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() < b.getDate())
  );
}

export function buildWeeks(year: number, month: number): Date[][] {
  const first = startOfMonth(year, month);
  const firstDay = first.getDay();
  const result: Date[][] = [];
  let current = addDays(first, -firstDay);
  for (let w = 0; w < 6; w++) {
    const week: Date[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(current);
      current = addDays(current, 1);
    }
    result.push(week);
  }
  return result;
}

export function isToday(d: Date, today: CalendarToday): boolean {
  return (
    d.getFullYear() === today.year &&
    d.getMonth() === today.month &&
    d.getDate() === today.day
  );
}

export function isOutsideMonth(d: Date, year: number, month: number): boolean {
  return d.getMonth() !== month || d.getFullYear() !== year;
}

export function isSelected(
  d: Date,
  opts: { value?: Date; rangeStart?: Date; rangeEnd?: Date },
): boolean {
  if (opts.rangeStart && isSameDay(d, opts.rangeStart)) return true;
  if (opts.rangeEnd && isSameDay(d, opts.rangeEnd)) return true;
  return opts.value ? isSameDay(d, opts.value) : false;
}

export function isInRange(d: Date, rangeStart?: Date, rangeEnd?: Date): boolean {
  if (!rangeStart || !rangeEnd) return false;
  return !isBeforeDay(d, rangeStart) && !isBeforeDay(rangeEnd, d);
}

export function isDisabled(d: Date, min?: Date, max?: Date): boolean {
  if (min && isBeforeDay(d, min)) return true;
  if (max && isBeforeDay(max, d)) return true;
  return false;
}
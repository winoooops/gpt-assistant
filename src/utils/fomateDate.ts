import {format, isWithinInterval, parseISO, subDays} from "date-fns";

const FORMAT = "dd/MM/yyyy, h:mm:ss a";

export function formatDate(date: Date) {
  return format(date, FORMAT);
}

export function formatCurrentDate() {
  const currentDate = new Date();
  return format(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
}

export function isWithinSevenDays(dateString: string) {
  const currentDate = new Date();
  const sevenDaysAgo = subDays(currentDate, 7);
  return isWithinDateRange(dateString, sevenDaysAgo, currentDate);
}

export function isWithinThirtyDays(dateString: string) {
  const currentDate = new Date();
  const thirtyDaysAgo = subDays(currentDate, 30);
  const sevenDaysAgo = subDays(currentDate, 7);
  return isWithinDateRange(dateString, thirtyDaysAgo, sevenDaysAgo);
}

function isWithinDateRange(dateString: string, start: Date, end: Date) {
  const targetDate = parseISO(dateString);
  return isWithinInterval(targetDate, {start, end});
}
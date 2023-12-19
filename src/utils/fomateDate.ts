import {format} from "date-fns";

const FORMAT = "dd/MM/yyyy, h:mm:ss a";

export function formatDate(date: Date) {
  return format(date, FORMAT);
}

export function formatCurrentDate() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  return formattedDate;
}
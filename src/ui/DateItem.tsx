import {parseISO} from "date-fns"
import {formatDate} from "../utils/fomateDate.ts";

export default function DateItem({ date }: { date: string }) {
  const parsedDate = parseISO(date)
  const formattedDate = formatDate(parsedDate);

  return (
    <span>{formattedDate}</span>
  )
}
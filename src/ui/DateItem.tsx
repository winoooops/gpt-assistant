import {format, parseISO} from "date-fns"

export default function DateItem({ date }: { date: string }) {
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, "dd/MM/yyyy, h:mm:ss a");

  return (
    <span>{formattedDate}</span>
  )
}

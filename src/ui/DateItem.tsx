import { format } from "date-fns"

const dummyDate = new Date();

export default function DateItem() {
  const formattedDate = format(dummyDate, "dd/MM/yyyy, h:mm:ss a");

  return (
    <span>{formattedDate}</span>
  )
}

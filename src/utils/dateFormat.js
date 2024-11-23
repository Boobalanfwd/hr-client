import { format } from "date-fns";

export const formattedDate = (date) => {
  const changingFormat = format(new Date(date), "yyyy-MM-dd");
  return changingFormat;
};

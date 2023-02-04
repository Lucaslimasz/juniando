export const formatDatePost = (date: Date) => {
  return Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
};

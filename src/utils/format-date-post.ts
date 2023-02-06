export const formatDatePost = (value: string) => {
  const date = new Date(value);
  return Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
};

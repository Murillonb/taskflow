export default function formatDate(date) {
  const dateFormatted = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ]
    .map((n) => String(n).padStart(2, "0"))
    .join("/");

  return dateFormatted;
}

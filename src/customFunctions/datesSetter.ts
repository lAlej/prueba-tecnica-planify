export const dateSetter = (date: string): string => {
  const splitter = date.split("-");

  const fecha = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const resul = fecha.toLocaleDateString(undefined, options);

  return `${splitter[2]} de ${resul}`;
};
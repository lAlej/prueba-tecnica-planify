export const dateSetter = (date) => {
  const splitter = date.split("-");

  const fecha = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    locale: "es-ES",
  };
  const resul = fecha.toLocaleDateString(undefined, options);

  return `${splitter[2]} de ${resul}`;
};
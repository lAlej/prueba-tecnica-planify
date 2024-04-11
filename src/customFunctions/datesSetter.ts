export const dateSetter = (date: string) => {
  const splitter = date.split("-")

  const fecha = new Date(date)
  const options = {month: 'long', locale: 'es-ES'}
  const resul = fecha.toLocaleDateString(undefined, options)

  return `${splitter[2]} de ${resul}`
}
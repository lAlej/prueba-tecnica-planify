import { Typography } from "@mui/material"

interface Props {
  index: number
}


export const Header: React.FC<Props> = ({index}) => {

  const step = ["Seleccionar servicio", "Seleccionar horario", "Confirmar turno"]


  const barLoader = () => {
    const width = 25 * (index + 1)
    return `${width}%`
  }

  return(
    <>
      <Typography fontWeight={"bold"} fontSize={15}>{step[index]}</Typography>
      <div style={{
        width: "100%",
        height: 15,
        backgroundColor: "rgb(216, 222, 227)"
      }}>
        <div style={{
          width: barLoader(),
          height: 15,
          borderRadius: 3,
          backgroundColor: "rgb(26, 174, 159)",
          transition: "all .5s"
        }}></div>
      </div>
    </>
  )
}
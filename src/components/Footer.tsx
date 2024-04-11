import { Grid, Typography } from "@mui/material";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";

export const Footer: React.FC = () => {
  return (
    <Grid
      container
      item
      xs={12}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      style={{
        borderTop: "1px solid rgb(216, 222, 227)",
        padding: 15,
      }}
    >
      <Grid
        item
        xs={6}
        container
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
        style={{
          color: "rgb(101, 88, 245)",
          cursor: "pointer",
        }}
      >
        <FreeBreakfastIcon />
        <Typography
          style={{
            borderBottom: "2px solid rgb(101, 88, 245)",
          }}
        >
          Reservar
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={6}
        alignItems={"center"}
        direction={"column"}
        style={{ color: "rgb(75, 92, 107)", cursor: "pointer" }}
      >
        <FreeBreakfastIcon />
        <Typography>Mis turnos</Typography>
      </Grid>
    </Grid>
  );
};

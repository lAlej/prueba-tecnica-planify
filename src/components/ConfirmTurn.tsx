import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { SelectorStore } from "../types";

interface Props {
  index: number;
  tabValue: number;
}

export const ConfirnTurn: React.FC<Props> = ({
  index,
  tabValue,
}) => {
  const { service, slot } = useSelector((state: SelectorStore) => state.dateInfo);
  return (
    <Grid
      style={{
        border: "1px solid gray",
        padding: 15,
        marginTop: 25,
      }}
      hidden={index !== tabValue}
    >
      <Typography>Servicio: {service.name}</Typography>
      <Typography>Fecha: {slot.date} {slot.time}</Typography>
    </Grid>
  );
};

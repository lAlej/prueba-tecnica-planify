import React from "react";
import { dateSetter } from "../customFunctions/datesSetter";

import { useSelector, useDispatch } from "react-redux";
import { addSlot } from "../app/dateService";
import { DateSlots } from "../types";
import { Button, Grid, Typography } from "@mui/material";

interface Props {
  index: number;
  tabValue: number;
}

export const Slots: React.FC<Props> = ({
  index,
  tabValue
}) => {
  const dispath = useDispatch();
  const slotDate = useSelector((state) => state.dateInfo.slot);

  const [slots, setSlots] = React.useState<DateSlots>();
  const [loaded, setLoaded] = React.useState(false);

  const setTime = (item: string, date: string) => {
    if (slotDate.time === item) {
      return dispath(addSlot(""));
    }

    const newDate = {
      date: date,
      time: item,
    };
    return dispath(addSlot(newDate));
  };

  const disabledButton = (time: string, date: string) => {
    let styles = {
      width: 100,
      margin: "5px 0",
      backgroundColor: "rgb(120, 136, 150)",
      color: "#FFF",
    };

    if (slotDate.date === date && slotDate.time === time) {
      styles = {
        ...styles,
        backgroundColor: "rgb(75, 92, 107)",
        color: "#FFF",
      };
      return styles;
    }

    return styles;
  };

  React.useEffect(() => {
    const callDates = async () => {
      const slots = await fetch("./api/slots.json");
      const data = await slots.json();

      setSlots(data);
      setLoaded(true);
    };

    callDates();
  }, []);

  return (
    <Grid
      style={{
        border: "1px solid gray",
        padding: 15,
        marginTop: 25,
      }}
      hidden={index !== tabValue}
    >
      <Typography>Proximos turnos disponibles</Typography>
      {loaded && slots?.date && <h5>{dateSetter(slots.date)}</h5>}
      <Grid item container alignItems={"center"} justifyContent={"center"}>
        {loaded &&
          slots?.availableTimeslots &&
          slots.availableTimeslots.map((time, index) => (
            <Grid
              key={index}
              container
              item
              alignItems={"center"}
              justifyContent={"center"}
              xs={6}
            >
              <Button
                style={disabledButton(time, slots.date)}
                key={index}
                onClick={() => setTime(time, slots.date)}
              >
                {time}
              </Button>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

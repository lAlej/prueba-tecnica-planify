import { Button, Grid } from "@mui/material";

import { useSelector } from "react-redux";

interface Props {
  tabValue: number;
  nextTab: () => void;
  backTab: () => void;
}

export const Buttons: React.FC<Props> = ({ nextTab, backTab, tabValue }) => {
  const slotDate = useSelector((state) => state.dateInfo.slot);
  const service = useSelector((state) => state.dateInfo.service);

  const hiddenBack = () => {
    let buttonBackStyles = {
      display: "flex",
      color: "#FFF",
      backgroundColor: "rgb(75, 92, 107)",
      cursor: "pointer",
      pointerEvents: "",
    };

    if (tabValue === 0) {
      buttonBackStyles = {
        ...buttonBackStyles,
        display: "none",
      };
      return buttonBackStyles;
    }
    if (tabValue === 2) {
      buttonBackStyles = {
        ...buttonBackStyles,
        cursor: "not-allowed",
        pointerEvents: "none",
        backgroundColor: "rgb(120, 136, 150)",
      };
      return buttonBackStyles;
    }

    return buttonBackStyles;
  };
  const hiddenNext = () => {
    let buttonNextStyles = {
      display: "flex",
      color: "#FFF",
      backgroundColor: "rgb(75, 92, 107)",
      cursor: "pointer",
      pointerEvents: "",
    };

    if (service === "") {
      buttonNextStyles = {
        ...buttonNextStyles,
        display: "none",
      };
      return buttonNextStyles;
    }
    if (tabValue === 1 && slotDate === "") {
      buttonNextStyles = {
        ...buttonNextStyles,
        cursor: "not-allowed",
        pointerEvents: "none",
        backgroundColor: "rgb(120, 136, 150)",
      };
      return buttonNextStyles;
    }

    if (tabValue === 2) {
      buttonNextStyles = {
        ...buttonNextStyles,
        cursor: "not-allowed",
        pointerEvents: "none",
      };
      return buttonNextStyles;
    }

    return buttonNextStyles;
  };

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent={tabValue === 0 ? "flex-end" : "space-between"}
      style={{ margin: "10px 0", height: 40 }}
    >
      <Button onClick={backTab} style={hiddenBack()}>
        Anterior
      </Button>
      <Button onClick={nextTab} style={hiddenNext()}>
        {tabValue === 2 ? "Confirmar" : "Siguiente"}
      </Button>
    </Grid>
  );
};

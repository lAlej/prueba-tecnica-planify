import React from "react";
import { Grid } from "@mui/material";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { Slots } from "./components/Slots";
import { ConfirnTurn } from "./components/ConfirmTurn";
import { Footer } from "./components/Footer";
import { Buttons } from "./components/Buttons";

function App() {
  const [tabValue, setTabValue] = React.useState(0);

  const nextTab = () => {
    setTabValue(tabValue + 1);
  };

  const backTab = () => {
    setTabValue(tabValue - 1);
  };

  return (
    <Grid
      container
      item
      xs={12}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item xs={10} sm={6} md={4} lg={3} xl={2}>
        <Header index={tabValue} />
        <Categories index={0} tabValue={tabValue}  />
        <Slots
          index={1}
          tabValue={tabValue}
        />
        <ConfirnTurn
          index={2}
          tabValue={tabValue}
        />
        <Buttons nextTab={nextTab} backTab={backTab} tabValue={tabValue}/>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;

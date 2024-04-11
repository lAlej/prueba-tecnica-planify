import React from "react";
import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { typeCategories, Services } from "../types";
import {Category} from "./Category";

interface Props {
  index: number;
  tabValue: number;
}

export const Categories: React.FC<Props> = ({ index, tabValue }) => {


  const [categories, setCategories] = React.useState<typeCategories>({});
  const [loaded, setLoaded] = React.useState(false);

  const perCategory = (services: Services): void => {
    const categorias: { [key: string]: Services } = {};

    services.forEach((obj) => {
      const category: string = obj.category;
      if (!categorias[category]) {
        categorias[category] = [];
      }

      categorias[category].push(obj);
    });

    setCategories(categorias);
    setLoaded(true);
  };

  const renderCategories = () => {
    const keys = Object.keys(categories);

    return keys.map((keyName, index) => (
      <Category key={index} specs={categories[keyName]} />
    ));
  };

  useEffect(() => {
    const callCategories = async () => {
      const services = await fetch("./api/services.json");
      const data = await services.json();

      perCategory(data.services);
    };

    callCategories();
  }, []);

  return (
    <Grid
      item
      xs={12}
      style={{
        border: "1px solid rgb(216, 222, 227)",
        padding: "15px 0",
        marginTop: 25,
      }}
      hidden={tabValue !== index}
    >
      <Typography style={{ padding: "5px 2px" }}>Categorias</Typography>
      {loaded && renderCategories()}
      
    </Grid>
  );
};

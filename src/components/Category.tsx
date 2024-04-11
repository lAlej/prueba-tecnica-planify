import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography, Button } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import { useSelector, useDispatch } from "react-redux";
import { Service, Services } from "../types";
import { addService } from "../app/dateService";


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props{
  specs: Services
}

export const Category: React.FC<Props>= ({ specs }) => {

  const dispath = useDispatch();
  const service = useSelector((state) => state.dateInfo.service);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const setService = (item: Service) => {
    console.log(item);
    if (service.name === item.name) {
      return dispath(addService(""));
    }

    return dispath(addService(item));
  };

  const disabledButton = (item: Service) => {
    let styles = {
      backgroundColor: "rgb(120, 136, 150)",
      color: "#FFF",
    };
    if (service.name === item.name) {
      styles = {
        backgroundColor: "rgb(75, 92, 107)",
        color: "#FFF",
      };
      return styles;
    }

    return styles;
  };

  return (
    <Grid item xs={12} style={{ margin: "5px 0"}}>
      <Card style={{boxShadow: "none"}}>
        <CardActions disableSpacing sx={{ height: 20 }}>
          <CardHeader title={specs[0].category} />
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {!expanded ? <AddIcon /> : <HorizontalRuleIcon />}
          </ExpandMore>
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          style={{ padding: "0 20px 20px 20px" }}
        >
          {specs.map((item, index) => (
            <Grid
              item
              container
              xs={12}
              key={index}
              style={{
                border: "1px solid darkGray",
                marginTop: 10,
                padding: 10,
              }}
            >
              <Typography>{item.name}</Typography>
              <Typography fontSize={14}>{item.description}</Typography>
              <Grid container item xs={12} justifyContent={"flex-end"}>
                <Button
                  style={disabledButton(item)}
                  onClick={() => setService(item)}
                >
                  {service.name === item.name ? "Seleccionado" : "Seleccionar"}
                </Button>
              </Grid>
            </Grid>
          ))}
        </Collapse>
      </Card>
    </Grid>
  );
}

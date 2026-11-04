import React from "react";
import Tv from "../tvCard/";
import Grid from "@mui/material/Grid";

const TvList = (props) => {
  let tvCards = props.tv.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
    <Tv key={m.id} tv={m} action={props.action} linkBase={props.linkBase} />

    </Grid>
  ));
  return tvCards;
};

export default TvList;

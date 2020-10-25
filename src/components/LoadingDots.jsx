import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { style } from "./style";

function LoadingDots(props) {
  const classes = style();
  let firstDot = [classes.dots, classes.firstDot].join(" ");
  let secondDot = [classes.dots, classes.secondDot].join(" ");

  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      wrap="nowrap"
      className={classes.wrapper}
    >
      <Grid item>
        <span className={firstDot} />
      </Grid>
      <Grid item>
        <span className={secondDot} />
      </Grid>
      <Grid item>
        <span className={classes.dots} />
      </Grid>
    </Grid>
  );
}

export default LoadingDots;

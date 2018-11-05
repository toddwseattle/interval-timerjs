// Timer Stateless Functional Components
import React from "react";
import TimeCircle from "./TimeCircle";
import { Paper, Typography } from "@material-ui/core";
export const TimeDisplay = ({
  toDisplay,
  duration = 60,
  play = true,
  reset = false,
  resetCallback,
  timerDone
}) => {
  return (
    <Paper>
      <div>
        <Typography variant="h4" align="center">
          {toDisplay}
        </Typography>
        <TimeCircle
          seconds={duration}
          play={play}
          reset={reset}
          resetCallback={resetCallback}
          timerDone={timerDone}
        />
      </div>
    </Paper>
  );
};

export default TimeDisplay;

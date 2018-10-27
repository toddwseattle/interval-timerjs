// Timer Stateless Functional Components
import React from "react";
import TimeCircle from "./TimeCircle";
export const TimeDisplay = ({
  toDisplay,
  duration = 60,
  play = true,
  reset = false,
  resetCallback,
  timerDone
}) => {
  return (
    <div>
      <h1>{toDisplay}</h1>
      <TimeCircle
        seconds={duration}
        play={play}
        reset={reset}
        resetCallback={resetCallback}
        timerDone={timerDone}
      />
    </div>
  );
};

export default TimeDisplay;

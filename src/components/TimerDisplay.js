// Timer Stateless Functional Components
import React from "react";
import TimeCircle from "./timecircle";
export const TimeDisplay = ({
  toDisplay,
  duration = 60,
  play = true,
  reset = false,
  resetCallback
}) => {
  return (
    <div>
      <h1>{toDisplay}</h1>
      <TimeCircle
        seconds={duration}
        play={play}
        reset={reset}
        resetCallback={resetCallback}
      />
    </div>
  );
};

export default TimeDisplay;

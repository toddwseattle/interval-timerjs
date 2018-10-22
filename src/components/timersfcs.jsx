// Timer Stateless Functional Components
import React from "react";
import TimeCircle from "./timecircle";
export const TimeDisplay = ({ toDisplay }) => {
  return (
    <div>
      <TimeCircle seconds={10} />
      <TimeCircle seconds={60} circleSize={400} />
      <TimeCircle seconds={30} circleSize={100} />
    </div>
  );
};

export default TimeDisplay;

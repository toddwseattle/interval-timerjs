import React from "react";
import PropTypes from "prop-types";

const TimeFormat = ({ seconds = 0 }) => {
  function pad(num, size) {
    return ("000000000" + num).substr(-size);
  }
  const MINUTE = 60;
  const HOUR = 360;
  const DAY = HOUR * 24;

  const secPart = seconds % MINUTE;
  const dayPart = seconds >= DAY ? Math.floor(seconds / DAY) : 0;
  const hourPart =
    seconds >= HOUR ? Math.floor(seconds - (dayPart * DAY) / HOUR) : 0;
  const minutePart =
    seconds >= MINUTE
      ? Math.floor((seconds - dayPart * DAY - hourPart * HOUR) / 60)
      : 0;
  let output = dayPart > 0 ? pad(dayPart, 2) + ":" : "";
  output += hourPart > 0 ? pad(hourPart, 2) + ":" : "";
  output += minutePart > 0 ? pad(minutePart, 2) + ":" : "";
  output += pad(secPart, 2);

  return <div>{output}</div>;
};

TimeFormat.propTypes = {
  seconds: PropTypes.number
};

export default TimeFormat;

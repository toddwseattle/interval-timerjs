import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const IntervalDisplay = ({ remain, total }) => {
  const lastTimeStyle = { color: "red" };
  if (remain > 1) {
    return (
      <Typography variant="h3" align="center">
        {remain} of {total} Times Left
      </Typography>
    );
  } else if (remain === 1 && total > 1) {
    return (
      <Typography variant="h3" align="center" style={lastTimeStyle}>
        Last Time{" "}
      </Typography>
    );
  } else if (remain === 1) {
    return (
      <Typography variant="h3" align="center" style={lastTimeStyle}>
        One Interval
      </Typography>
    );
  } else {
    return (
      <Typography variant="h3" align="center">
        Intervals Complete
      </Typography>
    );
  }
};

IntervalDisplay.propTypes = {
  remain: PropTypes.number
};

export default IntervalDisplay;

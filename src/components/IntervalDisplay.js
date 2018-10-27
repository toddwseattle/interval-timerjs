import React from "react";
import PropTypes from "prop-types";

const IntervalDisplay = ({ remain }) => {
  if (remain > 1) {
    return <h1>{remain} Times Left</h1>;
  } else if (remain === 1) {
    return <h1>Last Time</h1>;
  } else {
    return <h1>Intervals Complete</h1>;
  }
};

IntervalDisplay.propTypes = {
  remain: PropTypes.number
};

export default IntervalDisplay;

import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import CenterH3 from "./CenterH3";

const IntervalDisplay = ({ remain, total }) => {
  if (remain > 1) {
    return (
      <Typography variant="h3" align="center">
        {remain} of {total} Times Left
      </Typography>
    );
  } else if (remain === 1 && total > 1) {
    return <CenterH3>Last Time </CenterH3>;
  } else if (remain === 1) {
    return <CenterH3>One Interval</CenterH3>;
  } else {
    return <CenterH3>Intervals Complete</CenterH3>;
  }
};

IntervalDisplay.propTypes = {
  remain: PropTypes.number
};

export default IntervalDisplay;

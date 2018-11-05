import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

export default function PlayPause({ onchange, play }) {
  const bColor = play ? "secondary" : "primary";
  return (
    <div>
      <Button
        variant="contained"
        size="large"
        color={bColor}
        onClick={onchange}
      >
        {play ? "Pause" : "Play"}
      </Button>
    </div>
  );
}

PlayPause.propTypes = {
  onchange: PropTypes.func.isRequired,
  play: PropTypes.bool
};

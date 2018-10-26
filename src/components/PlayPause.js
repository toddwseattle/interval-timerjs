import React from "react";
import PropTypes from "prop-types";

export default function PlayPause({ onchange, play }) {
  return (
    <div>
      <button onClick={onchange}>{play ? "Pause" : "Play"}</button>
    </div>
  );
}

PlayPause.propTypes = {
  onchange: PropTypes.func.isRequired,
  play: PropTypes.bool
};

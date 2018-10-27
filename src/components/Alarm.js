import React from "react";
import PropTypes from "prop-types";
import soundfile from "../assets/analog-watch.mp3";

const Alarm = ({ play }) => {
  let myRef = React.createRef();
  if (play) {
    return <audio ref={myRef} src={soundfile} autoPlay />;
  } else {
    return <span />;
  }
};

Alarm.propTypes = {
  play: PropTypes.bool
};

export default Alarm;

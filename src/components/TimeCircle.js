import React, { Component } from "react";
import PropTypes from "prop-types";
import TimeFormat from "./TimeFormat";
import Alarm from "./Alarm";
// default styles
const TimeCircleDiv = { position: "relative" };
const TimeCircleText = {
  textAlign: "center",
  position: "absolute",
  lineHeight: "120px",
  width: "100%",
  zIndex: 2
};
const Svg = { transform: "rotate(-90deg)" };
const CircleAnimationDefault = {
  strokeDasharray: 400,
  strokeDashoffset: 430,
  transition: "all 1s linear"
};

const PI = 3.1415927;

class TimeCircle extends Component {
  static propTypes = {
    seconds: PropTypes.number.isRequired,
    circleSize: PropTypes.number,
    play: PropTypes.bool,
    reset: PropTypes.bool,
    resetCallback: PropTypes.func,
    timerDone: PropTypes.func,
    colors: PropTypes.object
  };

  constructor(props) {
    super(props);
    const circleSize = props.circleSize ? props.circleSize : 160;
    const totalCount = props.seconds;
    const circumference = circleSize * 0.875 * PI;
    this.circleAnimation = {
      ...CircleAnimationDefault,
      strokeDasharray: circumference,
      zIndex: 1
    };
    this.circleText = {
      ...TimeCircleText,
      lineHeight: (1 * circleSize * 0.75).toString() + "px"
    };
    this.state = {
      circleSize: circleSize,
      radius: 1 * ((circleSize / 2) * 0.875),
      circumference: circumference,
      sliceSize: 1 * (circumference / (totalCount - 1)),
      mounted: false,
      totalCount: totalCount,
      remainCount: totalCount,
      colors: this.setColors(this.props.colors ? this.props.colors : {})
    };
    this.startinterval();
  }
  setColors = ({
    background = "lightblue",
    stopFill = "Red",
    playFill = "Green",
    stopSweep = "Black",
    playSweep = "Blue"
  }) => {
    const newColors =
      this.state && this.state.colors
        ? {
            ...this.state.colors,
            background,
            stopFill,
            playFill,
            stopSweep,
            playSweep
          }
        : { background, stopFill, stopSweep, playSweep, playFill };
    return newColors;
  };
  startinterval = (space = 1000) => {
    this.interval = setInterval(this.tick.bind(this), space);
  };
  componentDidMount = () => {
    this.setState({ ...this.state, mounted: true });
  };
  componentWillUnMount = () => {
    if (this.interval) clearInterval(this.interval);
  };
  tick = () => {
    if (!this.state.mounted) return;
    if (this.props.reset) {
      this.resetTimer();
    } else if (this.state.remainCount > 0 && this.props.play) {
      this.setState({
        ...this.state,
        remainCount: this.state.remainCount - 1
      });
    } else if (this.state.remainCount === 0 && this.props.play) {
      this.props.timerDone();
    }
  };

  resetTimer = () => {
    const totalCount = this.props.seconds ? this.props.seconds : 10;
    this.setState({
      ...this.state,
      totalCount: totalCount,
      remainCount: totalCount,
      resetTimer: false,
      sliceSize: 1 * (this.state.circumference / (totalCount - 1))
    });
    this.props.resetCallback();
  };
  render = () => {
    let circleA = { ...this.circleAnimation };
    circleA.strokeDashoffset =
      this.state.remainCount > 0
        ? this.state.sliceSize * (this.state.remainCount - 1)
        : 0;
    const divStyle = {
      ...TimeCircleDiv,
      backgroundColor: this.state.colors.background
    };
    return (
      <div style={divStyle}>
        <h2 style={this.circleText}>
          <TimeFormat seconds={this.state.remainCount} />
        </h2>
        <svg
          width={this.state.circleSize}
          height={this.state.circleSize}
          xmlns="http://www.w3.org/2000/svg"
          style={Svg}
        >
          <circle
            id="timecircle"
            style={circleA}
            strokeWidth={8}
            r={this.state.radius}
            cy={1 * (this.state.circleSize / 2) + 1}
            cx={1 * (this.state.circleSize / 2) + 1}
            fill={
              this.props.play
                ? this.state.colors.playFill
                : this.state.colors.stopFill
            }
            stroke={
              this.props.play
                ? this.state.colors.playSweep
                : this.state.colors.stopSweep
            }
          />
        </svg>
        <Alarm play={this.state.remainCount === 0 && this.props.play} />
      </div>
    );
  };
}

export default TimeCircle;

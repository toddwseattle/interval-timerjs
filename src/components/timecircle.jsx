import React, { Component } from "react";
import PropTypes from "prop-types";
// default styles
const TimeCircleDiv = { position: "relative", float: "left" };
const TimeCircleText = {
  textAlign: "center",
  position: "absolute",
  lineHeight: "120px",
  width: "100%"
};
const Svg = { transform: "rotate(-90deg)" };
const CircleAnimationDefault = {
  strokeDasharray: 400,
  strokeDashoffset: 430,
  transition: "all 1s linear"
};

const PI = 3.1415927;

class TimeCircle extends Component {
  constructor(props) {
    super(props);
    const circleSize = props.circleSize ? props.circleSize : 160;
    const totalCount = props.seconds ? props.seconds : 10;
    const circumference = circleSize * 0.875 * PI;
    this.circleAnimation = {
      ...CircleAnimationDefault,
      strokeDasharray: circumference
    };
    console.log((1 * circleSize * 0.75).toString() + "px");
    this.circleText = {
      ...TimeCircleText,
      lineHeight: (1 * circleSize * 0.75).toString() + "px"
    };
    this.state = {
      totalCount: totalCount,
      remainCount: totalCount,
      circleSize: circleSize,
      radius: 1 * ((circleSize / 2) * 0.875),
      circumferance: circumference,
      sliceSize: 1 * (circumference / (totalCount - 1))
    };
    console.log(this.state);
  }
  startinterval(space = 1000) {
    if (this.mounted) {
      this.interval = setInterval(this.tick.bind(this), space);
    }
  }
  componentDidMount() {
    this.mounted = true;
    this.startinterval();
  }
  componsnetWillUnMount() {
    if (this.interval) clearInterval(this.interval);
  }
  tick() {
    if (this.mounted) {
      console.log(this.state);
      if (this.state.remainCount > 0) {
        this.setState({
          ...this.state,
          remainCount: this.state.remainCount - 1
        });
      } else {
        clearInterval(this.interval);
      }
    }
  }

  render() {
    let circleA = { ...this.circleAnimation };
    circleA.strokeDashoffset =
      this.state.remainCount > 0
        ? this.state.sliceSize * (this.state.remainCount - 1)
        : 0;
    console.log(circleA.strokeDashoffset);
    return (
      <div style={TimeCircleDiv}>
        <h2 style={this.circleText}>{this.state.remainCount}</h2>
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
            fill="none"
            r={this.state.radius}
            cy={1 * (this.state.circleSize / 2) + 1}
            cx={1 * (this.state.circleSize / 2) + 1}
            stroke="black"
          />
        </svg>
      </div>
    );
  }
}

TimeCircle.propTypes = {
  seconds: PropTypes.number,
  circleSize: PropTypes.number
};

export default TimeCircle;

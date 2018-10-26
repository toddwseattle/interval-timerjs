import React, { Component } from "react";
import PropTypes from "prop-types";
import Intervalinput from "../components/intervalinput";
import TimeSpan from "../components/timespan";

export class Commands extends Component {
  static propTypes = {
    show: PropTypes.bool
  };
  static defaultProps = {
    show: true
  };
  constructor(props) {
    super(props);
    this.state = { intervals: 2, timespan: 60 };
    this.setInterval = this.setInterval.bind(this);
    this.setTimeSpan = this.setTimeSpan.bind(this);
  }
  setInterval(e) {
    console.log(e.target.value);
    this.setState({ ...this.state, intervals: parseInt(e.target.value) });
    if (this.props.onchange) {
      this.props.onchange(this.state.intervals, this.state.timespan);
    }
  }
  setTimeSpan(e) {
    console.log(e.target.value);
    const tspan = parseInt(e.target.value, 10);
    this.setState({ ...this.state, timespan: tspan });
    if (this.props.onchange) {
      this.props.onchange(this.state.intervals, tspan);
    }
  }
  render() {
    let comDisp = this.props.show ? (
      <div>
        <Intervalinput
          valueChange={this.setInterval}
          intervals={this.state.intervals}
        />
        <TimeSpan onselect={this.setTimeSpan} timespan={this.state.timespan} />
      </div>
    ) : (
      <div />
    );
    return comDisp;
  }
}

export default Commands;

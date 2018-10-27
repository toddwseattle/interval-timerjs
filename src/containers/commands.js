import React, { Component } from "react";
import PropTypes from "prop-types";
import IntervalInput from "../components/IntervalInput";
import TimeSpan from "../components/TimeSpan";
import BreakTimeInput from "../components/BreakTimeInput";

export class Commands extends Component {
  static propTypes = {
    show: PropTypes.bool
  };
  static defaultProps = {
    show: true
  };
  constructor(props) {
    super(props);
    this.state = { intervals: 2, timespan: 60, tbreak: 0 };
    this.setInterval = this.setInterval.bind(this);
    this.setTimeSpan = this.setTimeSpan.bind(this);
    this.setBreak = this.setBreak.bind(this);
  }
  setInterval(e) {
    const ivals = parseInt(e.target.value);
    this.setState({ ...this.state, intervals: ivals });
    if (this.props.onchange) {
      this.props.onchange({ ...this.state, intervals: ivals });
    }
  }
  setBreak(e) {
    const tbr = parseInt(e.target.value, 10);
    this.setState({ ...this.state, tbreak: tbr });
    if (this.props.onchange) {
      this.props.onchange({ ...this.state, tbreak: tbr });
    }
  }
  setTimeSpan(e) {
    const tspan = parseInt(e.target.value, 10);
    this.setState({ ...this.state, timespan: tspan });
    if (this.props.onchange) {
      this.props.onchange({ ...this.state, timespan: tspan });
    }
  }
  render() {
    let comDisp = this.props.show ? (
      <div>
        <IntervalInput
          valueChange={this.setInterval}
          intervals={this.state.intervals}
        />
        <TimeSpan onselect={this.setTimeSpan} timespan={this.state.timespan} />
        <BreakTimeInput onselect={this.setBreak} bTime={this.state.tbreak} />
      </div>
    ) : (
      <div />
    );
    return comDisp;
  }
}

export default Commands;

import React, { Component } from "react";
import PropTypes from "prop-types";
import IntervalInput from "../components/IntervalInput";
import TimeSpan from "../components/TimeSpan";
import BreakTimeInput from "../components/BreakTimeInput";
import { Grid } from "@material-ui/core";

export class Commands extends Component {
  static propTypes = {
    show: PropTypes.bool,
    onchange: PropTypes.func
  };
  static defaultProps = {
    show: true
  };
  state = { intervals: 2, timespan: 60, breakspan: 0 };
  setIntervalHandler = e => {
    const ivals = parseInt(e.target.value);
    this.setState({ intervals: ivals });
    if (this.props.onchange) {
      this.props.onchange({ ...this.state, intervals: ivals });
    }
  };
  setBreakHandler = e => {
    const tbr = parseInt(e.target.value, 10);
    this.setState({ breakspan: tbr });
    if (this.props.onchange) {
      this.props.onchange({ ...this.state, breakspan: tbr });
    }
  };
  setTimeSpanHandler = e => {
    const tspan = parseInt(e.target.value, 10);
    this.setState({ timespan: tspan });
    if (this.props.onchange) {
      this.props.onchange({ ...this.state, timespan: tspan });
    }
  };
  render = () => {
    let comDisp = this.props.show ? (
      <div>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={16}
        >
          <Grid item>
            <IntervalInput
              valueChange={this.setIntervalHandler.bind(this)}
              intervals={this.state.intervals}
            />
          </Grid>
          <Grid item>
            <TimeSpan
              onselect={this.setTimeSpanHandler.bind(this)}
              timespan={this.state.timespan}
            />
          </Grid>
          <Grid item>
            <BreakTimeInput
              onselect={this.setBreakHandler.bind(this)}
              bTime={this.state.breakspan}
            />
          </Grid>
        </Grid>
      </div>
    ) : (
      <div />
    );
    return comDisp;
  };
}

export default Commands;

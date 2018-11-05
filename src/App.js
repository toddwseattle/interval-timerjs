import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import TimerDisplay from "./components/TimerDisplay";
import Commands from "./containers/Commands";
import PlayPause from "./components/PlayPause";
import IntervalDisplay from "./components/IntervalDisplay";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class App extends Component {
  state = {
    intervals: 1,
    intervalsRemaining: 1,
    duration: 60,
    breakDuration: 0,
    takingBreak: false,
    breakReset: false,
    reset: false,
    play: false,
    intervalDone: false,
    cycleDone: false
  };

  intervalDone = () => {
    const remain = this.state.intervalsRemaining - 1;
    const done = remain <= 0;
    const newDuration = done ? 0 : this.state.duration;
    const takingBreak = this.state.breakDuration > 0 && !done;
    this.setState({
      // ...this.state,
      intervalsRemaining: remain,
      duration: newDuration,
      cycleDone: done,
      reset: true,
      breakReset: true,
      play: this.state.play && !done,
      intervalDone: true,
      takingBreak: takingBreak
    });
    if (done) {
      this.intervalChangeHandler({
        intervals: this.state.intervals,
        timespan: this.state.duration,
        breakspan: this.state.breakDuration
      });
    }
  };

  breakCompleteHandler = () => {
    this.setState({ takingBreak: false, breakReset: true });
  };

  intervalChangeHandler = ({ intervals = 1, timespan = 60, breakspan = 0 }) => {
    this.setState({
      // ...this.state,
      intervals: intervals,
      intervalsRemaining: intervals,
      duration: timespan,
      breakDuration: breakspan,
      reset: true,
      breakReset: true,
      play: false
    });
  };
  resetComplete = () => {
    this.setState({ reset: false });
  };
  breakResetComplete = () => {
    this.setState({ breakReset: false });
  };
  ppClick = () => {
    this.setState({ ...this.state, play: !this.state.play });
  };
  render = () => {
    const { classes } = this.props;
    const breakMessage = this.state.takingBreak ? "Start Again in:" : "Break";
    return (
      <div className={classes.root}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid item>
            <Paper>
              <Commands onchange={this.intervalChangeHandler.bind(this)} />
            </Paper>
          </Grid>
          <Paper>
            <PlayPause onchange={this.ppClick} play={this.state.play} />
          </Paper>
          <Grid item>
            <Paper>
              <IntervalDisplay
                remain={this.state.intervalsRemaining}
                total={this.state.intervals}
              />
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={16}
              >
                <Grid item>
                  <TimerDisplay
                    toDisplay={
                      this.state.cycleDone
                        ? "Time's Up!"
                        : "Interval #" +
                          (this.state.intervals -
                            this.state.intervalsRemaining +
                            1)
                    }
                    duration={this.state.duration}
                    play={this.state.play && !this.state.takingBreak}
                    reset={this.state.reset}
                    resetCallback={this.resetComplete.bind(this)}
                    timerDone={this.intervalDone.bind(this)}
                  />
                </Grid>
                <Grid item>
                  <TimerDisplay
                    toDisplay={breakMessage}
                    duration={this.state.breakDuration}
                    play={this.state.play && this.state.takingBreak}
                    reset={this.state.breakReset}
                    resetCallback={this.breakResetComplete.bind(this)}
                    timerDone={this.breakCompleteHandler.bind(this)}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
}

export default withStyles(styles)(App);

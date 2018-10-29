import React, { Component } from "react";
import "./App.css";
import TimerDisplay from "./components/TimerDisplay";
import Commands from "./containers/Commands";
import PlayPause from "./components/PlayPause";
import IntervalDisplay from "./components/IntervalDisplay";

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
    const breakMessage = this.state.takingBreak
      ? "Taking a Break"
      : "In interval";
    return (
      <div className="App">
        <Commands onchange={this.intervalChangeHandler.bind(this)} />
        <PlayPause onchange={this.ppClick} play={this.state.play} />
        <IntervalDisplay remain={this.state.intervalsRemaining} />
        <TimerDisplay
          toDisplay={
            this.state.cycleDone
              ? "Time's Up!"
              : "Interval #" +
                (this.state.intervals - this.state.intervalsRemaining + 1)
          }
          duration={this.state.duration}
          play={this.state.play && !this.state.takingBreak}
          reset={this.state.reset}
          resetCallback={this.resetComplete.bind(this)}
          timerDone={this.intervalDone.bind(this)}
        />
        <TimerDisplay
          toDisplay={breakMessage}
          duration={this.state.breakDuration}
          play={this.state.play && this.state.takingBreak}
          reset={this.state.breakReset}
          resetCallback={this.breakResetComplete.bind(this)}
          timerDone={this.breakCompleteHandler.bind(this)}
        />
      </div>
    );
  };
}

export default App;

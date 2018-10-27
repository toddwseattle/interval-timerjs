import React, { Component } from "react";
import "./App.css";
import TimerDisplay from "./components/TimerDisplay";
import Commands from "./containers/Commands";
import PlayPause from "./components/PlayPause";
import IntervalDisplay from "./components/IntervalDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.intervalChange = this.intervalChange.bind(this);
    this.resetComplete = this.resetComplete.bind(this);
    this.intervalDone = this.intervalDone.bind(this);
    this.ppClick = this.ppClick.bind(this);
    this.state = {
      intervals: 1,
      intervalsRemaining: 1,
      duration: 60,
      tbreak: 0,
      reset: false,
      play: false,
      intervalDone: false,
      cycleDone: false
    };
  }
  intervalDone() {
    const remain = this.state.intervalsRemaining - 1;
    const done = remain <= 0;
    const newDuration = done ? 0 : this.state.duration;
    this.setState({
      ...this.state,
      intervalsRemaining: remain,
      duration: newDuration,
      cycleDone: done,
      reset: true,
      play: this.state.play && !done,
      intervalDone: true
    });
  }

  intervalChange({ intervals = 1, timespan = 60, tbreak = 0 }) {
    this.setState({
      ...this.state,
      intervals: intervals,
      intervalsRemaining: intervals,
      duration: timespan,
      tbreak: tbreak,
      reset: true,
      play: false
    });
  }
  resetComplete() {
    this.setState({ ...this.state, reset: false });
  }
  ppClick() {
    this.setState({ ...this.state, play: !this.state.play });
  }
  render() {
    return (
      <div className="App">
        <Commands onchange={this.intervalChange} />
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
          play={this.state.play}
          reset={this.state.reset}
          resetCallback={this.resetComplete}
          timerDone={this.intervalDone}
        />
      </div>
    );
  }
}

export default App;

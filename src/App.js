import React, { Component } from "react";
import "./App.css";
import TimerDisplay from "./components/TimerDisplay";
import Commands from "./containers/commands";
import PlayPause from "./components/PlayPause";

class App extends Component {
  constructor(props) {
    super(props);
    this.intervalChange = this.intervalChange.bind(this);
    this.resetComplete = this.resetComplete.bind(this);
    this.ppClick = this.ppClick.bind(this);
    this.state = {
      intervals: 1,
      duration: 60,
      reset: false,
      play: false
    };
  }
  intervalChange(intervals = 1, duration = 60) {
    this.setState({
      ...this.state,
      intervals: intervals,
      duration: duration,
      play: false,
      reset: true
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
        <TimerDisplay
          toDisplay="Interval"
          duration={this.state.duration}
          play={this.state.play}
          reset={this.state.reset}
          resetCallback={this.resetComplete}
        />
      </div>
    );
  }
}

export default App;

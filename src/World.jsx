import React from "react";
import five from "johnny-five";
import Led from "./Led.js";
import LightSensor from "./LightSensor.js";
import MoistureSensor from "./MoistureSensor.js";

class World extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      light: 0,
      moisture: 0,
    };

    // Initialise arduino for this World
    const arduino = new five.Board();
    arduino.on("ready", () => this.setState({ ready: true }));

    this._update = this._update.bind(this);
  }

  _update(state, value) {
    this.setState({ [state]: value });
  }

  render() {
    let worldElements = "";

    if (this.state.ready) {
      worldElements = (
        <div>
          <Led pin={2} on={this.state.moisture > 500} />
          <Led pin={4} on={this.state.light < 130} />
          <LightSensor pin={"A1"} update={this._update} />
          <MoistureSensor pin={"A2"} update={this._update} />
        </div>
      );
    }

    return <div>{worldElements}</div>;
  }
}

export default World;

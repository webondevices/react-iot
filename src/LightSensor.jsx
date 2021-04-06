import React from "react";
import five from "johnny-five";

class LightSensor extends React.Component {
  constructor(props) {
    super(props);
    this._sensorInstance = new five.Sensor({
      pin: this.props.pin,
      freq: 1000,
    });
  }

  componentDidMount() {
    this._sensorInstance.on("data", (reading) => {
      this.props.update("light", reading);
    });
  }

  render() {
    return <div>Light Sensor</div>;
  }
}

export default LightSensor;

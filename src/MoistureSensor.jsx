import React from "react";
import five from "johnny-five";

class MoistureSensor extends React.Component {
  constructor(props) {
    super(props);
    this._sensorInstance = new five.Sensor({
      pin: this.props.pin,
      freq: 1000,
    });
  }

  componentDidMount() {
    this._sensorInstance.on("data", (reading) => {
      this.props.update("moisture", reading);
    });
  }

  render() {
    return <div>Moisture Sensor</div>;
  }
}

export default MoistureSensor;

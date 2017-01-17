const React = require('react');
const five = require('johnny-five');

module.exports = class MoistureSensor extends React.Component {
  constructor(props) {
    super(props);
    this._sensorInstance = new five.Sensor({
        pin: this.props.pin,
        freq: 1000
    });
  }

  componentDidMount() {
    this._sensorInstance.on('data', reading => {        
        this.props.update('moisture', reading);
    });
  }

  render() {
    return (<div>Moisture Sensor</div>);
  }
};
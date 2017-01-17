const React = require('react');
const five = require('johnny-five');

module.exports = class Led extends React.Component {
  constructor(props) {
    super(props);
    this._ledInstance = new five.Led(this.props.pin);
  }
  
  render() {
  	if (this.props.on) {
  		this._ledInstance.on();
  	} else {
  		this._ledInstance.off();
  	}
    return (<div>Led</div>);
  }
};
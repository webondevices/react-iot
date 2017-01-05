const React = require('react');
const New = require('./New');

module.exports = class Clock extends React.Component {
  constructor() {
    super();

    this.state = { time: -1 };
    this.interval = null;
  }

  componentWillMount() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({ time: Date.now() });
    });
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    return (<div><p>{this.state.time}</p><New/></div>);
  }
};
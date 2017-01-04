const React = require('react');

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
    return React.createElement('p', null, String(this.state.time));
  }
};

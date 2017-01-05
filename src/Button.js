const React = require('react');

module.exports = class Button extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
    this._clicked = this._clicked.bind(this);
  }

  _clicked() {
    this.setState({active: !this.state.active})
  }

  render() {
    return (<div><button onClick={this._clicked} style={{backgroundColor: 'red'}}>Hello</button></div>);
  }
};
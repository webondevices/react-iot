import React from "react";
import five from "johnny-five";

class Led extends React.Component {
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
    return <div>Led</div>;
  }
}

export default Led;

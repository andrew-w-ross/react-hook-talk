import React, { Component } from "react";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Component Counter {count}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default CounterComponent;

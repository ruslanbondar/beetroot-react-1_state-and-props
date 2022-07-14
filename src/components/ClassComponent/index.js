import React from 'react';

export class ClassComponent extends React.Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h1>ClassComponent</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.onIncrement}>Increment</button>
      </div>
    );
  }
}

// export default ClassComponent;

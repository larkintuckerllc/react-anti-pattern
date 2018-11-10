import React, { PureComponent } from 'react';

class SetStateAsyncBad extends PureComponent {
  state = {
    counter: 0,
  };

  increment = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  handleClick = () => {
    this.increment();
    this.increment();
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>setState Async Bad</h1>
        <div>{counter}</div>
        <button
          type="button"
          onClick={this.handleClick}
        >
            Increment
        </button>
      </div>
    );
  }
}

export default SetStateAsyncBad;

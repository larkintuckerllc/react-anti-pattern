import React, { PureComponent } from 'react';

const increment = ({ counter }) => ({
  counter: counter + 1,
});

class SetStateAsyncGood extends PureComponent {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(increment);
    this.setState(increment);
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>setState Async Good</h1>
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

export default SetStateAsyncGood;

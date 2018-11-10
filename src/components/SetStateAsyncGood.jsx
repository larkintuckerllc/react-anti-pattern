import React, { PureComponent } from 'react';

class SetStateAsyncGood extends PureComponent {
  state = {
    counter: 0,
  };

  increment = ({ counter }) => ({
    counter: counter + 1,
  });

  handleClick = () => {
    this.setState(this.increment);
    this.setState(this.increment);
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

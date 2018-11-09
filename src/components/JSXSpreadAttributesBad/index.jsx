import React, { PureComponent } from 'react';
import JSXSpreadAttributesBadChild from './JSXSpreadAttributesBadChild';

class JSXSpreadAttributesBad extends PureComponent {
  state = {
    counter: 0,
    subtitle: 'Example Subtitle',
  };

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 }); // ACTUALLY AN ANOTHER ANTI-PATTERN
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <JSXSpreadAttributesBadChild {...this.state} />
        <div>{counter.toString()}</div>
        <div><button type="button" onClick={this.handleClick}>Increment</button></div>
      </div>
    );
  }
}

export default JSXSpreadAttributesBad;

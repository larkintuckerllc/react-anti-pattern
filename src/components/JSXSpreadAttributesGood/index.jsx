import React, { PureComponent } from 'react';
import JSXSpreadAttributesGoodChild from './JSXSpreadAttributesGoodChild';

class JSXSpreadAttributesGood extends PureComponent {
  state = {
    counter: 0,
    subtitle: 'Example Subtitle',
  };

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 }); // ACTUALLY AN ANOTHER ANTI-PATTERN
  };

  render() {
    const { counter, subtitle } = this.state;
    return (
      <div>
        <JSXSpreadAttributesGoodChild subtitle={subtitle} />
        <div>{counter.toString()}</div>
        <div><button type="button" onClick={this.handleClick}>Increment</button></div>
      </div>
    );
  }
}

export default JSXSpreadAttributesGood;

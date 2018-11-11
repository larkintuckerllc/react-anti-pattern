import React, { PureComponent } from 'react';
import PropDrillingGoodMenuItem from './PropDrillingGoodMenuItem';
import PropDrillingGoodMenuA from './PropDrillingGoodMenuA';
import PropDrillingGoodMenuB from './PropDrillingGoodMenuB';
import PropDrillingGoodMenuC from './PropDrillingGoodMenuC';
import PropDrillingGoodMenuSwapColors from './PropDrillingGoodMenuSwapColors';

class PropDrillingGoodMenu extends PureComponent {
  state = {
    item: 'A',
  };

  setItem = item => this.setState({ item });

  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>Prop Drilling Good</h1>
        <div>
          <PropDrillingGoodMenuItem item="A" onClick={this.setItem} />
          <PropDrillingGoodMenuItem item="B" onClick={this.setItem} />
          <PropDrillingGoodMenuItem item="C" onClick={this.setItem} />
        </div>
        {item === 'A' && <PropDrillingGoodMenuA />}
        {item === 'B' && <PropDrillingGoodMenuB />}
        {item === 'C' && <PropDrillingGoodMenuC />}
        <PropDrillingGoodMenuSwapColors />
      </div>
    );
  }
}

export default PropDrillingGoodMenu;

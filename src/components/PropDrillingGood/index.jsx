import React, { PureComponent } from 'react';
import PropDrillingGoodItem from './PropDrillingGoodItem';
import PropDrillingGoodA from './PropDrillingGoodA';
import PropDrillingGoodB from './PropDrillingGoodB';
import PropDrillingGoodC from './PropDrillingGoodC';
import PropDrillingGoodSwapColors from './PropDrillingGoodSwapColors';

class PropDrillingGood extends PureComponent {
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
          <PropDrillingGoodItem item="A" onClick={this.setItem} />
          <PropDrillingGoodItem item="B" onClick={this.setItem} />
          <PropDrillingGoodItem item="C" onClick={this.setItem} />
        </div>
        {item === 'A' && <PropDrillingGoodA />}
        {item === 'B' && <PropDrillingGoodB />}
        {item === 'C' && <PropDrillingGoodC />}
        <PropDrillingGoodSwapColors />
      </div>
    );
  }
}

export default PropDrillingGood;

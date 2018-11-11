import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import PropDrillingGoodMenuItem from './PropDrillingGoodMenuItem';
import PropDrillingGoodMenuA from './PropDrillingGoodMenuA';
import PropDrillingGoodMenuB from './PropDrillingGoodMenuB';
import PropDrillingGoodMenuC from './PropDrillingGoodMenuC';

class PropDrillingGoodMenu extends PureComponent {
  state = {
    item: 'A',
  };

  setItem = item => this.setState({ item });

  render() {
    const { onSwapColors } = this.props;
    const { item } = this.state;
    return (
      <div>
        <h1>Prop Drilling Good</h1>
        <div>
          <PropDrillingGoodMenuItem item="A" onClick={this.setItem} />
          <PropDrillingGoodMenuItem item="B" onClick={this.setItem} />
          <PropDrillingGoodMenuItem item="C" onClick={this.setItem} />
          <button
            onClick={onSwapColors}
            type="button"
          >
            Swap Colors
          </button>
        </div>
        {item === 'A' && <PropDrillingGoodMenuA />}
        {item === 'B' && <PropDrillingGoodMenuB />}
        {item === 'C' && <PropDrillingGoodMenuC />}
      </div>
    );
  }
}

PropDrillingGoodMenu.propTypes = {
  onSwapColors: PropTypes.func.isRequired,
};

export default PropDrillingGoodMenu;

import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import PropDrillingBadMenuItem from './PropDrillingBadMenuItem';
import PropDrillingBadMenuA from './PropDrillingMenuA';
import PropDrillingBadMenuB from './PropDrillingMenuB';
import PropDrillingBadMenuC from './PropDrillingMenuC';

class PropDrillingBadMenu extends PureComponent {
  state = {
    item: 'A',
  };

  setItem = item => this.setState({ item });

  render() {
    const { bgColor, fgColor, onSwapColors } = this.props;
    const { item } = this.state;
    return (
      <div>
        <h1>Prop Drilling Bad</h1>
        <div>
          <PropDrillingBadMenuItem item="A" onClick={this.setItem} />
          <PropDrillingBadMenuItem item="B" onClick={this.setItem} />
          <PropDrillingBadMenuItem item="C" onClick={this.setItem} />
          <button
            onClick={onSwapColors}
            type="button"
          >
            Swap Colors
          </button>
        </div>
        {item === 'A' && (
          <PropDrillingBadMenuA
            bgColor={bgColor}
            fgColor={fgColor}
          />
        )}
        {item === 'B' && (
          <PropDrillingBadMenuB
            bgColor={bgColor}
            fgColor={fgColor}
          />
        )}
        {item === 'C' && (
          <PropDrillingBadMenuC
            bgColor={bgColor}
            fgColor={fgColor}
          />
        )}
      </div>
    );
  }
}

PropDrillingBadMenu.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  onSwapColors: PropTypes.func.isRequired,
};

export default PropDrillingBadMenu;

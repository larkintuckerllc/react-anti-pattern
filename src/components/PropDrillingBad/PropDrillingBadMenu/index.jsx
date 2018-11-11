import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import PropDrillingBadMenuItem from './PropDrillingBadMenuItem';
import PropDrillingBadMenuA from './PropDrillingBadMenuA';
import PropDrillingBadMenuB from './PropDrillingBadMenuB';
import PropDrillingBadMenuC from './PropDrillingBadMenuC';
import PropDrillingBadMenuSwapColors from './PropDrillingBadMenuSwapColors';

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
        </div>
        {item === 'A' && (
          <PropDrillingBadMenuA
            bgColor={bgColor}
            fgColor={fgColor}
            onSwapColors={onSwapColors}
          />
        )}
        {item === 'B' && (
          <PropDrillingBadMenuB
            bgColor={bgColor}
            fgColor={fgColor}
            onSwapColors={onSwapColors}
          />
        )}
        {item === 'C' && (
          <PropDrillingBadMenuC
            bgColor={bgColor}
            fgColor={fgColor}
            onSwapColors={onSwapColors}
          />
        )}
        <PropDrillingBadMenuSwapColors onSwapColors={onSwapColors} />
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

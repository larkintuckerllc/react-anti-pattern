import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropDrillingGoodSwapColorsView extends PureComponent {
  render() {
    const { onSwapColors } = this.props;
    return (
      <button
        type="button"
        onClick={onSwapColors}
      >
        Swap Colors
      </button>
    );
  }
}

PropDrillingGoodSwapColorsView.propTypes = {
  onSwapColors: PropTypes.func.isRequired,
};

export default PropDrillingGoodSwapColorsView;

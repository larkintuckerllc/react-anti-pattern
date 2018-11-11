import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropDrillingGoodMenuSwapColorsView extends PureComponent {
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

PropDrillingGoodMenuSwapColorsView.propTypes = {
  onSwapColors: PropTypes.func.isRequired,
};

export default PropDrillingGoodMenuSwapColorsView;

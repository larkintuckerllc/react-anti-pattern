import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropDrillingBadMenuSwapColors extends PureComponent {
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

PropDrillingBadMenuSwapColors.propTypes = {
  onSwapColors: PropTypes.func.isRequired,
};

export default PropDrillingBadMenuSwapColors;

import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropDrillingGoodMenuCView extends PureComponent {
  render() {
    const { bgColor, fgColor } = this.props;
    return (
      <h3
        style={{
          backgroundColor: bgColor,
          color: fgColor,
        }}
      >
        Cataloupe
      </h3>
    );
  }
}

PropDrillingGoodMenuCView.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
};

export default PropDrillingGoodMenuCView;

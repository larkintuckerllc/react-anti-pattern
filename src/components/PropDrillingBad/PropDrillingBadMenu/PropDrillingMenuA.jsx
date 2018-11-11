import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropDrillingBadMenuA extends PureComponent {
  render() {
    const { bgColor, fgColor } = this.props;
    return (
      <h3
        style={{
          backgroundColor: bgColor,
          color: fgColor,
        }}
      >
        Apple
      </h3>
    );
  }
}

PropDrillingBadMenuA.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
};

export default PropDrillingBadMenuA;

import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropDrillingBadMenuB extends PureComponent {
  render() {
    const { bgColor, fgColor } = this.props;
    return (
      <h3
        style={{
          backgroundColor: bgColor,
          color: fgColor,
        }}
      >
        Banana
      </h3>
    );
  }
}

PropDrillingBadMenuB.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
};

export default PropDrillingBadMenuB;

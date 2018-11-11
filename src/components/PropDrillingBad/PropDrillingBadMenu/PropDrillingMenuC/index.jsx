import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import PropDrillingBadMenuCDetail from './PropDrillingMenuCDetail';

class PropDrillingBadMenuC extends PureComponent {
  render() {
    const { bgColor, fgColor } = this.props;
    return (
      <div>
        <h3
          style={{
            backgroundColor: bgColor,
            color: fgColor,
          }}
        >
          Cantaloupe
        </h3>
        <PropDrillingBadMenuCDetail
          bgColor={bgColor}
          fgColor={fgColor}
        />
      </div>
    );
  }
}

PropDrillingBadMenuC.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
};

export default PropDrillingBadMenuC;

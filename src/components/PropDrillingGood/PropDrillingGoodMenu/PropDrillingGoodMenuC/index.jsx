import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import PropDrillingGoodMenuCDetail from './PropDrillingGoodMenuCDetail';

class PropDrillingGoodMenuC extends PureComponent {
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
        <PropDrillingGoodMenuCDetail
          bgColor={bgColor}
          fgColor={fgColor}
        />
      </div>
    );
  }
}

PropDrillingGoodMenuC.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
};

export default PropDrillingGoodMenuC;

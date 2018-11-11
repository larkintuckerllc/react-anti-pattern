import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropDrillingBadMenuCDetail extends PureComponent {
  render() {
    const { bgColor, fgColor } = this.props;
    return (
      <div
        style={{
          backgroundColor: fgColor,
          color: bgColor,
        }}
      >
        Cantaloupes range in weight from 0.5 to 5 kilograms (1 to 11 lb).
        Originally, cantaloupe referred only to the non-netted, orange-fleshed
        melons of Europe, but may mean any orange-fleshed melon of C. melo.
        China is the world&apos;s largest producer of cantaloupes, providing half
        of the global total in 2016.
      </div>
    );
  }
}

PropDrillingBadMenuCDetail.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
};

export default PropDrillingBadMenuCDetail;

import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropDrillingGoodItem extends PureComponent {
  handleClick = () => {
    const { item, onClick } = this.props;
    onClick(item);
  };

  render() {
    const { item } = this.props;
    return (
      <button
        onClick={this.handleClick}
        type="button"
      >
        { item }
      </button>
    );
  }
}

PropDrillingGoodItem.propTypes = {
  item: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PropDrillingGoodItem;

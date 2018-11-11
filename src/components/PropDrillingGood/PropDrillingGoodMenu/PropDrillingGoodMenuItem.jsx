import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropDrillingGoodMenuItem extends PureComponent {
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

PropDrillingGoodMenuItem.propTypes = {
  item: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PropDrillingGoodMenuItem;

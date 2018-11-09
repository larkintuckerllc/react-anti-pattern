import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class JSXSpreadAttributesBadChild extends PureComponent {
  render() {
    const { subtitle } = this.props;
    window.console.log('RENDER JSX_SPREAD_ATTRIBUTES_BAD_CHILD');
    return (
      <div>
        <h1>JSX Spread Attributes Bad</h1>
        <h3>{subtitle}</h3>
      </div>
    );
  }
}

JSXSpreadAttributesBadChild.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default JSXSpreadAttributesBadChild;

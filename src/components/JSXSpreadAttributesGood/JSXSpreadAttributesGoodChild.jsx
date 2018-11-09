import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class JSXSpreadAttributesGoodChild extends PureComponent {
  render() {
    const { subtitle } = this.props;
    window.console.log('RENDER JSX_SPREAD_ATTRIBUTES_GOOD_CHILD');
    return (
      <div>
        <h1>JSX Spread Attributes Good</h1>
        <h3>{subtitle}</h3>
      </div>
    );
  }
}

JSXSpreadAttributesGoodChild.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default JSXSpreadAttributesGoodChild;

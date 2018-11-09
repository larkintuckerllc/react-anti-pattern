import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropTypesGoodDefault extends PureComponent {
  handleClick = () => {
    const { operationB } = this.props;
    operationB();
  }

  render() {
    const { operationA, subtitle } = this.props;
    return (
      <div>
        <h1>PropTypes Good Default</h1>
        <h3>{subtitle}</h3>
        <button type="button" onClick={operationA}>Operation A</button>
        <button type="button" onClick={this.handleClick}>Operation B</button>
      </div>
    );
  }
}

PropTypesGoodDefault.propTypes = {
  operationA: PropTypes.func,
  operationB: PropTypes.func,
  subtitle: PropTypes.string,
};

PropTypesGoodDefault.defaultProps = {
  operationA: () => window.console.log('Operation A'),
  operationB: () => window.console.log('Operation B'),
  subtitle: 'Example Subtitle',
};

export default PropTypesGoodDefault;

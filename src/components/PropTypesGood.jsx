import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class PropTypesGood extends PureComponent {
  handleClick = () => {
    const { operationB } = this.props;
    operationB();
  }

  render() {
    const { operationA, subtitle } = this.props;
    return (
      <div>
        <h1>PropTypes Good</h1>
        <h3>{subtitle}</h3>
        <button type="button" onClick={operationA}>Operation A</button>
        <button type="button" onClick={this.handleClick}>Operation B</button>
      </div>
    );
  }
}

PropTypesGood.propTypes = {
  operationA: PropTypes.func.isRequired,
  operationB: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PropTypesGood;

import React, { PureComponent } from 'react';

class PropTypesBad extends PureComponent {
  handleClick = () => {
    const { operationB } = this.props;
    operationB();
  }

  render() {
    const { operationA, subtitle } = this.props;
    return (
      <div>
        <h1>PropTypes Bad</h1>
        <h3>{subtitle}</h3>
        <button type="button" onClick={operationA}>Operation A</button>
        <button type="button" onClick={this.handleClick}>Operation B</button>
      </div>
    );
  }
}

export default PropTypesBad;

import React, { PureComponent } from 'react';
import OverloadedGoodForm from './OverloadedGoodForm';

class OverloadedGood extends PureComponent {
  handleSubmit = ({ firstName, lastName }) => {
    window.console.log(firstName);
    window.console.log(lastName);
  };

  render() {
    return (
      <OverloadedGoodForm onSubmit={this.handleSubmit} />
    );
  }
}

export default OverloadedGood;

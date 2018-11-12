import React, { PureComponent } from 'react';
import NoLibraryGoodForm from './NoLibraryGoodForm';

class NoLibraryGood extends PureComponent {
  handleSubmit = ({ firstName, lastName }) => {
    window.console.log(firstName);
    window.console.log(lastName);
  };

  render() {
    return (
      <NoLibraryGoodForm onSubmit={this.handleSubmit} />
    );
  }
}

export default NoLibraryGood;

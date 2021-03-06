import React, { PureComponent } from 'react';
import NoLibraryBadForm from './NoLibraryBadForm';

class NoLibraryBad extends PureComponent {
  handleSubmit = ({ firstName, lastName }) => {
    window.console.log(firstName);
    window.console.log(lastName);
  };

  render() {
    return (
      <NoLibraryBadForm onSubmit={this.handleSubmit} />
    );
  }
}

export default NoLibraryBad;

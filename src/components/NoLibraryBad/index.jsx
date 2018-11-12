import React, { PureComponent } from 'react';
import NoLibraryBadForm from './NoLibraryBadForm';

class NoLibraryBad extends PureComponent {
  handleSubmit = ({ value }) => {
    window.console.log(value);
  };

  render() {
    return (
      <NoLibraryBadForm onSubmit={this.handleSubmit} />
    );
  }
}

export default NoLibraryBad;

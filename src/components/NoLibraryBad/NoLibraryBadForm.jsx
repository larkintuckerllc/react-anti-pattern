import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import NoLibraryBadFormView from './NoLibraryBadFormView';

class NoLibraryBadForm extends PureComponent {
  state = {
    firstName: '',
    lastName: '',
  };

  handleFirstNameChange = event => this.setState({ firstName: event.target.value });

  handleLastNameChange = event => this.setState({ lastName: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { firstName, lastName } = this.state;
    onSubmit({ firstName, lastName });
  };

  render() {
    const { firstName, lastName } = this.state;
    return (
      <NoLibraryBadFormView
        firstName={firstName}
        lastName={lastName}
        onFirstNameChange={this.handleFirstNameChange}
        onLastNameChange={this.handleLastNameChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

NoLibraryBadForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NoLibraryBadForm;

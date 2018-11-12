import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import NoLibraryBadFormView from './NoLibraryBadFormView';

class NoLibraryBadForm extends PureComponent {
  state = {
    value: '',
  };

  handleChange = event => this.setState({ value: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <NoLibraryBadFormView
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        value={value}
      />
    );
  }
}

NoLibraryBadForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NoLibraryBadForm;

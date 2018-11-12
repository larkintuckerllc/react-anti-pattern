import { Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import NoLibraryGoodFormView from './NoLibraryGoodFormView';

const handleRender = ({
  /* eslint-disable-next-line */
  handleChange,
  /* eslint-disable-next-line */
  handleSubmit,
  /* eslint-disable-next-line */
  values: { firstName, lastName }
}) => (
  <NoLibraryGoodFormView
    firstName={firstName}
    lastName={lastName}
    onChange={handleChange}
    onSubmit={handleSubmit}
  />
);

class NoLibraryGoodForm extends PureComponent {
  render() {
    const { onSubmit } = this.props;
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
        }}
        onSubmit={onSubmit}
        render={handleRender}
      />
    );
  }
}

NoLibraryGoodForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NoLibraryGoodForm;

import { Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import OverloadedGoodFormColored from './OverloadedGoodFormColored';

const handleRender = ({
  /* eslint-disable-next-line */
  handleChange,
  /* eslint-disable-next-line */
  handleSubmit,
  /* eslint-disable-next-line */
  values: { firstName, lastName }
}) => (
  <OverloadedGoodFormColored
    firstName={firstName}
    lastName={lastName}
    onChange={handleChange}
    onSubmit={handleSubmit}
  />
);

class OverloadedGoodForm extends PureComponent {
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

OverloadedGoodForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default OverloadedGoodForm;

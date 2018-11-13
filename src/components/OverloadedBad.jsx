import { Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import withColors from './withColors';

class OverloadedBadWrapped extends PureComponent {
  render() {
    const { bgColor, fgColor, onSwapColors } = this.props;
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
        }}
        onSubmit={({ firstName, lastName }) => {
          window.console.log(firstName);
          window.console.log(lastName);
        }}
        render={({
          handleChange,
          handleSubmit,
          values: { firstName, lastName }
        }) => (
          <form onSubmit={handleSubmit}>
            <h1
              style={{
                backgroundColor: bgColor,
                color: fgColor,
              }}
            >
              Overloaded Bad
            </h1>
            <div>
              <input
                onChange={handleChange('firstName')}
                value={firstName}
              />
            </div>
            <div>
              <input
                onChange={handleChange('lastName')}
                value={lastName}
              />
            </div>
            <div>
              <button
                type="submit"
              >
                Submit
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={onSwapColors}
              >
                Swap Colors
              </button>
            </div>
          </form>
        )}
      />
    );
  }
}

OverloadedBadWrapped.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  onSwapColors: PropTypes.func.isRequired,
};

export default withColors(OverloadedBadWrapped);

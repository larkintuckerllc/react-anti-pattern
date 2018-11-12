import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class NoLibraryGoodFormView extends PureComponent {
  render() {
    const {
      firstName,
      lastName,
      onChange,
      onSubmit,
    } = this.props;
    return (
      <form
        onSubmit={onSubmit}
      >
        <h1>No Library Bad</h1>
        <div>
          <input
            onChange={onChange('firstName')}
            value={firstName}
          />
        </div>
        <div>
          <input
            onChange={onChange('lastName')}
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
      </form>
    );
  }
}

NoLibraryGoodFormView.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NoLibraryGoodFormView;

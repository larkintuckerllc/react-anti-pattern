import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class NoLibraryBadFormView extends PureComponent {
  render() {
    const { onChange, onSubmit, value } = this.props;
    return (
      <form
        onSubmit={onSubmit}
      >
        <h1>No Library Bad</h1>
        <div>
          <input
            onChange={onChange}
            value={value}
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

NoLibraryBadFormView.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default NoLibraryBadFormView;

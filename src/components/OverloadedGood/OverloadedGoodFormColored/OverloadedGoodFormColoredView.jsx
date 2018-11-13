import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class OverloadedGoodFormColoredView extends PureComponent {
  render() {
    const {
      bgColor,
      firstName,
      fgColor,
      lastName,
      onChange,
      onSubmit,
      onSwapColors,
    } = this.props;
    return (
      <form
        onSubmit={onSubmit}
      >
        <h1
          style={{
            backgroundColor: bgColor,
            color: fgColor,
          }}
        >
          Overloaded Good
        </h1>
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
        <div>
          <button
            type="button"
            onClick={onSwapColors}
          >
            Swap Colors
          </button>
        </div>
      </form>
    );
  }
}

OverloadedGoodFormColoredView.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSwapColors: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default OverloadedGoodFormColoredView;

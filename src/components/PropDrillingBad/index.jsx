import React, { PureComponent } from 'react';
import PropDrillingBadMenu from './PropDrillingBadMenu';

const swapColors = ({ bgColor, fgColor }) => ({
  bgColor: fgColor,
  fgColor: bgColor,
});

class PropDrillingBad extends PureComponent {
  state = {
    bgColor: 'white',
    fgColor: 'black',
  };

  handleSwapColors = () => this.setState(swapColors);

  render() {
    const { bgColor, fgColor } = this.state;
    return (
      <PropDrillingBadMenu
        bgColor={bgColor}
        fgColor={fgColor}
        onSwapColors={this.handleSwapColors}
      />
    );
  }
}

export default PropDrillingBad;

import React, { PureComponent } from 'react';

let globalState = {
  bgColor: 'white',
  fgColor: 'black',
};

const subscriptions = [];

const subscribe = (observer) => {
  subscriptions.push(observer);
};

const unsubscribe = (observer) => {
  const index = subscriptions.indexOf(observer);
  subscriptions.splice(index, 1);
};

const setGlobalState = (updates) => {
  globalState = { ...globalState, ...updates };
  subscriptions.map(observer => observer());
};

const getDisplayName = WrappedComponent => (
  WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

const withColors = (WrappedComponent) => {
  class WithColors extends PureComponent {
    componentDidMount() {
      subscribe(this.handleGlobalStateChange);
    }

    componentWillUnmount() {
      unsubscribe(this.handleGlobalStateChange);
    }

    handleSwapColors = () => {
      const { bgColor, fgColor } = globalState;
      setGlobalState({
        bgColor: fgColor,
        fgColor: bgColor,
      });
    };

    handleGlobalStateChange = () => {
      this.forceUpdate();
    }

    render() {
      const { bgColor, fgColor } = globalState;
      return (
        <WrappedComponent
          {...this.props}
          bgColor={bgColor}
          fgColor={fgColor}
          onSwapColors={this.handleSwapColors}
        />
      );
    }
  }

  WithColors.displayName = `withColors(${getDisplayName(WrappedComponent)})`;

  return WithColors;
};
export default withColors;

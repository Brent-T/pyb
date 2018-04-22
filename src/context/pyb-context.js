import React, { Component } from 'react';

const PybContext = React.createContext();

export class PybContextProvider extends Component {
  state = {
    foo: 'bar'
  }

  getValue () {
    return {
      ...this.state
    };
  }

  render () {
    const value = this.getValue();

    return (
      <PybContext.Provider value={value}>
        {this.props.children}
      </PybContext.Provider>
    );
  }
}

export default PybContext;

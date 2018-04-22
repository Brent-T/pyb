// Gist: https://gist.github.com/Brent-T/8ea780e571b530b81f16bacc1e03dc69
import React from 'react';

export default function withContext(Context) {
  return (Component) => (props) => (
    <Context.Consumer>
      { context => <Component {...props} context={context} /> }
    </Context.Consumer>
  );
}

import * as React from "react";
import * as ReactDOM from 'react-dom';

export const mount = () => (WrappedComponent) => {
  if (typeof window !== 'undefined') {
    const props = {...(window['__INITIAL_STATE__']||{})};
    ReactDOM.render(<WrappedComponent {...props} />, document.body.firstElementChild);
  }
};
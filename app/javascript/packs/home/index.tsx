import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Content from "./content";

const props = {...window['__INITIAL_STATE__']||{}};
ReactDOM.render(<Content {...props} />, document.body.firstElementChild);

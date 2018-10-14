import * as React from 'react';
import serialize from 'serialize-javascript';

export interface IReactPage {
  mountScript?: string;
}

const _objectWithoutProperties = (obj, keys) => {
  let target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0 || !Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
};


class Page extends React.Component<IReactPage, any> {
  render() {
    const { children, mountScript } = this.props;
    const initialData = serialize(_objectWithoutProperties(this.props, ['mountScript', 'children']) || {});

    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        </head>
        <body>
          {children}
          {mountScript && <script src={mountScript}/>}
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${initialData}`}}></script>
        </body>
      </html>
    );
  }
}

export default Page;
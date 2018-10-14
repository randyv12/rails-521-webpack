import * as React from 'react';
import * as ReactDOM from 'react-dom';
import serialize from 'serialize-javascript';
import {_objectWithoutProperties} from "../utils/object";

export interface IReactPage {
  mountScript?: string;
}

class Page extends React.Component<IReactPage, any> {
  render() {
    const { children, mountScript } = this.props;
    const initialData = serialize(_objectWithoutProperties(this.props, ['mountScript', 'children']) || {});

    return (
      <html>
        <head>
          <link href="//cdn.muicss.com/mui-0.9.41/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        </head>
        <body>
          {children}
          {mountScript && <script src={mountScript}/>}
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${initialData}`}}/>
        </body>
      </html>
    );
  }

}

export default Page;
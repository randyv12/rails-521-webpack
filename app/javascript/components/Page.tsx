import * as React from 'react';

export interface IReactPage {
  mount_path?: string;
}

class Page extends React.Component<IReactPage, any> {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        </head>
        <body>
          {this.props.children}
          {this.props.mount_path && <script src={this.props.mount_path}/>}
        </body>
      </html>
    );
  }

}

export default Page;
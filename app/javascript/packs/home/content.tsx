import * as React from 'react';
import AppBar from "../../components/AppBar";

class Content extends React.Component<any, any> {
  render() {
    return (
      <AppBar {...this.props} />
    );
  }
}

export default Content;
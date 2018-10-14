import * as React from 'react';
import AppBar from "../../components/AppBar";
import Page from "../../components/Page";

class ReactPage extends React.Component<any, any> {
  render() {
    return (
      <Page {...this.props}>
        <AppBar />
      </Page>
    );
  }
}

export default ReactPage;
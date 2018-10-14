import * as React from 'react';
import Page from "../../components/Page";
import Content from "./content";

class ReactPage extends React.Component<any, any> {
  render() {
    return (
      <Page {...this.props}>
        <Content {...this.props} />
      </Page>
    );
  }
}

export default ReactPage;
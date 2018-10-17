import * as React from 'react';
import Page from "../components/Page";

export const pagify = () => (WrappedComponent) => {
  return class extends React.Component {

    render() {
      return (<Page {...this.props}>
                <WrappedComponent {...this.props} />
              </Page>);
    }
  }
};
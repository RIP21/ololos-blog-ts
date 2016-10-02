import * as React from 'react';
const connect = require('react-redux').connect;
const Link = require('react-router').Link;


function mapStateToProps(state) {
  return {
    router: state.router
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

interface AppProps extends React.Props<any> {
}


class App extends React.Component<AppProps, void> {
  render() {
    const {children} = this.props;
    return (
      <div>
        <a>HELLO</a>
        { children }
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

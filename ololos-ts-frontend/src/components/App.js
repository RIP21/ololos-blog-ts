// This component handles the App template used on every page.
import React, {PropTypes} from "react";
import Navigation from './common/Navigation';
import Footer from './common/Footer';
import {connect} from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation/>
        <div className="container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};


function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);

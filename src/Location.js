import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class ShowTheLocation extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
// Created a variable to define the current location within the site.
      const { location: { pathname } } = this.props;
      const previousLocation = prevProps.location.pathname;
// If the page has changed then it will send a message to the Appcues App.
      if (pathname !== previousLocation) {
        window.Appcues.page();
      }
    }
// Return "" so that the functionality is not visible except within the debugger.
  render() {
    return "";
  }
}

const Location = withRouter(ShowTheLocation);

export default Location;

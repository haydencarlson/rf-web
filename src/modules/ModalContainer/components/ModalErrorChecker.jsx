import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalErrorChecker extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h4>
          Oops. Something went wrong. Please try again later.
        </h4>
      );
    }
    return this.props.children;
  }
}

export default ModalErrorChecker;

import React, { Component } from 'react';
import '../styles/signup.css';

class SignUpNavItem extends Component {
  render() {
    return (
      <a className="sign-up-button button-secondary" onClick={() => this.props.showModal('SIGN_UP_MODAL')} value="Sign In">
        Sign Up
      </a>
    )
  }
}

export default SignUpNavItem;

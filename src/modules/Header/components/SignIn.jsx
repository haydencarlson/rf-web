import React, { Component } from 'react';
import '../styles/signin.css';

class SignInNavItem extends Component {
  render() {
    return (
      <a className="sign-in-button button-primary" onClick={() => this.props.showModal('SIGN_IN_MODAL')} value="Sign In">
        Sign In
        <i className="fa fa-caret-down"></i>
      </a>
    )
  }
}

export default SignInNavItem;

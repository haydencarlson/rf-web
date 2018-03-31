import React, { Component } from 'react';
import '../styles/signin.css';

class SignInNavItem extends Component {
  render() {
    return (
      <a className="sign-in-button button-primary" value="Sign In">
        Sign In
        <i class="fa fa-caret-down"></i>
      </a>
    )
  }
}

export default SignInNavItem;

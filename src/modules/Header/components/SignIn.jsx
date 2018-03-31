import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/signin.css';

class SignInNavItem extends Component {
  render() {
    var { location } = this.props;
    return (
      <a className="sign-in-button button-primary" value="Sign In">
        Sign In
        <i class="fa fa-caret-down"></i>
      </a>
    )
  }
}

export default SignInNavItem;

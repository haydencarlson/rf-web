import React from 'react';
import PropTypes from 'prop-types';
import ModalErrorChecker from './ModalErrorChecker';
import * as modalTypes from '../modalTypes';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {
  handleLoginSubmit,
  handleSignUpSubmit
} from '../handleSubmit.js';

class ModalConductor extends React.Component {
  constructor() {
    super();
    this.modal = null
  }
  render() {
    console.log(this.props.modal)
    switch (this.props.modal.display) {
      case modalTypes.NONE:
      this.modal = null;
      break;
      case modalTypes.SIGN_IN_MODAL:
      this.modal = (
        <SignIn onSubmit={handleLoginSubmit} />
      );
      break;
      case modalTypes.SIGN_UP_MODAL:
      this.modal = (
        <SignUp onSubmit={handleSignUpSubmit} />
      );
      break;
      default:
      this.modal = null;
    }
    return (
      <div className="rt-forums-modal">
        <ModalErrorChecker>{this.modal}</ModalErrorChecker>
      </div>
    );
  }
};

export default ModalConductor;

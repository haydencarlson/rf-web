import React from 'react';
import PropTypes from 'prop-types';
import ModalErrorChecker from './ModalErrorChecker';
import * as modalTypes from '../modalTypes';

class ModalConductor extends React.Component {
  constructor() {
    super();
    this.modal = null
  }
  render() {
    switch (this.props.modal.display) {
      case modalTypes.NONE:
      this.modal = null;
      break;
      case modalTypes.SIGN_IN_MODAL:
      this.modal = (
        <div>asd</div>
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

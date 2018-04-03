import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import ModalConductor from './components/ModalConductor';
import { closeModal } from './reduxer';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')
class ModalContainer extends React.Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modal.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={() => this.props.closeModal()}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <ModalConductor {...this.props}/>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  modal: state.modals
});

const mapDispatchToProps = {
  closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

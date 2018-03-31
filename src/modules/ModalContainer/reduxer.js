import * as modalTypes from './modalTypes';

const SHOW_MODAL = "SHOW_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

export const showModal = (modal) => ({
  type: SHOW_MODAL,
  modal: modal
});

export const closeModal = (modal) => ({
  type: CLOSE_MODAL,
  modal: modalTypes.NONE
});

export default (state = { modal: modalTypes.NONE, isOpen: false }, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...action,
        display: action.modal,
        isOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

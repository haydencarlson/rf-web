import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import Modal from './modules/ModalContainer/reduxer';
import Chatbox from './modules/Chatbox/reduxer';

export default combineReducers({
  routing: routerReducer,
  modals: Modal,
  form: formReducer,
  chatbox: Chatbox
})

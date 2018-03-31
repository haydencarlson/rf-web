import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Modal from './modules/ModalContainer/reduxer';

export default combineReducers({
  routing: routerReducer,
  modals: Modal
})

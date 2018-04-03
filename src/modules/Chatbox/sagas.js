import { takeLatest, call, put } from 'redux-saga/effects';
import {
  SEND_NEW_CHATBOX_MESSAGE
} from './reduxer';

function* newMessage(action) {
  console.log(action);
}

export function* attemptSendNewChatboxMessage() {
  yield takeLatest(SEND_NEW_CHATBOX_MESSAGE, newMessage);
}

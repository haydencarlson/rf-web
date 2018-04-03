import { takeLatest, put } from 'redux-saga/effects';
import {
  SEND_NEW_CHATBOX_MESSAGE,
  sendMessageThroughSocket
} from './reduxer';

function* newMessage(action) {
  yield put(sendMessageThroughSocket(action.message))

}

export function* attemptSendNewChatboxMessage() {
  yield takeLatest(SEND_NEW_CHATBOX_MESSAGE, newMessage);
}

import { fork, all } from 'redux-saga/effects';
import {
  attemptSendNewChatboxMessage
} from './modules/Chatbox/sagas';

import {
  initialState
} from './modules/App/sagas';

const sagas = [
  attemptSendNewChatboxMessage,
  initialState
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;

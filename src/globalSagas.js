import { fork, all } from 'redux-saga/effects';
import {
  attemptSendNewChatboxMessage
} from './modules/Chatbox/sagas';

const sagas = [
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;

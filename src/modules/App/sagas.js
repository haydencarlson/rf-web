import { takeLatest, put } from 'redux-saga/effects';
import {
  FETCH_INITIAL_STATE,
  SET_INITIAL_STATE
} from './reduxer';
import axios from 'axios';

function requestState() {
  return axios.get('/api/v1/initial_state');
}
function* fetchInitialState(action) {
  var initialState = yield requestState();

  var parsed = initialState.data;

  yield put({type: SET_INITIAL_STATE, payload: parsed})
}

export function* initialState() {
  yield takeLatest(FETCH_INITIAL_STATE, fetchInitialState);
}

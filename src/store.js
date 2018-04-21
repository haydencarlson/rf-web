import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import reduxCableCar from 'redux-cablecar';
import rootReducer from './rootReducer';
import globalSagas from './globalSagas'

const sagaMiddleware = createSagaMiddleware()

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
  reduxCableCar
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)
const token = JSON.parse(localStorage.getItem('token'));
const ChatChannel = {
  params: { ...token, room: 'ChatChannel' },
  prefix: 'CHAT_CHANNEL',
  wsURL: 'wss://api.bwgforums.com/'
};
reduxCableCar.connect(store, 'ChatChannel', ChatChannel);
sagaMiddleware.run(globalSagas)

export default store

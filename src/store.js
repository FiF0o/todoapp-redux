/**
 * Created by jonlazarini on 23/08/16.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';

export default createStore(
  reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)


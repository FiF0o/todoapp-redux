/**
 * Created by jonlazarini on 23/08/16.
 */
import { combineReducers } from 'redux'
import toDos  from './toDos'
// console.log('newToDoItem: ', newToDoItem)

const reducers = combineReducers({
  toDos,
})
export default reducers
/**
 * Created by jonlazarini on 23/08/16.
 */
import { combineReducers } from 'redux'
import newToDoItem  from './newToDoItem'
// console.log('newToDoItem: ', newToDoItem)

const reducers = combineReducers({
  newToDoItem,
})
export default reducers
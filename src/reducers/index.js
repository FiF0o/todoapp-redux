/**
 * Created by jonlazarini on 23/08/16.
 */
import { combineReducers } from 'redux'
import toDos  from './toDos'
import visibilityFilter from './visibilityFilter'

const reducers = combineReducers({
  toDos,
  visibilityFilter
})
export default reducers
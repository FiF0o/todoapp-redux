/**
 * Created by jonlazarini on 23/08/16.
 */
import { combineReducers } from 'redux'
import toDos  from './toDos'
import visibilityFilter from './visibilityFilter'
import people from './people'

const reducers = combineReducers({
  toDos,
  visibilityFilter,
  people
})
export default reducers
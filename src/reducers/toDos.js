/**
 * Created by jonlazarini on 24/08/16.
 */
import toDo from './toDo'

const initialState = []
/*
values are passed down from the action creator, e.g.
  action = {
    type: 'ADD_TO_DO',
    id: 0,
    value: 'a new item'
  }
*/
const toDos = (state = initialState, action) => {
  console.log('action: ', action)
  console.log('state: ', state)
  switch (action.type) {
    case 'ADD_TO_DO': {
      return [
      // includes items from the original array with splat operators - old item
        ...state,
        // new item added to the array which is a reducer
        toDo(undefined, action)
    ]
  }
    case 'REMOVE_TO_DO': {

      const removeItem = (list, index) => {
        return list
          .slice(0, index)
          .concat(list.slice(index + 1))
      }

      return removeItem(state, state.id)
  }
  default: {
    return state
    }
  }
}

export default toDos
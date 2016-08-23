/**
 * Created by jonlazarini on 23/08/16.
 */

const initialState = {
  value: 'hello initial state',
}

const newToDoItem = (state = initialState, action) => {
  // console.log('state: ', state)
  // console.log('action: ', action)
  switch (action.type) {
    case 'ADD_TO_DO': {
      return {
        // value is passed down from the action creator
        value: action.toDoItem
      }
    }
    default: {
      return state
    }
  }
}

export default newToDoItem
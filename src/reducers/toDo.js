/**
 * Created by jonlazarini on 23/08/16.
 */

const initialState = {}

const toDo = (state = initialState, action) => {
  // console.log('state: ', state)
  // console.log('action: ', action)
  switch (action.type) {
    case 'ADD_TO_DO': {
      return {
        // value is passed down from the action creator
        id: action.id,
        text: action.text,
        completed: false
      }
    }
    default: {
      return state
    }
  }
}

export default toDo
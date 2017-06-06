/**
 * Created by jonlazarini on 23/08/16.
 */

const initialState = {}

const toDo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_DO': {
      return {
        ...state,
        id: action.id,
        text: action.text,
        completed: false
      }()
    }
    case 'TOGGLE_TO_DO': {
      if (state.id !== action.id ) {
        return state
      }
      return {
        ...state,
        completed: !state.completed
      }
    }
    default: {
      return state
    }
  }
}

export default toDo
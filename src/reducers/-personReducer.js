/**
 * Created by jonlazarini on 06/09/16.
 */

const initialState = {}

const personReducer = (state = initialState, action) => {
  // console.log('state: ', state)
  // console.log('action: ', action)
  switch (action.type) {
    case 'GET_PEOPLE': {
      return {
        ...state,
        // value is passed down from the action creator
        avatar: action.avatar,
        first_name: action.first_name,
        last_name: action.last_name,
        id: action.id,
      }
    }
    default: {
      return state
    }
  }
}

export default personReducer
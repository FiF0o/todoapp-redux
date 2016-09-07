/**
 * Created by jonlazarini on 06/09/16.
 */

// import personReducer from './personReducer'
//TODO Remove REDUCER
// console.log('personReducer ', personReducer)

const people = (state=[], action) => {
  switch (action.type) {
    // function fetching data from the API with list returning the array
    case 'FETCHED_PEOPLE': {
      return action.list
    }
    default: {
      return state
    }
  }
}



export default people
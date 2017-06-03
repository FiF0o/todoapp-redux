/**
 * Created by jonlazarini on 06/09/16.
 */

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
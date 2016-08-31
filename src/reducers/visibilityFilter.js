/**
 * Created by jonlazarini on 27/08/16.
 */

const visibilityFilter = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
     return action.filterName
    default:
      return state
  }
}

export default visibilityFilter
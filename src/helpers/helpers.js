/**
 * Created by jonlazarini on 05/09/16.
 */

import { getPeople } from '../actions/getPeople'

const apiCall = () => {
  return fetch('http://reqres.in/api/users?page=2');
}



const makePerson = () => {
  return (dispatch) => {
    return fetch('http://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(
      // import action creator here
        person => {
          //dispatch(getPeople(person))
          console.log('person:', person)
        }
      )
  }
}

export default makePerson
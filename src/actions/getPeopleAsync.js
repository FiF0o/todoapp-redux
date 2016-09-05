export const getPeopleAsync = () => dispatch => {
  dispatch(fetchingPeople())
  fetch('http://reqres.in/api/users?page=2')
    .then(response => response.json())
    // data is an array
    .then(r => (r.data))
    .then(people => {
      dispatch(fetchedPeople(people))
      console.log('people: ', people)
      // people.id
      // people.avatar
      // people.first_name
      // people.last_name
    })
}

// r is the response from the api server AND list the data array returned
// from the response
function fetchedPeople(list) {
  return {
    type: 'FETCHED_PEOPLE',
    list
  };
}

function fetchingPeople() {
  return {
    type: 'FETCHING_PEOPLE'
  };
}

export default getPeopleAsync
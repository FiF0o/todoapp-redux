// import fetch from 'isomorphic-fetch'

// creates headers for client-side req using during fetch
var myHeaders = new Headers({"Content-Type":"application/json"});
var reqHeader = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

function fetchingPage( page='2' ) {
  return fetch(`https://reqres.in/api/users?page=${page}`, reqHeader)
}

export const getPeopleAsync = (page) => dispatch => {
  dispatch(fetchingPeople())
  fetchingPage(page)
    .then(response =>
        response.json())
    // data is an array
    .then(r => (r.data))
    .then(people => {
      dispatch(fetchedPeople(people))
      console.log('people: ', people)
    })
}

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
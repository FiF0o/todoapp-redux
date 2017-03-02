var myHeaders = new Headers({"Content-Type":"application/json"});
myHeaders.append("Access-Control-Allow-Origin", "*");

var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

function fetchingPage( page='2' ) {
  return fetch(`http://reqres.in/api/users?page=${page}`, myInit)
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
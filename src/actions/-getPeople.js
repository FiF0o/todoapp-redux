/**
 * Created by jonlazarini on 05/09/16.
 */

function getPeople(avatar, first_name, last_name, id) {
  return {
    type: 'GET_PEOPLE',
    avatar,
    first_name,
    last_name,
    id
  };
}

export default getPeople
/**
 * Created by jonlazarini on 05/09/16.
 */
/**
 * Created by jonlazarini on 23/08/16.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPeople } from '../actions/getPeople'
import PeopleList from '../components/PeopleList'

// UI logic/rendering in the component
const mapDispatchToProps = (dispatch) =>
  // passing down action creator to trigger the dispatch for rendering
  // onAddToDo is given as a prop to the PeopleList component
  bindActionCreators({
    onGetPeople: getPeople,
  }, dispatch);

// retrieving attributes (via state) of the reducer to be updated when
// dispatch is triggered
const mapStateToProps = (state) => {
  return { peopleList: state.peopleList }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
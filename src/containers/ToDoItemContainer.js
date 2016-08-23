/**
 * Created by jonlazarini on 23/08/16.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createToDo } from '../actions/actionsCreator'
import ToDoItem from '../components/ToDoItem'

// UI logic/rendering in the component

const mapDispatchToProps = (dispatch) =>
  // passing down action creator to trigger the dispatch for rendering
  // onAddToDo is given as a prop to the ToDoItem component
  bindActionCreators({ onAddToDo: createToDo }, dispatch);

// retrieving attributes (via state) of the reducer to be updated when
// dispatch is triggered
const mapStateToProps = (state) => {
  // { newToDoItem } is destructured, retrieving state.newToDoItem
  // new attribute toDoItem is injected in the component as a prop
  return { content: state.newToDoItem.value }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);

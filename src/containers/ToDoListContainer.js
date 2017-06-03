/**
 * Created by jonlazarini on 23/08/16.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createToDo, removeToDo, toggleToDo } from '../actions/ToDo'
import ToDoList from '../components/ToDoList'

// UI logic/rendering in the component
const mapDispatchToProps = (dispatch) =>
  // passing down action creator to trigger the dispatch for rendering
  // onAddToDo is given as a prop to the ToDoList component
  bindActionCreators({
    onAddToDo: createToDo,
    onDeleteToDo: removeToDo,
    onToggleToDo: toggleToDo
  }, dispatch);

// retrieving attributes (via state) of the reducer to be updated when
// dispatch is triggered
const mapStateToProps = (state) => {


  if(state.visibilityFilter === 'SHOW_COMPLETED') {
    return { listToDo: state.toDos.filter( todo => todo.completed ) }
  }
  else if(state.visibilityFilter === 'SHOW_ACTIVE') {
    return { listToDo: state.toDos.filter( todo => !todo.completed ) }
  }
  else {
  // { toDos } is destructured, retrieving state.toDos
  // new attribute ToDoList is injected in the component as a prop
  return { listToDo: state.toDos }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
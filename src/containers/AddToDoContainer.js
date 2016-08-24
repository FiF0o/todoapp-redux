/**
 * Created by jonlazarini on 23/08/16.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createToDo } from '../actions/createToDo';

import AddToDo from '../components/AddToDo';

/*
 triggers UI rendering with dispatch method by passing in { onUserSubmit:
 userQuery } object which is a prop of AddToDo
 */
const mapDispatchToProps = (dispatch) =>
  // passing down onUserSubmit prop to Search component with the action
  // creator createToDo
  bindActionCreators({ onUserSubmit: createToDo }, dispatch);

export default connect(undefined, mapDispatchToProps)(AddToDo);
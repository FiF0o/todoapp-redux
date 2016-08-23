/**
 * Created by jonlazarini on 23/08/16.
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import store from '../stores/store'

import { createToDo } from '../actions/createToDo';


import ToDoText from '../components/ToDoText';

// const mapStateToProps = ({ userQuery }) => ({ onUserSubmit : userQuery.value });

/*
 prends props de Search quand connect()
 triggers UI rendering with dispatch method by passing in { onUserSubmit:
 userQuery } object
 */
const mapDispatchToProps = (dispatch) =>
  // passing down onUserSubmit prop to Search component with the action
  // creator userQuery
  bindActionCreators({ onUserSubmit: createToDo }, dispatch);

// const mapDispatchToActionCreators = () => ({
//   onUserSubmit: (q) => store.dispatch(userQuery(q))
// })

export default connect(undefined, mapDispatchToProps)(ToDoText);
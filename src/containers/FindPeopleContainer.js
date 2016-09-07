/**
 * Created by jonlazarini on 07/09/16.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPeopleAsync } from '../actions/getPeopleAsync';

import AddPeople from '../components/AddPeople';

const mapDispatchToProps = (dispatch) =>
  // passing down onUserSubmit prop to Search component with the action
  // creator createToDo
  bindActionCreators({ onPeopleLoad: getPeopleAsync }, dispatch);

export default connect(undefined, mapDispatchToProps)(AddPeople)
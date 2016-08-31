/**
 * Created by jonlazarini on 27/08/16.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { filterToDo } from '../actions/filterToDo';

import FilterList from '../components/FilterList';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onFilter: filterToDo
  }, dispatch)

const mapStateToPros = (state) => {
  return { current: state.visibilityFilter }
}

export default connect(mapStateToPros, mapDispatchToProps)(FilterList)
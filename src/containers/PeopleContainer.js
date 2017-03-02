/**
 * Created by jonlazarini on 05/09/16.
 */
import React from 'react'
import store from '../store'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPeopleAsync } from '../actions/getPeopleAsync'
import PeopleList from '../components/PeopleList'

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onLoadPeople: getPeopleAsync
  }, dispatch)

const mapStateToProps = (state) => {
  console.log('state PEOPLE CONTAINER', state)
  return { peopleList: state.people }
}

// export default connect(mapStateToProps)(PeopleList)



class PeopleContainer extends React.Component {
 componentDidMount() {
   store.dispatch(getPeopleAsync())
 }

 render(){
   return (
      <PeopleList { ...this.props } />
   )
 }
 // _yoPeople() {
 //   store.dispatch(getPeopleAsync())
 // }

}

// destructuring this.props to pass it down to the child component PeopleList
// better use PeopleList(this.props) for performance, jsx recompiling

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)



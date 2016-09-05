import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import store from './store'
import { Provider } from 'react-redux'

import ToDoListContainer from './containers/ToDoListContainer'
import AddToDoContainer from './containers/AddToDoContainer'
import FilterContainer from './containers/FilterContainer'

import getPeopleAsync from  './actions/getPeopleAsync'


class App extends Component {

  componentWillMount(){
    store.dispatch(getPeopleAsync());
  }
  componentDidMount() {
  }

  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <h1>To Do List</h1>

          <FilterContainer/>

          <AddToDoContainer />

          <ToDoListContainer />

          <h2>Test Redux Thunk</h2>
          <div>
            <span>Placeholder for Async call, </span>
            <span>http://reqres.in/api/users?page=2</span>
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;

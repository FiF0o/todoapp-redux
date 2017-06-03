import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import store from './store'
import { Provider } from 'react-redux'

import ToDoListContainer from './containers/ToDoListContainer'
import AddToDoContainer from './containers/AddToDoContainer'
import FilterContainer from './containers/FilterContainer'
import PeopleContainer from './containers/PeopleContainer'
import FindPeopleContainer from './containers/FindPeopleContainer'


class App extends Component {
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
            <FindPeopleContainer />
            <PeopleContainer />
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;

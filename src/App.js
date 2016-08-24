import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import store from './store'
import { Provider } from 'react-redux'

import ToDoListContainer from './containers/ToDoListContainer'
import AddToDoContainer from './containers/AddToDoContainer'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <h1>To Do List</h1>

          <AddToDoContainer />

          <ToDoListContainer />

        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import store from './store'
import { Provider } from 'react-redux'

import ToDoItemContainer from './containers/ToDoItemContainer'
import NewToDoContainer from './containers/NewToDoContainer'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <h1>hello world</h1>

          <NewToDoContainer />

          <ToDoItemContainer />

        </div>
      </Provider>
    );
  }
}

export default App;

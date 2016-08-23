import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import store from './store'
import { Provider } from 'react-redux'

import ToDoItemContainer from './containers/ToDoItemContainer'


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <h1>hello world</h1>
          <ToDoItemContainer />

        </div>
      </Provider>
    );
  }
}

export default App;

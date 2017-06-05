// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import {todoApp} from './state';
import {AddTodo, ToggleTodo, SetVisibilityFilter, VisibilityFilters} from "./actionTypes";

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);



// Dispatch some actions
store.dispatch(new AddTodo('Learn about actions'));
store.dispatch(new AddTodo('Learn about reducers'));
store.dispatch(new AddTodo('Learn about store'));
store.dispatch(new ToggleTodo(1));
store.dispatch(new ToggleTodo(2));
store.dispatch(new SetVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();

// const boundAddTodo = (text: *) => dispatch(new AddTodo(text))
// const boundCompleteTodo = (index) => dispatch(new CompleteTodo(index))

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

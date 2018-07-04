import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Input from './Components/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <Input />
        </div>
      </div>
    );
  }
}

export default App;

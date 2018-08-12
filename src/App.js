import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SingleTodo from './SingleTodo';
import { Button, Card, Row, Col } from 'react-materialize';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ''
    };
  }

  handleChange = e => {
    this.setState({
      currentTodo: e.target.value
    });
  };

  handleClick = () => {
    let todosCopy = this.state.todos.slice();

    todosCopy.push(this.state.currentTodo);

    this.setState({
      todos: todosCopy,
      currentTodo: ''
    });
  };

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();

    todosCopy.splice(i, 1);

    this.setState({ todos: todosCopy });
  };

  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
      return <SingleTodo todo={e} delete={() => this.deleteTodo(i)} />;
    });

    return (
      <div className="container">
        <input
          placeholder="Enter todo"
          value={this.state.currentTodo}
          onChange={this.handleChange}
        />
        <button
          className="btn-large white blue-text waves-effect waves-blue"
          onClick={this.handleClick}
        >
          Add To The List
        </button>
        <br />
        {this.state.todos.length === 0 ? (
          'No todos yet'
        ) : (
          <ul className="collection">{bulletedTodos}</ul>
        )}
      </div>
    );
  }
}

export default App;

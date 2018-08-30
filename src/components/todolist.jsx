import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <div>
        {/* <input onKeyPress={e => (e.key === "Enter" ? this.addTodo(e) : "")} /> */}
        {/* {this.state.todos.map((todo, i) => (
          <Todo todo={todo} key={i} onDelete={val => this.handleDelete(val)} />
        ))} */}
      </div>
    );
  }
}

export default TodoList;

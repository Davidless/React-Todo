import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <div>
          <ul onClick={this.props.completeTodo}>{this.props.todos.map(todo => <Todo todo={todo} />)}</ul>
      </div>
    );
  }
}

export default TodoList;

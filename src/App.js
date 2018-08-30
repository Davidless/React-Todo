import React, { Component } from "react";
import TodoList from "./components/TodoList";
// import Todo from "./components/Todo";

class App extends Component {
  constructor() {
    // Sets up initial state
    super();
    this.state = {
      newTodo: "",
      todos: []
    };
  }

  componentDidMount() {
    // will get called after initial render
    // CDM is a good place to do initial data fetch
    const initialTodos = JSON.parse(localStorage.getItem("todos"));
    this.setState({ todos: initialTodos });
  }

  persistTodos = () => {
    const { todos } = this.state;
    // takes todos from state. Sets them in localMemory as todos
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  todoHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitTodo = e => {
    e.preventDefault();
    const { todos } = this.state;
    const myTodo = { text: this.state.newTodo, completed: false };
    todos.push(myTodo);
    this.persistTodos();
    this.setState({ todos, newTodo: "" });
  };

  onCompleteHandler = childTodo => {
    const { todos } = this.state;
    todos.forEach(todo => {
      if (todo.text === childTodo.text) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({ todos });
  };

  onClearTodos = () => {
    const { todos } = this.state;
    const completedTodos = todos.filter(todo => todo.completed === false);
    this.setState({ todos: completedTodos });
  };

  render() {
    return (
      <div>
        <h2>Basic Todo</h2>
        <form onSubmit={this.handleSubmitTodo}>
          <input
            type="text"
            placeholder="Add Todo"
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.todoHandler}
          />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={this.onClearTodos}>Clear Completed</button>
        <TodoList
          completeTodos={this.onCompleteHandler}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;

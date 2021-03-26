import React, { Component } from "react";
import { observable, action,toJS } from "mobx";
import { observer } from "mobx-react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = "";

  render() {
    return (
      <div>
        < AddTodoForm onsubmit={this.handleFormSubmit} />
        {/* <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form> */}
        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.store.unfinishedTodoCount}
      </div>
    );
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = (newtodo) => {
    this.props.store.addTodo(newtodo.name,newtodo.tasks);
    // this.newTodoTitle = "";
    // e.preventDefault();
  };
}

export default TodoList;

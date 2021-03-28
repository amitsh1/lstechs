import React, { Component } from "react";
import { observable, action,toJS } from "mobx";
import { observer } from "mobx-react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";

import {
  Button,
  Container,
  Icon,
  Image,
  Item,
  Label,

} from 'semantic-ui-react'

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = "";

  render() {
    return (
      <div>
        < AddTodoForm onsubmit={this.handleFormSubmit} />
        <hr />

        <Container>
      <Item.Group divided>
      {this.props.store.todos.map((todo) => (
            <Todo 
            todo={todo} 
            key={todo.id} 
            store={this.props.store}
            // onchange={this.props.store.editTodo} 
            // ondelete={this.props.store.deleteTodo}
            />
          ))}

      </Item.Group>
    </Container>


        {/* <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul> */}
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
  @action
  handleTaskChange = (newtodo) => {
    console.log(newtodo)
    // this.props.store.addTodo(newtodo.name,newtodo.tasks);
    // this.newTodoTitle = "";
    // e.preventDefault();
  };




}

export default TodoList;

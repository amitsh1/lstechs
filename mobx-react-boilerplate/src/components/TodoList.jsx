import React from "react";
import { action } from "mobx";
import { observer } from "mobx-react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";

import {
  Container,
  Item,
} from 'semantic-ui-react'

@observer
class TodoList extends React.Component {
  render() {
    return (
      <div>
        < AddTodoForm onsubmit={this.handleFormSubmit} />
        <hr />
        Number of Tasks: {this.props.store.unfinishedTodoCount}
        <hr />
        <Container>
      <Item.Group divided>
      {this.props.store.todos.map((todo) => (
            <Todo 
            todo={todo} 
            key={todo.id} 
            store={this.props.store}
            />
          ))}

      </Item.Group>
    </Container>


       
      </div>
    );
  }

  @action
  handleFormSubmit = (newtodo) => {
    this.props.store.addTodo(newtodo.name,newtodo.tasks);
  };




}

export default TodoList;

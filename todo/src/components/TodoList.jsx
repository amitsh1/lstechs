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
        <h1 class="ui header">New ToDo</h1>
        < AddTodoForm onsubmit={this.handleFormSubmit} />
        <hr />
        <h2 class="ui header">ToDos:</h2>
        Number of ToDos: {this.props.store.unfinishedTodoCount}
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

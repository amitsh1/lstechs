import React from "react";
import { action,observable } from "mobx";
import { observer } from "mobx-react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";

import {
  Container,
  Card,
  Input,
  Segment
} from 'semantic-ui-react'

const colors = [
  "red",
  "orange",
  "yellow",
  "olive",          
  "green",       
  "teal",         
  "blue",          
  "violet",      
  "purple" ,      
  "pink"  ,  
  "brown" ,     
  "grey" ];

@observer
class TodoList extends React.Component {
  @observable searchvalue = "";  
  render() {
    return (
      <div>
        <Container fluid>
        < AddTodoForm onsubmit={this.handleFormSubmit} />
        <Input 
        placeholder='Search Todos...' 
        value={this.searchvalue}
        onChange={(e,{value})=>{this.searchvalue=value}}
        />
        <h2 class="ui header">ToDos:</h2>
        Number of ToDos: {this.props.store.todos.filter(
        todo=>todo.title.includes(this.searchvalue)
      ).length}
        </Container>



      <Segment style={{overflow: 'auto', maxHeight: "80%" }}>
      <Card.Group>
      {this.props.store.todos.filter(
        todo=>todo.title.includes(this.searchvalue)
      ).map((todo,ind) => (
            <Todo 
            color={colors[(ind%colors.length)]}
            todo={todo} 
            key={todo.id} 
            store={this.props.store}
            />
          ))}

      </Card.Group>        
      </Segment>        
        <Container fluid>

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

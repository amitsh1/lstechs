import React from "react";
import { observer } from "mobx-react";

import {
  Checkbox,
  Form,
  Item,
  Button, 
  Icon 

} from 'semantic-ui-react'


const Todo = observer(({ todo,store}) => (

  <Item key={todo.id}>
  <Item.Content>
    <Item.Header as='a'>{todo.title}</Item.Header>
    <Item.Meta>    
      <span>Date</span>
      <span>Category</span>
      <Button icon onClick={(x)=>{
        store.deleteTodo(todo.id);
        store.todos = store.todos.filter(todo_=>todo_.id!=todo.id)      
      }}>
        <Icon name='delete' />
      </Button>        
    </Item.Meta>
    <Item.Description>
    <Form>


      {todo.tasks.map((task,i) => (
        <Form.Field key={i}>
        <Checkbox label={task.title} checked={task.finished} onChange={() => 
          {
            task.finished = !task.finished;
            store.editTodo(todo.id,todo.tasks);
          }

          
          } />
      </Form.Field>

      ))}


    </Form>      
      A description which may flow for several lines and give context to the content.
    </Item.Description>
  </Item.Content>
</Item>

  // <li>
  //   <input
  //     type="checkbox"
  //     checked={todo.finished}
  //     onChange={() => (todo.finished = !todo.finished)}
  //   />
  //   {todo.title}
  // </li>
));

export default Todo;

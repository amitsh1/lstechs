import React from "react";
import { observer } from "mobx-react";

import {
  Checkbox,
  Form,
  Item,
  Button, 
  Icon,
  Label

} from 'semantic-ui-react'


const Todo = observer(({ todo,store}) => (

  <Item key={todo.id}>
     
  <Item.Content verticalAlign='middle'>
    <Item.Header as='a'>{todo.title}</Item.Header>
    <Item.Meta>    
      <span>creation date: {todo.date_created}</span>
    </Item.Meta>
    <Item.Meta>    
      <span>last update date: {todo.last_update_date}</span>
    </Item.Meta>    
    <Item.Description>
    <Form>
    <Form.Group  inline>
    <Form.Field >
      {todo.tasks.map((task,i) => (
        
        <Checkbox key={i} label={task.title} checked={task.finished} onChange={() => 
          {
            task.finished = !task.finished;
            store.editTodo(todo.id,todo.tasks);
          }

          
          } />
      

      ))}

</Form.Field>
          </Form.Group>

    </Form>      

    </Item.Description>
    <Item.Extra>
    <Button icon onClick={(x)=>{
        store.deleteTodo(todo.id);
        store.todos = store.todos.filter(todo_=>todo_.id!=todo.id)      
      }}>
        <Icon name='delete' />
      </Button>  
        </Item.Extra>    
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

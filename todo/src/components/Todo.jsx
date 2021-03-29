import React from "react";
import { observer } from "mobx-react";

import {
  Checkbox,
  Card,
  Feed,
  Form,
  Item,
  Button, 
  Icon,
  Label

} from 'semantic-ui-react'

///
const Todo = observer(({ todo,store,color}) => (

  <Card key={todo.id} >
 
    <Card.Content >
    <Card.Header>
      {todo.title}    
      </Card.Header>
    <Card.Meta>    
      <span>creation date: {todo.date_created}</span>
    </Card.Meta>
    <Card.Meta>    
      <span>last update date: {todo.last_update_date}</span>
    </Card.Meta>     
        <Card.Description>
          
        {todo.title} Tasks:
        </Card.Description>         
    </Card.Content>
    <Card.Content style={{"backgroundColor":color}}>
      <Feed >
        {todo.tasks.map((task,i) => (
        <Feed.Event >
        <Checkbox key={i} label={task.title} checked={task.finished} onChange={() => 
          {
            task.finished = !task.finished;
            store.editTodo(todo);
          }

          
          } />
          </Feed.Event>
      

      ))}


        

        
      </Feed>
    </Card.Content>
    <Card.Content extra>
    <Button icon onClick={(x)=>{
        store.deleteTodo(todo);
        store.todos = store.todos.filter(todo_=>todo_.id!=todo.id)      
      }}>
        <Icon name='delete' />
      </Button>    
    </Card.Content>





  </Card>



//   <Item key={todo.id}>
     
//   <Item.Content verticalAlign='middle'>
//     <Item.Header as='a'>{todo.title}</Item.Header>
    // <Item.Meta>    
    //   <span>creation date: {todo.date_created}</span>
    // </Item.Meta>
    // <Item.Meta>    
    //   <span>last update date: {todo.last_update_date}</span>
    // </Item.Meta>    
//     <Item.Description>
//     <Form>
//     <Form.Group  inline>
//     <Form.Field >
//       {todo.tasks.map((task,i) => (
        
//         <Checkbox key={i} label={task.title} checked={task.finished} onChange={() => 
//           {
//             task.finished = !task.finished;
//             store.editTodo(todo);
//           }

          
//           } />
      

//       ))}

// </Form.Field>
//           </Form.Group>

//     </Form>      

//     </Item.Description>
//     <Item.Extra>
//     <Button icon onClick={(x)=>{
//         store.deleteTodo(todo);
//         store.todos = store.todos.filter(todo_=>todo_.id!=todo.id)      
//       }}>
//         <Icon name='delete' />
//       </Button>  
//         </Item.Extra>    
//   </Item.Content>
// </Item>


));

export default Todo;

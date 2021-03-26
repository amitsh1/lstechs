import React from "react";
import { observer } from "mobx-react";
import { Form,Button,List } from 'semantic-ui-react'

const Task = observer(({ todo }) => (
<List.Item>
  
<Form.Input label='Task Name' value={todo.title} onChange={(e,v) => ( todo.title = v.value)}/>

<Form.Checkbox 
// label='I agree to the Terms and Conditions' 
checked={todo.finished}
onChange={() => (todo.finished = !todo.finished)}
/>  
</List.Item>  

));

export default Task;
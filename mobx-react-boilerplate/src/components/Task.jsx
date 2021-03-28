import React from "react";
import { observer } from "mobx-react";
import { Form } from 'semantic-ui-react'

const Task = observer(({ todo }) => (
<Form.Group inline>  
  
<Form.Input label='Task Name' value={todo.title} onChange={(e,v) => ( todo.title = v.value)}/>

<Form.Checkbox 
checked={todo.finished}
onChange={() => (todo.finished = !todo.finished)}
/>  
</Form.Group>  

));

export default Task;
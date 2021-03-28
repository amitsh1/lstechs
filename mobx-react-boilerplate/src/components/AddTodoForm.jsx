import React, { Component } from 'react'
import { Form,Button,List } from 'semantic-ui-react'
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Task from "./Task";


@observer
class AddTodoForm extends Component {
  @observable name = "";  
  @observable email = "";
  @observable tasks = [        {
    title:"",
    finished:false
}];
  
  addtask = () => {
    this.tasks.push(
        {
            title:"",
            finished:false
        }
    )

  }
  handleChange = (e, { name, value }) => {
    this[name] = value
    }

  handleSubmit = () => {
    this.props.onsubmit(
        {
            name:this.name,
            email:this.email,
            tasks:this.tasks.filter(task=>task.title!="")
        }
    )

  }
//   <Form.Checkbox label='I agree to the Terms and Conditions' />
  
  render() {

    console.log(this.tasks,'this.tasks')
    return (
        <Form >
          <Form.Group  widths='equal'>
            <Form.Input
              fluid
              placeholder='Name'
              name='name'
              value={this.name}
              onChange={this.handleChange}
            />
            {
              this.tasks.slice(-1)[0].title==""?null:<Button fluid onClick={this.addtask} content="Add task" />
            }
            
          </Form.Group>

          <List divided relaxed>
          {this.tasks.map(
                (task,i)=><Task key={i} todo={task} />
            )}                  
    

  </List>          
      


          <Form.Group  widths='equal'>
          <Form.Button content='Submit' onClick={this.handleSubmit}/>
          </Form.Group>          
        </Form>
    )
  }
}

export default AddTodoForm
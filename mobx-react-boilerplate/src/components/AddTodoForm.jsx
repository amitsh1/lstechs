import React, { Component } from 'react'
import { Form,Button,List } from 'semantic-ui-react'
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Task from "./Task";


@observer
class AddTodoForm extends Component {
  @observable name = "";  
  @observable email = "";
  @observable tasks = [];
  
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
            tasks:this.tasks
        }
    )

  }
//   <Form.Checkbox label='I agree to the Terms and Conditions' />
  
  render() {


    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group  widths='equal'>
            <Form.Input
              fluid
              placeholder='Name'
              name='name'
              value={this.name}
              onChange={this.handleChange}
            />
            <Form.Button fluid onClick={this.addtask} content="Add task" />
          </Form.Group>

          <List divided relaxed>
          {this.tasks.map(
                (task,i)=><Task key={i} todo={task} />
            )}                  
    

  </List>          
      


          <Form.Group  widths='equal'>
          <Form.Button content='Submit' />
          </Form.Group>          
        </Form>
    )
  }
}

export default AddTodoForm
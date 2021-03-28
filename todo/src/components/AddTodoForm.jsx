import React, { Component } from 'react'
import { Form,Button } from 'semantic-ui-react'
import { observable } from "mobx";
import { observer } from "mobx-react";

import Task from "./Task";


@observer
class AddTodoForm extends Component {
  @observable name = "";  
  @observable tasks = [{
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
            tasks:this.tasks.filter(task=>task.title!="")
        }
    );
    this.name = "";
    this.tasks = [{
      title:"",
      finished:false
      }];

  }

  
  render() {
    return (
        <Form >
          <Form.Group  widths='equal'>
            <Form.Input
              fluid
              label='Todo Name' 
              name='name'
              value={this.name}
              onChange={this.handleChange}
            />
            {
              this.tasks.slice(-1)[0].title==""?null:<Button fluid onClick={this.addtask} content="Add task" />
            }
            
          </Form.Group>

     
      
          {this.tasks.map(
                (task,i)=><Task key={i} todo={task} />
            )}                  
    

  
          
          <Form.Group  widths='equal'>
            {
              this.name!=""?<Form.Button content='Add Todo' onClick={this.handleSubmit}/>:null
            }
          
          </Form.Group>          
        </Form>
    )
  }
}

export default AddTodoForm
import React, { Component } from 'react'
import { Form,Button,Grid,Modal,Popup,Segment,Ref } from 'semantic-ui-react'
import { observable } from "mobx";
import { observer } from "mobx-react";

import Task from "./Task";

import MessageExampleListProp from "./Instruction";

@observer
class AddTodoForm extends Component {
  @observable name = "";  
  @observable tasks = [{
                        title:"",
                        finished:false
                        }];
  @observable open = false;
  forwardedRef = React.createRef();
  myRef = React.createRef();
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
    this.open=false
  }

  
  render() {
    return (

      <Modal
      open={this.open}
      trigger={<Button onClick={()=>{
        this.open=true;
        setTimeout(
          ()=>this.forwardedRef.current.getElementsByTagName("input")[0].focus(),
          30
        )
        
      }}>Add Todo</Button>}
      header='Enter Todo name and add Tasks'
      content={
        <Form >
          
          <Form.Group  widths='equal'>
          <Ref innerRef={this.forwardedRef}>
            <Form.Input
              fluid
              label='Todo Name' 
              name='name'
              value={this.name}
              onChange={this.handleChange}
              ></Form.Input>

            </Ref>
            {
              this.tasks.slice(-1)[0].title==""?null:<Button fluid onClick={this.addtask} content="Add task" />
            }
            
          </Form.Group>

          <h2 className="ui header">Add Tasks to the new Todo:</h2>
     
      <Grid columns='equal'>
      
      <Grid.Column>
      <Segment style={{overflow: 'auto', height: "40vh" }}>
      {this.tasks.map(
                (task,i)=><Task key={i} todo={task} />
            )} 
       </Segment>
      </Grid.Column>
     
      <Grid.Column>
      <MessageExampleListProp />
      </Grid.Column>
      
 
      </Grid>

        </Form>
      }
      actions={[
        <Popup key="ac1" content='Add users to your feed' trigger={
          <Button 
          content='Add Todo' 
          onClick={this.handleSubmit}
          disabled={this.name==""}
          />        
        } />

        
        ,
        <Button key="ac2" color="green" onClick={()=>this.open=false}>Cancel</Button> ]}
    />


    )
  }
}

export default AddTodoForm
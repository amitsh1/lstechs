import { observable, computed, action,toJS } from "mobx";

import TodoModel from "./TodoModel";

export default class TodoListModel {
  @observable todos = [];

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action
  addTodo(title,tasks) {
    // var bla = new TodoModel(title,tasks);
    // bla.tasks = toJS(tasks)
    // bla.title = toJS(title)
    // console.log(title)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        tasks:toJS(tasks),
        title:toJS(title)
      }
      ),
    mode: 'no-cors'
  };
  fetch('http://0.0.0.0:4000/addtodo',requestOptions)
      // .then(response => response.json())
      .then(id =>this.todos.push(

        new TodoModel(title,tasks,id)
      )); 
      // .then(data => this.setState({ postId: data.id }));    
    // this.todos.push();
  }
}

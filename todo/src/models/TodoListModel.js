import { observable, computed, action,toJS } from "mobx";

import TodoModel from "./TodoModel";

export default class TodoListModel {
  @observable todos = [];
  isLoading = true
  constructor(transportLayer, authorStore) {
    // makeAutoObservable(this)
    // this.authorStore = authorStore // Store that can resolve authors.
    // this.transportLayer = transportLayer // Thing that can make server requests.
    // this.transportLayer.onReceiveTodoUpdate(updatedTodo =>
    //     this.updateTodoFromServer(updatedTodo)
    // )
    this.loadTodos()
}

  // Fetches all Todos from the server.
  loadTodos() {
      this.isLoading = true

      fetch('/gettodos')
          .then(response => response.json())
          .then(response =>{
            this.todos = response.map(todo=>new TodoModel(
              todo._id,todo.title,todo.tasks,todo.date_created,todo.last_update_date
              ))
            this.isLoading = false
          }

          ); 
      

  }


  @action
  addTodo(title,tasks) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        tasks:toJS(tasks),
        title:toJS(title)
      }
      ),
  };
  fetch('/addtodo',requestOptions)
      .then(response => response.json())
      .then(response =>this.todos.push(

        new TodoModel(response.id,title,tasks,response.date,response.date)
      )
      ); 
      // .then(data => this.setState({ postId: data.id }));    
    // this.todos.push();
  }

  @action
  editTodo(todo) {
    // console.log(id,toJS(a));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          tasks:toJS(todo.tasks),
          id:todo.id
        }
        ),
    };
    fetch('/edittodo',requestOptions)
        .then(response => response.json())
        .then(response =>
          todo.last_update_date = response.last_update_date
        );     

  }


  @action
  deleteTodo(todo) {
    // console.log(id,toJS(a));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          id:todo.id
        }
        ),
    };
    fetch('/deletetodo',requestOptions)
        .then(response => response.json())
        .then(response =>console.log("OK")
        );     

  }  




}

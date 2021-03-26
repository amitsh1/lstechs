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
            this.todos = response.map(todo=>new TodoModel(todo.title,todo.tasks,todo._id))
            this.isLoading = false
          }

          ); 
      

  }


  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
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

        new TodoModel(title,tasks,response.id)
      )
      ); 
      // .then(data => this.setState({ postId: data.id }));    
    // this.todos.push();
  }
}

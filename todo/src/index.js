import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { observer } from "mobx-react" // Or "mobx-react".
import { makeObservable, observable, computed, action,autorun } from "mobx"

// class ObservableTodoStore {
//   todos = [];
//   pendingRequests = 0;

//   constructor() {
//     makeObservable(this, {
//       todos: observable,
//       pendingRequests: observable,
//       completedTodosCount: computed,
//       report: computed,
//       addTodo: action,
//     });
//     autorun(() => console.log(this.report));
//   }

//   get completedTodosCount() {
//     return this.todos.filter(
//       todo => todo.completed === true
//     ).length;
//   }

//   get report() {
//     if (this.todos.length === 0)
//       return "<none>";
//     const nextTodo = this.todos.find(todo => todo.completed === false);
//     return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
//       `Progress: ${this.completedTodosCount}/${this.todos.length}`;
//   }

//   addTodo(task) {
//     this.todos.push({
//       task: task,
//       completed: false,
//       assignee: null
//     });
//   }
// }

// const observableTodoStore = new ObservableTodoStore();

// const TodoList = observer(({store}) => {
//   const onNewTodo = () => {
//     console.log("asss");
//     // store.addTodo(prompt('Enter a new todo:','dfgdg'));
//   }

//   return (
//     <div>
//       { store.report }
//       <ul>
//         { store.todos.map(
//           (todo, idx) => <TodoView todo={ todo } key={ idx } />
//         ) }
//       </ul>
//       { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
//       <button onClick={ onNewTodo }>New Todo</button>
//       <small> (double-click a todo to edit)</small>
//     </div>
//   );
// })

// const TodoView = observer(({todo}) => {
//   const onToggleCompleted = () => {
//     todo.completed = !todo.completed;
//   }

//   const onRename = () => {
//     todo.task = prompt('Task name', todo.task) || todo.task;
//   }

//   return (
//     <li onDoubleClick={ onRename }>
//       <input
//         type='checkbox'
//         checked={ todo.completed }
//         onChange={ onToggleCompleted }
//       />
//       { todo.task }
//       { todo.assignee
//         ? <small>{ todo.assignee.name }</small>
//         : null
//       }
//     </li>
//   );
// })

// ReactDOM.render(
//   <TodoList store={ observableTodoStore } />,
//   document.getElementById('root')
// );
   


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

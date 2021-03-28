import React from "react";
import { render } from "react-dom";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";


import 'semantic-ui-css/semantic.min.css'

const store = new TodoListModel();

render(
  <div>

    <TodoList store={store} />
  </div>,
  document.getElementById("root")
);


import { observable } from "mobx";

export default class TodoModel {
  id;
  creation_date = new Date().toLocaleString();
  last_update_date = new Date().toLocaleString();
  @observable title;
  @observable tasks;

  constructor(title,tasks,id) {
    this.title = title;
    this.tasks = tasks;
    this.id = id;
  }
}

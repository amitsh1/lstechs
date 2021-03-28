import { observable } from "mobx";

export default class TodoModel {
  id;
  date_created;
  last_update_date;
  @observable title;
  @observable tasks;

  constructor(id,title,tasks,date_created,last_update_date) {
    this.title = title;
    this.tasks = tasks;
    this.id = id;
    this.date_created = date_created;
    this.last_update_date = last_update_date;
  }
}

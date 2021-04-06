import Renderer from './renderer';

export class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

class TodoList {
  constructor(name = 'Default', todoList = []) {
    this.name = name;
    this.todoList = todoList;
  }

  addItem(title, description, dueDate, expiryDate) {
    this.todoList.push(new Todo(title, description, dueDate, expiryDate));
  }

  removeItem(index) {
    this.todoList.splice(index, 1);
  }
}

export default class MasterList {
  constructor(
    todoLists = [new TodoList()],
    rendererClass = Renderer,
    currentProjectIndex = 0
  ) {
    this.todoLists = todoLists;
    this.renderer = new rendererClass();
    this.currentProjectIndex = currentProjectIndex;
  }

  render() {
    this.renderer.renderPage(this);
  }

  create(name) {
    this.todoLists.push(new TodoList(name));
  }
}

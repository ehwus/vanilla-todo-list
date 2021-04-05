import Renderer from './renderer';

class Todo {
  constructor(title, description, dueDate, expiryDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.expiryDate = expiryDate;
  }
}

class TodoList {
  constructor(todoList = [], name = 'Default') {
    this.todoList = todoList;
    this.name = name;
  }

  addItem(title, description, dueDate, expiryDate) {
    this.todoList.append(new Todo(title, description, dueDate, expiryDate));
  }

  removeItem(index) {
    this.todoList.splice(index, 1);
  }
}

class MasterList {
  constructor(
    todoLists = [new TodoList()],
    rendererClass = Renderer,
    currentListIndex = 0
  ) {
    this.todoLists = todoLists;
    this.renderer = new rendererClass();
    this.currentListIndex = currentListIndex;
  }

  render() {
    this.renderer.renderPage(this);
  }
}

export default MasterList;

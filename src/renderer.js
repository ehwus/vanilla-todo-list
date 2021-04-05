const container = document.getElementById('container');

export default class Renderer {
  renderPage(masterList) {
    const listOfProjects = masterList.todoLists;
    const currentProject = listOfProjects[masterList.currentProjectIndex];
    this._clearPage();
    this._renderNavBar(listOfProjects);
    this._renderTasks(currentProject);
    this._renderNewTask(currentProject, masterList);
  }

  _renderNavBar(listOfProjects) {
    const nav = document.createElement('UL');
    nav.className = 'navBar';

    listOfProjects.forEach((list) => {
      let link = document.createElement('LI');
      link.innerText = list.name;
      nav.appendChild(link);
    });

    container.appendChild(nav);
  }

  _renderTasks(currentProject) {
    const taskList = document.createElement('UL');

    currentProject.todoList.forEach((task) => {
      let newTask = document.createElement('LI');
      newTask.innerText = task.title;
      taskList.appendChild(newTask);
    });

    container.appendChild(taskList);
  }

  _clearPage() {
    container.innerHTML = '';
  }

  _renderNewTask(currentProject, masterList) {
    const form = document.createElement('FORM');
    form.addEventListener('click', () => {
      return false;
    });

    const title = document.createElement('INPUT');
    title.setAttribute('placeholder', 'Name of task');
    form.appendChild(title);

    const description = document.createElement('INPUT');
    description.setAttribute('placeholder', 'Description of task');
    form.appendChild(description);

    const dueDate = document.createElement('INPUT');
    dueDate.setAttribute('placeholder', Date.now());
    dueDate.setAttribute('type', 'date');

    form.appendChild(dueDate);

    const submitButton = document.createElement('BUTTON');
    submitButton.setAttribute('type', 'button');
    submitButton.innerText = 'Submit';
    submitButton.addEventListener('click', () => {
      currentProject.addItem(title.value, description.value, dueDate.value);
      this.renderPage(masterList);
    });
    form.append(submitButton);

    container.appendChild(form);
  }
}

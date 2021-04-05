export default class Renderer {
  renderPage(masterList) {
    this._renderNavBar(masterList.todoLists);
  }

  _renderNavBar(listOfProjects) {
    const nav = document.getElementById('navBar');

    listOfProjects.forEach((list) => {
      let link = document.createElement('LI');
      link.innerText = list.name;
      nav.appendChild(link);
    });
  }
}

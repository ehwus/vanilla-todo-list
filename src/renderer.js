export default class Renderer {
  static renderPage(masterList) {
    const nav = document.getElementById('navBar');
    masterList.todoLists.forEach((list) => {
      let link = document.createElement('LI');
      link.innerText = list.name;
      nav.appendChild(link);
    });
  }
}

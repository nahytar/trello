import view from '../view/list'
import dashboardModel from '../model/dashboard'
import dashboardController from '../controller/dashboard'

const addNewList = () => {
  createNewList();
}

const changeTitle = (event) => {
  event.preventDefault();
  const listId = event.target.dataset.listId;
  const title = document.getElementById('listTitle' + listId).value
  dashboardModel.setListTitle(listId, title);
  dashboardController.draw();
}

const draw = async (list) => {
  if (list) {
    await view.render(list);
    if (document.getElementById('saveListTitle' + list.id)) {
      document.getElementById('saveListTitle' + list.id).addEventListener('click', changeTitle);
    }
  }
}

export default { draw, changeTitle };
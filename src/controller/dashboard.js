import view from '../view/dashboard';
import model from '../model/dashboard';
import listController from './list'

const draw = () => {
  document.getElementById('listsArea').innerHTML = '';
  model.getLists().forEach(list => {
    listController.draw(list)
  });
  document.getElementById('listsArea').innerHTML += view.render();
  document.getElementById('addListInput').addEventListener('click', addNewList);
}

const addNewList = () => {
  model.addNewList();
  draw();
}

export default { draw };
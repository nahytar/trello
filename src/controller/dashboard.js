import view from '../view/dashboard';
import model from '../model/dashboard';

const draw = () => {
  document.getElementById('listsArea').innerHTML = view.render(model.getLists());
  document.getElementById('addListInput').addEventListener('click', addNewList);
}

const addNewList = () => {
  model.addNewList();
  draw();
}

export default { draw };
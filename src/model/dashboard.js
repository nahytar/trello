import listModel from './list'
const listsCollection = [];

const addNewList = () => {
  listsCollection.push(listModel.createNewList())
}

const getLists = () => {
  return listsCollection;
}

const setListTitle = (listId, title) => {
  return listsCollection.find((element) => {
    return element.id == listId;
  }).title = title;
}

export default { addNewList, getLists, setListTitle }
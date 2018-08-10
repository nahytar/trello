import list from './list'
const listsCollection = [];

const addNewList = () => {
  listsCollection.push(list.createNewList())
}

const getLists = () => {
  return listsCollection;
}

export default { addNewList, getLists }
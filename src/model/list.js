let lastList = 0;

const createNewList = () => {
  return {
    id: ++lastList,
    title: ""
  }
}

export default { createNewList }
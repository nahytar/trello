const render = (list) => {
  let listHtml = `
  <div class="col-sm-3">
  <div class="card" id="list${list.id}">
    <div class="card-body">
      <h5 class="card-title">${list.title}</h5>`
  if (!list.title) {
    listHtml += `
    <input class="form-control" id="listTitle${list.id}" type="text" placeholder="Añadir una lista...">
      <a href="#" class="btn btn-primary saveListTitle" data-list-id="${list.id}" id="saveListTitle${list.id}">Guardar</a>
    `
  }
  listHtml += `
  </div >
  </div >
  </div > `;
  document.getElementById('listsArea').innerHTML += listHtml;
}

export default { render }
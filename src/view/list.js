const render = (list) => {
  return `
  <div class="col-sm-3">
  <div class="card" id="list${list.id}">
    <div class="card-body">
      <h5 class="card-title">${list.title}</h5>
      <input class="form-control" type="text" placeholder="Añadir una lista...">
      <a href="#" class="btn btn-primary saveListTitle" data-list-id="${list.id}">Guardar</a>
    </div>
  </div>
  </div>`;
}

export default { render }
import listView from './list';

const render = (lists) => {
  let listsHtml = "";
  lists.forEach(list => {
    listsHtml += listView.render(list)
  });

  return listsHtml + `
  <div class="col-3 col-xs-3">
    <div class="row">
      <div id="col-2">
        <input class="form-control" type="text" placeholder="Añadir una lista..." readonly id="addListInput">
      </div>
    </div>
  </div>`
}

export default { render }
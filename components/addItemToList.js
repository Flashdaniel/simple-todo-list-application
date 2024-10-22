let id = 1;

function addItemToList() {
  const ul = document.querySelector(".todo-list");
  const input = document.querySelector(".todo-field");

  if (!input.value) return;

  input.style.margin = 0;

  ul.style.display = "block";
  ul.insertAdjacentHTML("beforeend", listItem(id++, input.value));

  input.value = "";
}

function listItem(id, content) {
  const li = `<li class="todo-item" id="${id}">${content}<span class="icon-delete">🗑</span></li>`;
  return li;
}

export default addItemToList;

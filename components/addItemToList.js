function addItemToList(event) {
  event.preventDefault();

  const ul = document.querySelector(".todo-list");
  const input = document.querySelector(".todo-field");

  if (!input.value) return;

  input.style.margin = 0;

  ul.style.display = "block";
  ul.insertAdjacentHTML("beforeend", listItem(incrementID(), input.value));

  input.value = "";
}

function listItem(id, content) {
  const isLi = document.querySelector(".todo-item");

  if (isLi && isLi.firstChild.nodeName == "INPUT") {
    const li = `<li class="todo-item" id="${id}"><input type="checkbox" name="${id}" >${content}<span class="icon-delete">🗑</span></li>`;
    return li;
  }

  const li = `<li class="todo-item" id="${id}">${content}<span class="icon-delete">🗑</span></li>`;
  return li;
}

let id = 0;

function incrementID() {
  id = id + 1;
  return id;
}

function decrementID() {
  id = id - 1;
  return id;
}

export { addItemToList, decrementID };

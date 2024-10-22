import { decrementID } from "./addItemToList.js";

function deleteListItem(event) {
  const list = document.querySelector(".todo-list");
  const target = event.target.closest("li");

  if (!target || !list.contains(target)) return;
  target.remove();

  const numberItems = decrementID();

  if (numberItems == 0) {
    const input = document.querySelector(".todo-field");
    input.style.margin = "";
    list.style.display = "";
  }
}

export default deleteListItem;

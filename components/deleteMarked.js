import { target } from "./menu.js";

function deleteMarked(event) {
  const deleteMarkedBtn = event.target.dataset.deleteMarked;
  if (deleteMarkedBtn != "delete-marked") return;

  if (target.children[0].firstElementChild.nodeName != "INPUT") return;

  const todoItems = document.querySelectorAll(".todo-item");

  for (const todoItem of todoItems) {
    const input = todoItem.children[0].firstElementChild;
    if (input.checked) {
      todoItem.remove();
    }
  }

  // check if all items a deleted. if so hide list.
  // if not reset mark and mark all action.
  const todoList = document.querySelector(".todo-list");

  if (todoList.children.length) {
    const mark = document.querySelector("button[data-mark]");
    mark.dataset.mark = "unmark";
    mark.textContent = "Unmark";
  } else {
    document.querySelector(".todo-field").style.margin = "";
    todoList.style.display = "";
  }

  const unmarkAll = document.querySelector("button[data-mark-all]");
  unmarkAll.dataset.markAll = "mark-all";
  unmarkAll.textContent = "Mark all";
}

export default deleteMarked;

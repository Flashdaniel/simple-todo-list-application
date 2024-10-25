import { target } from "./menu.js";

function markAll(event) {
  const markAllAction = event.target.dataset.markAll;
  if (markAllAction != "mark-all") return;

  if (target.firstElementChild.nodeName != "INPUT") {
    const todoItems = document.querySelectorAll(".todo-item");

    for (const todoItem of todoItems) {
      let input = `<input type="checkbox" name="${todoItem.id}" checked >`;
      todoItem.insertAdjacentHTML("afterbegin", input);
    }
  } else {
    const inputs = document.querySelectorAll(".todo-item > input");

    for (const input of inputs) {
      input.checked = true;
    }
  }

  const markAction = document.querySelector("button[data-mark]");
  markAction.textContent = "Mark";
  markAction.dataset.mark = "mark";

  event.target.dataset.markAll = "unmark-all";
  event.target.textContent = "Unmark all";
}

export default markAll;

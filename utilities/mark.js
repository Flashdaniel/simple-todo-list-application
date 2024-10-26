import { target } from "./menu.js";

function mark(event) {
  let markAction = event.target.dataset.mark;

  if (markAction != "mark") return;

  if (target.children[0].firstElementChild.nodeName == "INPUT") return;

  const todoItems = document.querySelectorAll(".todo-item");

  for (const todoItem of todoItems) {
    let input;

    if (target.id == todoItem.id) {
      input = `<input type="checkbox" name="${todoItem.id}" checked >`;
    } else {
      input = `<input type="checkbox" name="${todoItem.id}" >`;
    }

    todoItem.firstElementChild.insertAdjacentHTML("afterbegin", input);
  }

  event.target.dataset.mark = "unmark";
  event.target.textContent = "Unmark";
}

export default mark;

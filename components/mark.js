import { target } from "./menu.js";

function mark(event) {
  let markAction = event.target;
  if (markAction.textContent.toLowerCase() != "mark") return;

  if (target.children[0].nodeName == "INPUT") return;

  const todoItems = document.querySelectorAll(".todo-item");

  for (const todoItem of todoItems) {
    let input;

    if (target.id == todoItem.id) {
      input = `<input type="checkbox" name="${todoItem.id}" checked >`;
    } else {
      input = `<input type="checkbox" name="${todoItem.id}" >`;
    }

    todoItem.insertAdjacentHTML("afterbegin", input);
  }

  markAction.textContent = "Unmark";
}

export default mark;

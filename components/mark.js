import { target } from "./menu.js";

function mark(event) {
  let markAction = event.target.dataset.action;
  console.log(markAction);

  if (markAction != "mark") return;

  if (target.firstElementChild.nodeName == "INPUT") return;

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

  event.target.dataset.action = "unmark";
  event.target.textContent = "Unmark";
}

export default mark;

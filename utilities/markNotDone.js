import { target } from "./menu.js";

function markNotDone(event) {
  const mark = event.target.dataset.markAsDone;
  if (mark != "mark-not-done") return;

  if (target.children[0].firstElementChild.nodeName != "INPUT") {
    target.children[0].firstElementChild.remove();
  } else {
    const inputs = document.querySelectorAll(".todo-item input");
    for (const input of inputs) {
      if (input.checked && input.nextElementSibling.textContent == "✔") {
        input.nextElementSibling.remove();
      }
    }
  }
}

export default markNotDone;

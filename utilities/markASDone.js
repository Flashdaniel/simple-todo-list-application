import { target } from "./menu.js";

function markAsDone(event) {
  const mark = event.target.dataset.markAsDone;
  if (mark != "mark-as-done") return;

  if (target.children[0].firstElementChild.nodeName != "INPUT") {
    target.firstElementChild.insertAdjacentHTML(
      "afterbegin",
      '<span style="color: chartreuse;">✔</span>'
    );
  } else {
    const inputs = document.querySelectorAll(".todo-item input");
    for (const input of inputs) {
      if (input.checked && input.nextElementSibling.textContent != "✔") {
        const node = document.createElement("span");
        node.style.color = "chartreuse";
        node.textContent = "✔";

        input.insertAdjacentElement("afterend", node);
      }
    }
  }
}

export default markAsDone;

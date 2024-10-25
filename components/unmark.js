function unmark(event) {
  const mark = event.target.dataset.mark;
  if (mark != "unmark") return;

  const lis = document.querySelectorAll(".todo-item");

  for (const li of lis) {
    if (li.firstElementChild.nodeName == "INPUT") li.firstElementChild.remove();
  }

  // the dom needs time to remove a node before make another change
  setTimeout(() => {
    event.target.innerHTML = "Mark";
    event.target.dataset.mark = "mark";
  }, 0);
}

export default unmark;

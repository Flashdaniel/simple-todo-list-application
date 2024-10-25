function unmarkAll(event) {
  const markAll = event.target.dataset.markAll;
  if (markAll != "unmark-all") return;

  const lis = document.querySelectorAll(".todo-item");

  for (const li of lis) {
    if (li.children[0].firstElementChild.nodeName == "INPUT")
      li.children[0].firstElementChild.remove();
  }

  // the dom needs time/space to remove nodes before make another change
  setTimeout(() => {
    event.target.textContent = "Mark all";
    event.target.dataset.markAll = "mark-all";
  }, 0);
}

export default unmarkAll;

function toggleOrder(event) {
  const action = event.target.dataset.toggleOrder;
  const todoList = document.querySelector(".todo-list");
  const todoItems = document.querySelectorAll(".todo-item");

  if (action == "toggle-order-by-undone") {
    for (const todoItem of todoItems) {
      if (/✔/.test(todoItem.textContent)) {
        todoList.append(todoItem);
      }
    }
    event.target.dataset.toggleOrder = "toggle-order-by-done";
  } else if (action == "toggle-order-by-done") {
    for (const todoItem of todoItems) {
      if (!/✔/.test(todoItem.textContent)) {
        todoList.append(todoItem);
      }
    }
    event.target.dataset.toggleOrder = "toggle-order-by-undone";
  }
  return;
}

export default toggleOrder;

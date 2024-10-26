function deleteListItem(event) {
  const list = document.querySelector(".todo-list");
  const target = event.target.closest(".icon-delete");

  if (!target || !list.contains(target)) return;
  target.closest("li").remove();

  if (!list.children.length) {
    const mark = document.querySelector("button[data-mark]");
    mark.dataset.mark = "mark";
    mark.textContent = "mark";

    const unmarkAll = document.querySelector("button[data-mark-all]");
    unmarkAll.dataset.markAll = "mark-all";
    unmarkAll.textContent = "Mark all";

    const input = document.querySelector(".todo-field");
    input.style.margin = "";
    list.style.display = "";
  }
}

export default deleteListItem;

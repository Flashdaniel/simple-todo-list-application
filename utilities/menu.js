let target;

function menu(event) {
  event.preventDefault();

  target = event.target.closest(".todo-item");
  if (!target || !this.contains(target)) return;

  const menu = document.querySelector(".menu");
  menu.style.display = "block";
  const coord = menu.getBoundingClientRect();

  // show menu at the right if no enough space at the left or
  // at the top if no space at the bottom
  if (event.clientX + coord.width >= document.body.clientWidth) {
    menu.style.top = event.clientY + "px";
    menu.style.left = event.clientX - coord.width + "px";
  } else if (event.clientY + coord.height >= window.innerHeight) {
    menu.style.top = event.clientY - coord.height - 20 + "px";
    menu.style.left = event.clientX + "px";
  } else {
    menu.style.top = event.clientY + "px";
    menu.style.left = event.clientX + "px";
  }

  const markAsDone = document.querySelector("button[data-mark-as-done]");
  if (/✔/.test(target.textContent)) {
    markAsDone.dataset.markAsDone = "mark-not-done";
    markAsDone.textContent = "Mark not done";
  } else {
    markAsDone.dataset.markAsDone = "mark-as-done";
    markAsDone.textContent = "Mark as done";
  }

  document.addEventListener("click", (event) => {
    menu.style.display = "";
    menu.style.top = "";
    menu.style.left = "";
  });
}

export { menu, target };

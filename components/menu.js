function menu(event) {
  event.preventDefault();

  const target = event.target.closest(".todo-item");
  if (!target || !this.contains(target)) return;

  const menu = document.querySelector(".menu");
  menu.style.display = "block";
  const coord = menu.getBoundingClientRect();

  // show menu at the right if no enough space at the left
  // or show at the left
  if (event.clientX + coord.width >= document.body.clientWidth) {
    menu.style.top = event.clientY + "px";
    menu.style.left = event.clientX - coord.width + "px";
  } else {
    menu.style.top = event.clientY + "px";
    menu.style.left = event.clientX + "px";
  }

  document.addEventListener("click", (event) => {
    menu.style.display = "";
    menu.style.top = "";
    menu.style.left = "";
  });
}

export default menu;
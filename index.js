import { addItemToList } from "./components/addItemToList.js";
import deleteListItem from "./components/deleteListItem.js";
import mark from "./components/mark.js";
import { menu } from "./components/menu.js";

const form = document.querySelector(".todo");
form.addEventListener("submit", addItemToList);

const todoList = document.querySelector(".todo-list");
todoList.addEventListener("click", deleteListItem);

todoList.addEventListener("contextmenu", menu);

form.addEventListener("click", mark);

import { addItemToList } from "./components/addItemToList.js";
import deleteListItem from "./components/deleteListItem.js";
import mark from "./components/mark.js";
import markAll from "./components/markAll.js";
import { menu } from "./components/menu.js";
import unmark from "./components/unmark.js";

const form = document.querySelector(".todo");
form.addEventListener("submit", addItemToList);

const mainMenu = document.querySelector(".menu");
mainMenu.addEventListener("click", unmark);
mainMenu.addEventListener("click", mark);
mainMenu.addEventListener("click", markAll);

const todoList = document.querySelector(".todo-list");
todoList.addEventListener("click", deleteListItem);
todoList.addEventListener("contextmenu", menu);

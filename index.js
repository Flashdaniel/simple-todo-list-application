import { addItemToList } from "./components/addItemToList.js";
import deleteListItem from "./components/deleteListItem.js";
import deleteMarked from "./components/deleteMarked.js";
import mark from "./components/mark.js";
import markAll from "./components/markAll.js";
import markAsDone from "./components/markASDone.js";
import markNotDone from "./components/markNotDone.js";
import { menu } from "./components/menu.js";
import unmark from "./components/unmark.js";
import unmarkAll from "./components/unmarkAll.js";

const form = document.querySelector(".todo");
form.addEventListener("submit", addItemToList);

const mainMenu = document.querySelector(".menu");
mainMenu.addEventListener("click", unmark);
mainMenu.addEventListener("click", mark);
mainMenu.addEventListener("click", unmarkAll);
mainMenu.addEventListener("click", markAll);
mainMenu.addEventListener("click", deleteMarked);
mainMenu.addEventListener("click", markAsDone);
mainMenu.addEventListener("click", markNotDone);

const todoList = document.querySelector(".todo-list");
todoList.addEventListener("click", deleteListItem);
todoList.addEventListener("contextmenu", menu);

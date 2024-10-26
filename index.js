import { addItemToList } from "./utilities/addItemToList.js";
import deleteListItem from "./utilities/deleteListItem.js";
import deleteMarked from "./utilities/deleteMarked.js";
import mark from "./utilities/mark.js";
import markAll from "./utilities/markAll.js";
import markAsDone from "./utilities/markASDone.js";
import markNotDone from "./utilities/markNotDone.js";
import { menu } from "./utilities/menu.js";
import toggleOrder from "./utilities/toggleOrder.js";
import unmark from "./utilities/unmark.js";
import unmarkAll from "./utilities/unmarkAll.js";

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
mainMenu.addEventListener("click", toggleOrder);

const todoList = document.querySelector(".todo-list");
todoList.addEventListener("click", deleteListItem);
todoList.addEventListener("contextmenu", menu);

import { calc } from "./calc.js";

const todo1 = {
  sorszam: 1,
  name: "Feladat gyakorlás",
  isCompleted: false,
  difficulty: 3,
};

const todo2 = {
  sorszam: 2,
  name: "Főzés",
  isCompleted: false,
  difficulty: 4,
};

const todo3 = {
  sorszam: 3,
  name: "Mosás",
  isCompleted: false,
  difficulty: 3,
};

const todo4 = {
  sorszam: 4,
  name: "Vasalás",
  isCompleted: false,
  difficulty: 2,
};

const todos = [todo1, todo2, todo3, todo4];

export const initTodos = () => {
  addTodo();
  feltoltes();
  szamlalas();
};


const feltoltes = () => {
  const container = document.querySelector("#todos");
  container.innerHTML = "";
  todos.forEach((todo, index) => {
    container.innerHTML =
      container.innerHTML +
      `
    <div class="${todo.isCompleted ? "complete" : "incomplete"}">
    <input ${todo.isCompleted ? "checked" : ""} type='checkbox'> 
   ${todo.sorszam}. ${todo.name} - ${todo.difficulty}
   <button class="delete">X</button>
    </div>
    `;
  });
  // addEventListeners();
};

const addEventListeners = () => {
  document.querySelectorAll("input[type=checkbox]").forEach((checkbox, index) => {
      checkbox.addEventListener("click", () => {
        todos[index].isCompleted = checkbox.checked;
        // szamlalas(); proba
        feltoltes();
      });
    });
};

const szamlalas = () => {
  document.querySelector("#teljesitesiArany").textContent = `${Math.round(calc(todos) * 100)}%`;
};


const addTodo = () => {
  document.querySelector('#addtodobutton').addEventListener('click', () => {
    const text = document.querySelector('#hozzaadtext').value;
    const dif = Number(document.querySelector('#hozzaaddif').value);
    document.querySelector('#hozzaadtext').value = '';
    document.querySelector('#hozzaaddif').value = '';
    const todon = {
      sorszam: todos{index},
      name: text,
      difficulty: dif,
    } 
    todos.push(todon);
    feltoltes();
  })
}

import { calc } from "./calc.js";

const todo1 = {
  // sorszam: 1,
  name: "Feladat gyakorlás",
  isCompleted: false,
  difficulty: 3,
};

const todo2 = {
  // sorszam: 2,
  name: "Főzés",
  isCompleted: false,
  difficulty: 4,
};

const todo3 = {
  // sorszam: 3,
  name: "Mosás",
  isCompleted: false,
  difficulty: 3,
};

const todo4 = {
  // sorszam: 4,
  name: "Vasalás",
  isCompleted: false,
  difficulty: 2,
};

const todos = [todo1, todo2, todo3, todo4];


let maxDifficulty;

export const initTodos = () => {
  addTodo();
  initOrderButtons();
  updateTodos ();
};


const feltoltes = () => {
  const container = document.querySelector("#todos");
  container.innerHTML = "";
  todos.forEach((todo, index) => {
    container.innerHTML =
      container.innerHTML +
      `
    <div class="${todo.isCompleted ? "complete" : "incomplete"}">
    <input ${todo.isCompleted ? "checked" : ""} type="checkbox"> 
   ${index +1}. ${todo.name} - ${todo.difficulty}
   <button class="delete">X</button>
    </div>
    `;
  });
  // addEventListeners();
};

const addEventListeners = () => {
  document.querySelectorAll("input[type=checkbox]").forEach((checkbox, index) => {
      checkbox.addEventListener("change", () => {
        todos[index].isCompleted = checkbox.checked;
        // szamlalas(); proba
        updateTodos();
      });
    });

  document.querySelectorAll(".delete").forEach((button, index) => {
    button.addEventListener("click", () => {
      todos.splice(index, 1);
      updateTodos();
    });
  });
};

const szamlalas = () => {
  document.querySelector("#teljesitesiArany").textContent = `${Math.round(calc(todos) * 100)}%`;
};

const initOrderButtons = () => {
  document.querySelector('#novekvo').addEventListener('click', () => {
      todos.sort((t1, t2) => t1.difficulty < t2.difficulty ? -1 : (t1.difficulty === t2.difficulty ? 0 : 1));
      updateTodos();
  });

  document.querySelector('#csokkeno').addEventListener('click', () => {
      todos.sort((t1, t2) => t1.difficulty < t2.difficulty ? 1 : (t1.difficulty === t2.difficulty ? 0 : -1));
      updateTodos();
  });
};


const addTodo = () => {
  document.querySelector('#addtodobutton').addEventListener('click', () => {
    const text = document.querySelector('#hozzaadtext').value;
    const dif = Number(document.querySelector('#hozzaaddif').value);
    document.querySelector('#hozzaadtext').value = '';
    document.querySelector('#hozzaaddif').value = '';
    const todon = {
      // sorszam: todos[index],
      name: text,
      difficulty: dif,
    } 
    todos.push(todon);
    updateTodos();
  });
};

const updateMaxDifficulty = () => {
  maxDifficulty = Math.max(...todos.map(t => t.difficulty));
  document.querySelector('#max').textContent = maxDifficulty;
};

const updateHardestTodo = () => {
  document.querySelector('#hardest').textContent = todos.find(t => t.difficulty === maxDifficulty).name;
};

const updateTodos = () => {
  feltoltes();
  addEventListeners ();
  szamlalas();
  updateMaxDifficulty();
  updateHardestTodo();
 
};
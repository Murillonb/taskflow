import { bd } from "./bd.js";

export default function showTasks() {
  const taskList = document.querySelector("[data-task-list]");
  taskList.innerHTML = "";

  function createTask(task) {
    const li = document.createElement("li");
    li.classList.add("task", "box");
    li.innerHTML = `
      <label class="font-task">
        <input type="checkbox" name="status" id="status">
        <span>${task.task}</span>
      </label>
      <div>
        <span class="date">${task.date}</span>
        <button class="btn" data-id="${task.id}">Excluir</button>
      </div>`;

    return li;
  }

  if (taskList) {
    bd.tasks.forEach((task) => taskList.appendChild(createTask(task)));
  }
}

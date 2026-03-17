import { bd } from './bd.js';

export default class Task {
  constructor() {
    this.form = document.querySelector('[data-form]');
    this.taskList = document.querySelector('[data-task-list]');

    this.handleSubmit = this.handleSubmit.bind(this);
    this.excluirTask = this.excluirTask.bind(this);
  }

  createTask(task) {
    const li = document.createElement('li');
    li.classList.add('task', 'box');
    li.innerHTML = `
      <label class="font-task">
        <input type="checkbox" name="status" id="status">
        <span>${task.task}</span>
      </label>
      <div>
        <span class="date">${task.date}</span>
        <button class="btn" data-btn-exc data-id="${task.id}">Excluir</button>
      </div>`;

    return li;
  }

  loadTasks() {
    this.taskList.innerHTML = '';

    bd.tasks.forEach((task) =>
      this.taskList.appendChild(this.createTask(task)),
    );

    this.addDeleteButtonEvent();
  }

  excluirTask({ target }) {
    const id = target.getAttribute('data-id');
    bd.removeTask(Number(id));
    this.loadTasks();
  }

  handleSubmit(e) {
    e.preventDefault();
    bd.addTask(this.form.task.value);
    this.loadTasks();
    this.form.reset();
  }

  addDeleteButtonEvent() {
    this.buttons = document.querySelectorAll('[data-btn-exc]');
    this.buttons.forEach((btn) =>
      btn.addEventListener('click', this.excluirTask),
    );
  }

  addSubmitEvent() {
    this.form.addEventListener('submit', this.handleSubmit);
  }

  init() {
    if (this.form && this.taskList) {
      this.addSubmitEvent();
      this.loadTasks();
    }
    return this;
  }
}

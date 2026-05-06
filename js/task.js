import { bd } from './bd.js';

export default class Task {
  constructor() {
    this.form = document.querySelector('[data-form]');
    this.taskList = document.querySelector('[data-task-list]');

    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(e) {
    const id = e.target.getAttribute('data-check');
    bd.changeStatus(Number(id));
    this.loadTasks();
  }

  addCheckedEvent() {
    this.checkboxs = document.querySelectorAll('[data-check]');
    this.checkboxs.forEach((box) =>
      box.addEventListener('change', this.changeStatus),
    );
  }

  deleteTask({ target }) {
    const id = target.getAttribute('data-id');
    bd.removeTask(Number(id));
    this.loadTasks();
  }

  addDeleteButtonEvent() {
    this.buttons = document.querySelectorAll('[data-btn-exc]');
    this.buttons.forEach((btn) =>
      btn.addEventListener('click', this.deleteTask),
    );
  }

  createTask(task) {
    const li = document.createElement('li');
    li.classList.add('task', 'box');
    li.innerHTML = `
    <div class='div-task'>
      <input type="checkbox" name="status" id="status" ${task.status === 'done' ? 'checked' : ''} data-check="${task.id}">
      <label class="font-task">
        <pre>${task.task}</pre>
      </label>
    </div>
    <div>
      <span class="date">${task.date}</span>
      <button class="btn" data-btn-exc data-id="${task.id}">Excluir</button>
    </div>`;

    return li;
  }

  loadTasks() {
    this.taskList.innerHTML = '';
    const filter = localStorage.getItem('filter');
    bd.tasks.forEach((task) => {
      if (filter === 'All') {
        this.taskList.appendChild(this.createTask(task));
      } else if (filter === 'Done' && task.status === 'done') {
        this.taskList.appendChild(this.createTask(task));
      } else if (filter === 'Open' && task.status === 'open') {
        this.taskList.appendChild(this.createTask(task));
      }
    });

    this.addDeleteButtonEvent();
    this.addCheckedEvent();
  }

  handleSubmit(e) {
    e.preventDefault();
    bd.addTask(this.form.task.value);
    this.loadTasks();
    this.form.reset();
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

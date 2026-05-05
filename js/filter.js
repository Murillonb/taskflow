import Task from './task.js';

export default class Filter {
  constructor() {
    this.filters = document.querySelector('[data-filters]').children;
    this.task = new Task();

    this.handleClick = this.handleClick.bind(this);
  }

  updateLocalStorage(btn) {
    localStorage.setItem('filter', btn.innerText);
    this.task.loadTasks();
  }

  checkButton(type) {
    [...this.filters].forEach((btn) => {
      btn.classList.remove('active');
      if (btn.innerHTML === type) {
        btn.classList.add('active');
        this.updateLocalStorage(btn);
      }
    });
  }

  handleClick({ target }) {
    this.checkButton(target.innerText);
  }

  addFilterEvent() {
    [...this.filters].forEach((btn) => {
      btn.addEventListener('click', this.handleClick);
    });
  }

  init() {
    if (this.filters.length) {
      this.addFilterEvent();
      this.checkButton(localStorage.getItem('filter') || 'All');
    }
  }
}

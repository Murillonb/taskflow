import { bd } from './bd.js';

export default class Score {
  constructor() {
    this.open = document.querySelector('.score-open').children[0];
    this.done = document.querySelector('.score-done').children[0];
    this.all = document.querySelector('.score-all').children[0];
  }

  showAmount() {
    this.open.innerHTML = this.amount.open;
    this.done.innerHTML = this.amount.done;
    this.all.innerHTML = bd.tasks.length;
  }

  countTasks() {
    this.amount = {
      open: 0,
      done: 0,
    };

    bd.tasks.forEach((task) => {
      if (task.status === 'open') {
        this.amount.open += 1;
      } else if (task.status === 'done') {
        this.amount.done += 1;
      }
    });

    this.showAmount();
  }

  init() {
    this.countTasks();
  }
}

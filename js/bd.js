import formatDate from './format-date.js';
import Score from './score.js';

const score = new Score();

export const bd = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],

  addTask(task) {
    if (!task.trim()) return;

    this.tasks.push({
      id: new Date().getTime(),
      task: task.trim(),
      date: formatDate(new Date()),
      status: 'open',
    });

    this.updateLocalStorage();
  },

  removeTask(idTask) {
    const index = this.tasks.findIndex(({ id }) => id === idTask);
    this.tasks.splice(index, 1);
    this.updateLocalStorage();
  },

  changeStatus(idTask) {
    const index = this.tasks.findIndex(({ id }) => id === idTask);
    this.tasks[index].status =
      this.tasks[index].status === 'open' ? 'done' : 'open';
    this.updateLocalStorage();
  },

  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    score.countTasks();
  },
};

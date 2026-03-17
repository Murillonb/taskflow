import formatDate from './format-date.js';

export const bd = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],

  addTask(title) {
    if (!title.trim()) return;

    this.tasks.push({
      id: new Date().getTime(),
      task: title.trim(),
      date: formatDate(new Date()),
      status: 'open',
    });

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  },

  removeTask(idTask) {
    const index = this.tasks.findIndex(({ id }) => id === idTask);
    this.tasks.splice(index, 1);

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  },
};

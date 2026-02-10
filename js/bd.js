import formatDate from "./formatDate.js";

export const bd = {
  tasks: [],

  addTask(title) {
    if (!title.trim()) return;

    this.tasks.push({
      id: crypto.randomUUID(),
      task: title.trim(),
      date: formatDate(new Date()),
      status: "open",
    });
  },
};

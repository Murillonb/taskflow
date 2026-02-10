import { bd } from "./bd.js";

export default function register() {
  const form = document.querySelector("[data-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      bd.addTask(form.task.value);
      form.reset();
    });
  }
}

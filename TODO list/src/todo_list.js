import * as domUtils from './utils/dom_utils'
export const todoList = {
  form: document.querySelector('form'),
  newTask: document.querySelector('#add'),
  textTask: document.querySelector('#new-task'),
  tasks: document.querySelector('.tasks'),
  controls: document.querySelector('.controls'),

  init() {
    const self = this;
    this.form.addEventListener('submit', function (e) {
      e.preventDefault();
      self.add();
    });
    this.form.addEventListener('click', function (e) {
      const element = e.target;
      switch (element.id) {
        case 'remove-task':
          self.tasks.removeChild(element.parentElement.parentElement);
          break;
        case 'complete-task':
          element.classList.toggle('complete');
          element.parentElement.parentElement.classList.toggle('uncomplete-task');
          element.parentElement.parentElement.classList.toggle('complete-task');
          break;  
      }
      console.log(element);
      console.log('click');
    });
  },

  add() {
    if (this.textTask.value != '') {
      this.tasks.innerHTML += domUtils.createTask();
      this.tasks.lastChild.querySelector('.content').innerText = this.textTask.value;
      this.textTask.value = '';
      this.textTask.focus();
    }
  }
}
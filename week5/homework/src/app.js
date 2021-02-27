import { doc } from 'prettier';
import { getTasksFromApi, deleteTaskFromApi, addTaskToApi } from './data';

class PomodoroApp {
  constructor(options) {
    let { tableTbodySelector, taskFormSelector } = options;
    this.$tableTbody = document.querySelector(tableTbodySelector);
    this.$taskForm = document.querySelector(taskFormSelector);
    this.$taskFormSubmitter = this.$taskForm.querySelector('button');
    this.$taskFormInput = this.$taskForm.querySelector('input');
  }
  getDeletedRowById(id) {
    return document.querySelector(`tr[data-id="${id}"]`);
  }
  changeTaskButtonStatus() {
    const $taskSubmitter = this.$taskFormSubmitter;
    if ($taskSubmitter.innerText == 'Add Task') {
      $taskSubmitter.innerText = 'Loading...';
      $taskSubmitter.disabled = true;
    } else {
      $taskSubmitter.innerText = 'Add Task';
      $taskSubmitter.disabled = false;
    }
  }

  addTask(task) {
    this.changeTaskButtonStatus();
    addTaskToApi(task)
      .then((data) => data.json())
      .then((newTask) => {
        this.addTaskToTable(newTask);
        this.changeTaskButtonStatus();
      });
  }

  addTaskToTable(task, index) {
    const $newTaskEl = document.createElement('tr');
    $newTaskEl.dataset.id = task.id;
    $newTaskEl.innerHTML = `<th scope="row">${task.id}</th><td>${task.title}</td><td><button class="btn btn-danger delete-task" data-id="${task.id}" >Delete</button></td>`;
    this.$tableTbody.appendChild($newTaskEl);
    this.$taskFormInput.value = '';
    this.bindClickEventByIdToButton(task.id);
  }

  handleAddTask() {
    this.$taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.$taskFormInput.value == '') {
        alert('Please enter a task.');
        return -1;
      }
      const task = { title: this.$taskFormInput.value };
      this.addTask(task);
    });
  }

  bindClickEventByIdToButton(id) {
    const $removeBtn = document.querySelector(`.delete-task[data-id="${id}"]`);
    $removeBtn.addEventListener('click', (e) => {
      this.changeTaskButtonStatus();
      deleteTaskFromApi(id).then((e) => {
        this.getDeletedRowById(id).remove();
        this.changeTaskButtonStatus();
      });
    });
  }

  fillTasksTable() {
    getTasksFromApi().then((currentTasks) => {
      currentTasks.forEach((task, index) => {
        this.addTaskToTable(task, index + 1);
      });
    });
  }

  init() {
    this.fillTasksTable();
    this.handleAddTask();
  }
}

export default PomodoroApp;

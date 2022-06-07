import './styles/index.css';
import './styles/all.min.css';
import {
  addTaskToArray, getTaskFromStore, deleteTaskWith, editTask,
} from './add-remove.js';

const input = document.querySelector('.ph');
const submit = document.querySelector('.enter');
const taskEvent = document.body.querySelector('.tasks-list');

// get task from local storage on load
getTaskFromStore();

// Add Task Submit Action
// click Enter icon
submit.addEventListener('click', () => {
  if (input.value !== '') {
    addTaskToArray(input.value);
    input.value = '';
  }
});
// press Enter
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    submit.click();
  }
});

// delete
taskEvent.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    // delete from page
    e.target.parentElement.remove();
    // delete from local storage
    deleteTaskWith(e.target.parentElement.getAttribute('task-id'));
  }
});

// edit function
taskEvent.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit')) {
    e.target.addEventListener('change', (e) => {
      if (e.target.value === '') {
        deleteTaskWith(e.target.parentElement.parentElement.getAttribute('task-id'));
        e.target.parentElement.remove();
      } else {
        editTask(e);
      }
    });
  }
});
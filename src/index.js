/* eslint-disable comma-dangle */
import './styles/index.css';
import './styles/all.min.css';
import {
  addTaskToArray, getTaskFromStore, deleteTaskWith, editTask, clearAllComplete, deleteItem,
} from './add-remove.js';
import { completeStateChange } from './complete';

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
    // e.target.parentElement.remove();
    deleteItem(e.target);
    // delete from local storage
    deleteTaskWith(e.target.parentElement.getAttribute('task-id'));
  }
});

// edit function
taskEvent.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit')) {
    e.target.addEventListener('blur', (e) => {
      if (e.target.value === '') {
        deleteTaskWith(
          e.target.parentElement.parentElement.getAttribute('task-id')
        );
        e.target.parentElement.remove();
      } else {
        editTask(
          e.target.parentElement.parentElement.getAttribute('task-id'),
          e.target.value
        );
      }
    });
  }
});

taskEvent.addEventListener('click', (e) => {
  if (e.target.hasAttribute('checked')) {
    e.target.removeAttribute('checked');
    completeStateChange(JSON.parse(localStorage.getItem('tasks')), e.target);
  } else if (e.target.classList.contains('check-input')) {
    e.target.setAttribute('checked', '');
    completeStateChange(JSON.parse(localStorage.getItem('tasks')), e.target);
  }
});

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
  clearAllComplete();
});

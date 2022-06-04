import './styles/index.css';
import './styles/all.min.css';
import { addTaskToArray, getTaskFromStore, deleteTaskWith } from './add-remove.js';

const input = document.querySelector('.ph');
const submit = document.querySelector('.enter');
const taskEvent = document.body.querySelector('.tasks-list');

// get task from local storage on load
getTaskFromStore();

// Add Task Submit Action
// press Enter
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    submit.click();
  }
});
// click Enter icon
submit.onclick = () => {
  if (input.value !== '') {
    addTaskToArray(input.value);
    input.value = '';
  }
};

// delete
taskEvent.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    // delete from local storage
    // localStorage.clear();
    deleteTaskWith(e.target.parentElement.getAttribute('task-id'));
    // delete from page
    e.target.parentElement.remove();
  }
});

/* eslint import/no-cycle: [0, { maxDepth: 2 }] */
import { addTaskToStore } from './add-remove.js';
// check the task and add to store
const completeStateChange = (array, eve) => {
  array[eve.getAttribute('check-id') - 1].completed = eve.checked;
  addTaskToStore(array);
};

const checkedInputElements = document.getElementsByClassName('check-input');
const addCheckedAttFromStore = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed) {
      checkedInputElements[i].setAttribute('checked', '');
    } else {
      checkedInputElements[i].removeAttribute('checked');
    }
  }
};

const clearFunction = (taskArray) => {
  let newArray;
  // Delete from page
  if (taskArray !== null) {
    newArray = taskArray.filter((task) => task.completed === false);
    newArray.forEach((e, index) => {
      e.id = index + 1;
    });
  }
  return newArray;
};

export { completeStateChange, addCheckedAttFromStore, clearFunction };

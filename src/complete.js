/* eslint import/no-cycle: [0, { maxDepth: 2 }] */
import { addTaskToStore } from './add-remove.js';
// check the task and add to store
const completeStateChange = (taskArray) => {
  const checkedInputElements = document.getElementsByClassName('check-input');
  for (let i = 0; i < checkedInputElements.length; i += 1) {
    checkedInputElements[i].addEventListener('change', (event) => {
      taskArray[event.target.getAttribute('check-id') - 1].completed = event.target.checked;
      addTaskToStore(taskArray);
    });
  }
};

const addCheckedAttFromStore = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    const checkedInputElements = document.getElementsByClassName('check-input');
    if (tasks[i].completed) {
      checkedInputElements[i].setAttribute('checked', '');
      //   console.log(checkedInputElements[i])
    } else {
      checkedInputElements[i].removeAttribute('checked');
      //    console.log(checkedInputElements[i])
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

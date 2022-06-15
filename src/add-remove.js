/* eslint import/no-cycle: [0, { maxDepth: 2 }] */
import { completeStateChange, addCheckedAttFromStore, clearFunction } from './complete.js';
// TaskArray
let taskArray = JSON.parse(localStorage.getItem('tasks')) || [];

/* Create Task in the page Function */
const addTaskToPage = (taskArray) => {
  // Ul list = Tasks List
  const taskList = document.querySelector('.tasks-list');

  //   // Add task to the page
  let taskListSave = '';
  taskArray.forEach((task) => {
    const taskListHtml = `<li class="task" task-id="${task.id}">
        <div><input class="check-input" type="checkbox" check-id="${task.id}"/> <input class="edit" type="text" placeholder="Add Task" value = "${task.title}" /></div>
       <i class="fa-solid fa-trash-can del"></i>
      </li>`;
    taskListSave += taskListHtml;
  });
  taskList.innerHTML = taskListSave;
  completeStateChange(taskArray);
  addCheckedAttFromStore(taskArray);
};

// Add task to local storage Function
const addTaskToStore = (taskArray) => {
  window.localStorage.setItem('tasks', JSON.stringify(taskArray));
};

// get task from local storage Function
const getTaskFromStore = () => {
  const data = window.localStorage.getItem('tasks');

  if (data !== null) {
    const tasks = JSON.parse(data);
    addTaskToPage(tasks);
    addCheckedAttFromStore(tasks);
  }
};

// delete task from local storage Function
const deleteTaskWith = (taskId) => {
  if (taskArray !== null) {
    taskArray = taskArray.filter((task) => task.id !== +taskId);
    taskArray.forEach((e, index) => {
      e.id = index + 1;
    });
    addTaskToStore(taskArray);
    addTaskToPage(taskArray);
  }
  return taskArray;
};

// delete Item "function"
const deleteItem = (item) => {
  item.parentElement.remove();
}

// Add Task To Array of tasks Function
const addTaskToArray = (taskText) => {
  // task info
  const task = {
    id: taskArray.length + 1,
    title: taskText,
    completed: false,
  };

  // Push task to array
  taskArray.push(task);
  // Add task to page
  addTaskToPage(taskArray);
  // Add task to local storage
  addTaskToStore(taskArray);
};

// editing task function
const editTask = (taskId, e) => {
  taskArray.forEach((task) => {
    if (task.id === +taskId) {
      const index = taskArray.indexOf(task);
      // changing the task description and task array
      task.title = e;
      taskArray[index] = task;
    }
  });
  // adding the Updated Tasks Array to local Storage
  addTaskToStore(taskArray);
};

const clearAllComplete = () => {
  addTaskToPage(clearFunction(taskArray));
  window.localStorage.clear();
  addTaskToStore(clearFunction(taskArray));
  taskArray = clearFunction(taskArray);
};

export {
  addTaskToArray, addTaskToPage,
  getTaskFromStore, deleteTaskWith,
  editTask, addTaskToStore, clearAllComplete,deleteItem
};

// module.exports = addTaskToPage;
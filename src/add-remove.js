// TaskArray
let taskArray = JSON.parse(localStorage.getItem('tasks')) || [];
// Create Task in the page
const addTaskToPage = (taskArray) => {
  // Ul list = Tasks List
  const taskList = document.querySelector('.tasks-list');
  //   // Add task to the page
  let taskListSave = '';

  taskArray.forEach((task) => {
    const taskListHtml = `<li class="task" task-id="${task.id}">
        <div><input type="checkbox"/> <input class="edit" type="text" placeholder="Add Task" value = "${task.title}" /></div>
       <i class="fa-solid fa-trash-can del"></i>
      </li>`;
    taskListSave += taskListHtml;
  });
  taskList.innerHTML = taskListSave;
};
// Add to Store
const addTaskToStore = (taskArray) => {
  window.localStorage.setItem('tasks', JSON.stringify(taskArray));
};

const getTaskFromStore = () => {
  const data = window.localStorage.getItem('tasks');
  if (data !== null) {
    const tasks = JSON.parse(data);
    addTaskToPage(tasks);
  }
};

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

// Add Task To Array
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

const editTask = (taskId,e) => {
  taskArray.forEach((task) => {
    if (task.id === +taskId) {
      let index = taskArray.indexOf(task)
      task.title = e;
      taskArray[index] = task;
    }
  })
  addTaskToStore(taskArray)
};

export {
  addTaskToArray, addTaskToPage, getTaskFromStore, deleteTaskWith, editTask,
};
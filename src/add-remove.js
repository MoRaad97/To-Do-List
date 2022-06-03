// import { taskArray,  } from "./index.js";
export {addTaskToArray,addTaskToPage,taskArray}

// TaskArray
let taskArray = [];
// Ul list = Tasks List
let taskList = document.querySelector('.tasks-list');
// Add Remove class

// Add Task To Array
    let addTaskToArray = (taskText) =>{
        // task info
        const task = {
            id: Date.now(),
            title: taskText,
            completed: false, 
        }
        // push task to array
        taskArray.push(task);
        
        return taskArray
        }  
        // Create Task in the page 
 let addTaskToPage = (taskArray) => {
    //  let taskLi = document.querySelector('.task')
    //  if (taskLi.completed) {
    //      taskLi.setAttribute(checked)
    //  };
    let taskListSave = taskList.innerHTML;
        taskArray.forEach((task) => {
            let taskListHtml = `<li class="task completed" id="${task.id}">
            <div><input type="checkbox" /><span>${task.title}</span></div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </li>`;
          taskList.innerHTML = taskListSave + taskListHtml  
          });
};

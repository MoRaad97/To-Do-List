import { taskArray } from "./index.js";
export {addTaskToArray,addTaskToPage,taskArray,getTaskFromStore}

// TaskArray

// Ul list = Tasks List
let taskList = document.querySelector('.tasks-list');

// Add Task To Array
    let addTaskToArray = (taskText) =>{
        // task info
        const task = {
            id: taskArray.length + 1,
            title: taskText,
            completed: false, 
        }
        // Push task to array
        taskArray.push(task);
        // Add task to page 
        addTaskToPage(taskArray)
        // Add task to local storage 
        addTaskToStore(taskArray)
        }  


        // Create Task in the page 
 let addTaskToPage = (taskArray) => {
// check if the task completed
    let taskLi = document.querySelectorAll('.task')
    if (taskLi.completed) {
        taskLi.setAttribute(checked)
    };
    // Add task to the page
    let taskListSave = taskList.innerHTML;
        taskArray.forEach((task) => {
            let taskListHtml = `<li class="task completed" id="${task.id}">
            <div><input type="checkbox"/><span>${task.title}</span></div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </li>`;
          taskList.innerHTML = taskListSave + taskListHtml  ;
          });
        
};
    // Add to Store 
let addTaskToStore = (taskArray)=> {
    window.localStorage.setItem('tasks', JSON.stringify(taskArray))
    }

let getTaskFromStore = () => {
   let data = window.localStorage.getItem('tasks')
    if (data) {
        let tasks = JSON.parse(data)
        addTaskToPage(tasks)
    }
}
import { addTaskToPage, addTaskToStore, taskArray } from "./add-remove.js";
// check the task and add to store 
const completeStateChange = (taskArray) => {
    let checkedInputElements = document.getElementsByClassName('check-input');
    for (let i = 0; i < checkedInputElements.length; i += 1) {
        checkedInputElements[i].addEventListener('change', (event) => {
            taskArray[event.target.getAttribute("check-id") - 1].completed = event.target.checked;
            console.log(taskArray);
            addTaskToStore(taskArray);
        })
    };
}

const addCheckedAttFromStore = (tasks) => {
    for (let i = 0; i < tasks.length; i++) {
        let checkedInputElements = document.getElementsByClassName('check-input');
        if (tasks[i].completed) {
            checkedInputElements[i].setAttribute('checked', "");
            //   console.log(checkedInputElements[i])
        } else {
            checkedInputElements[i].removeAttribute('checked');
            //    console.log(checkedInputElements[i])
        }

    }
}

const clearFunction = (taskArray) => {
    // Delete from page
    if (taskArray !== null) {
        let newArray = taskArray.filter((task) => task.completed === false);
        newArray.forEach((e, index) => {
            e.id = index + 1;
        });
        return newArray
    }
}



export { completeStateChange, addCheckedAttFromStore, clearFunction }

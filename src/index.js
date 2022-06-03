import './styles/index.css'
import './styles/all.min.css'
import {addTaskToArray,getTaskFromStore} from "./add-remove.js";

export {taskArray}
let taskArray = [];
if (localStorage.getItem('tasks')){
    taskArray = JSON.parse(localStorage.getItem('tasks'))
}


let input = document.querySelector('.ph')
let submit = document.querySelector('.enter')


// get task from local storage
getTaskFromStore()
input.addEventListener("keypress",(e) => {
  if (e.key === "Enter") {
    submit.click()
  }
  
})

submit.onclick = ()=> {
  if (input.value !== "") {
    addTaskToArray(input.value);
    
     input.value = ""
     
  }}
  
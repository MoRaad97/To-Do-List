import './styles/index.css'
import './styles/all.min.css'
import { addTaskToArray,addTaskToPage,taskArray} from "./add-remove.js";

// export {taskArray,taskList}



let input = document.querySelector('.ph')
let submit = document.querySelector('.enter')



submit.onclick = ()=> {
  if (input.value !== "") {
    addTaskToArray(input.value);
     addTaskToPage(taskArray)
     input.value = ""
     
  }}
  
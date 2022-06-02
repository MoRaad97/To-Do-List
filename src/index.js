import './styles/all.min.css';
import './styles/index.css';

const listInfo = [{
  index: 0,
  description: 'studying',
  completed: true,
},
{
  index: 1,
  description: 'Finish Day 2 project',
  completed: false,
},
];

const listTarget = document.querySelector('.form');

const listMain = '<li class="title"><span>today to do</span><span><i class="fa-solid fa-arrow-rotate-left"></i></span></li><li class="input"><input class="ph" type="text" name="" id="placeholder" placeholder="Add to your list.."> <p class="enter"><i class="fa-solid fa-arrow-left-long"></i></p></li>';

let listTasks = '';

const listClear = '<li class="clear-li"><button class="clear">Clear All Completed</button></li>';

const addList = (e) => {
  e.forEach((el) => {
    listTasks += `<li><div><input type="checkbox"><span>${el.description}</span></div><span><i class="fa-solid fa-ellipsis-vertical"></i></span></li>`;
  });
  listTarget.innerHTML = listMain + listTasks + listClear;
};

addList(listInfo);
import { editTask, addTaskToPage, addTaskToStore } from '../src/add-remove';
import { clearFunction, completeStateChange } from '../src/complete';

describe('edit & complete & clear all Tests', () => {
  // Arranged
  document.body.innerHTML = '<ul class="tasks-list" id="tasks-list"></ul>';
  const taskArray = [{ id: 1, title: 'taskText', completed: false }];
  addTaskToPage(taskArray);
  addTaskToStore(taskArray);

  //    Test one
  test('editing task test', () => {
    // Arranged
    const newValue = 'taskText editing test';
    const inputEle = document.body.querySelector('.edit');
    inputEle.value = newValue;
    const idValue = inputEle.parentElement.parentElement.getAttribute('task-id');
    //   Act
    editTask(idValue, inputEle.value, taskArray);
    const listWithNewValue = document.querySelectorAll('#tasks-list li .edit');
    const storage = JSON.parse(localStorage.getItem('tasks'));
    // ِِAssert
    expect(listWithNewValue[0].value).toBe(newValue);
    expect(storage[0].title).toBe(newValue);
  });

  //    Test Two
  test('check State Update Tasks Test', () => {
    // Arranged
    const taskArray = [{ id: 1, title: 'taskText', completed: false }, { id: 2, title: 'taskText', completed: true }];
    addTaskToPage(taskArray);
    addTaskToStore(taskArray);
    const checkedInputElements = document.getElementsByClassName('check-input');
    //   Act
    checkedInputElements[0].setAttribute('checked', '');
    completeStateChange(taskArray, checkedInputElements[0]);
    const storage = JSON.parse(localStorage.getItem('tasks'));
    // ِِAssert
    expect(storage[0].completed).toBeTruthy();
  });

  //    Test Three
  test('clearAllCompleted Tasks Test', () => {
    // Arranged
    const taskArray = [{ id: 1, title: 'taskText', completed: true }, { id: 2, title: 'taskText', completed: true }, { id: 3, title: 'taskText', completed: false }, { id: 4, title: 'taskText', completed: false }];
    addTaskToStore(taskArray);
    //   Act
    const newArray = clearFunction(taskArray);
    addTaskToPage(newArray);
    addTaskToStore(newArray);
    const list = document.querySelectorAll('#tasks-list li');
    const storage = JSON.parse(localStorage.getItem('tasks'));
    // ِِAssert
    expect(list).toHaveLength(2);
    expect(storage).toHaveLength(2);
  });
});

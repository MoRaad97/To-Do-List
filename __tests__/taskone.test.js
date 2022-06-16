import { addTaskToPage, deleteItem } from '../src/add-remove.js';

describe('Add & Remove One Element Test', () => {
  // Arranged
  document.body.innerHTML = '<ul class="tasks-list" id="tasks-list"></ul>';
  const task = [{ id: 1, title: 'taskText', completed: false }];
  test('Add one new item to the list', () => {
    //   Act
    addTaskToPage(task);
    const list = document.querySelectorAll('#tasks-list li');
    // ِِAssert
    expect(list).toHaveLength(1);
  });
  test('Remove one item from the list elements', () => {
    // Arranged
    const delBtn = document.querySelectorAll('.fa-trash-can');
    //   Act
    deleteItem(delBtn[0]);
    const list = document.querySelectorAll('#tasks-list li');
    // ِِAssert
    expect(list).toHaveLength(0);
  });
});

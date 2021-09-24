import { todoList, render } from './index.js';

const newList = document.querySelector('.new-data');
const newBar = document.querySelector('.add-bar');

function createList(task) {
  return { index: Date.now().toString(), description: task, completed: [] };
}

newList.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = newBar.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newBar.value = null;
  todoList.push(list);
  render();
});

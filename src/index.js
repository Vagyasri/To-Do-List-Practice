// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const container = document.querySelector('.list-container');
const newList = document.querySelector('.new-data');
const newBar = document.querySelector('.add-bar');
const mainContainer = document.querySelector('.tab');
const listsHolder = document.querySelector('.listcont-prop');

const LIST_KEY = 'task.list';
const SELECT_LIST = 'select.list';
const todoList = JSON.parse(localStorage.getItem(LIST_KEY)) || [];
let selectList = localStorage.getItem(SELECT_LIST);

function clear(element) {
  while (element.firstChild) element.removeChild(element.firstChild);
}

function renderLists() {
  todoList.forEach((todo) => {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'name';
    input.value = 'value';
    input.id = 'id';
    input.classList.add('strikethrough');
    const listElement = document.createElement('li');
    listElement.dataset.listId = todo.index;
    div.classList.add('listcont-prop');
    listElement.classList.add('list-prop');
    listElement.innerHTML = `${todo.description}<i class="fas fa-ellipsis-v"></i>`;
    if (todo.index === selectList) {
      listElement.classList.add('active');
    }
    div.appendChild(label);
    div.appendChild(listElement);
    label.appendChild(input);
    container.appendChild(div);
  });
}

function render() {
  clear(container);
  renderLists();
}

function save() {
  localStorage.setItem(LIST_KEY, JSON.stringify(todoList));
  localStorage.setItem(SELECT_LIST, selectList);
}

function saveAndRender() {
  save();
  render();
}

container.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectList = e.target.dataset.listId;
    saveAndRender();
  }
});

render();

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
  saveAndRender();
});
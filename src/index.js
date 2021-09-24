// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const container = document.querySelector('.list-container');

const todoList = [];

function clear(element) {
  while (element.firstChild) element.removeChild(element.firstChild);
}

function render() {
  clear(container);
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
    div.appendChild(label);
    div.appendChild(listElement);
    label.appendChild(input);
    container.appendChild(div);
  });
}

render();
import _ from 'lodash';
import './style.css';

const container = document.querySelector('[data]')

const todoList = [{
    id: 1,
    name: 'Lucky'
}];

function render(){
    clear(container);
    todoList.forEach(todo => {
        const listElement = document.createElement('li');
        listElement.classList.add('list-prop');
        listElement.innerText = todo.name;
        container.appendChild(listElement);
    });
}

function clear(element){
    while(element.firstChild)
        element.removeChild(element.firstChild)
}

render();
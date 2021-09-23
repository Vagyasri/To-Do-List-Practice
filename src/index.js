import _ from 'lodash';
import './style.css';

const container = document.querySelector('[data]')

const todoList = [{
    index: 1,
    task: 'Wash the Dishes',
    status: true
},
{
    index: 2,
    task: 'Complete to-do list Project',
    status: true
}];

function render(){
    clear(container);
    todoList.forEach(todo => {
        const listElement = document.createElement('li');
        listElement.classList.add('list-prop');
        listElement.innerText = todo.task;
        container.appendChild(listElement);
    });
}

function clear(element){
    while(element.firstChild)
        element.removeChild(element.firstChild)
}

render();
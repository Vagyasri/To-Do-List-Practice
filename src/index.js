import _ from 'lodash';
import './style.css';

const container = document.querySelector('[data]')

const todoList = [{
    index: 1,
    description: 'Wash the Dishes',
    completed: true
},
{
    index: 2,
    description: 'Complete to-do list Project',
    completed: true
}];

function render(){
    clear(container);
    todoList.forEach(todo => {
        const listElement = document.createElement('li');
        listElement.classList.add('list-prop');
        listElement.innerText = todo.description;
        container.appendChild(listElement);
    });
}

function clear(element){
    while(element.firstChild)
        element.removeChild(element.firstChild)
}

render();
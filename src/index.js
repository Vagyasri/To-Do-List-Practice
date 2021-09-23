import _ from 'lodash';
import './style.css';

// function component() {
//     const element = document.createElement('div');
  
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');
//     return element;
//   }
  
//   document.body.appendChild(component());

const myArr = [
  {
    description: "Wash the Dishes",
    completed: True,
    index: 1
  },
  {
    description: "Complete to-do list Project",
    completed: False,
    index: 2
  }
];

const todo = list() => {
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  li.innerHtml =  ({description, completed, index}) = myArr;
  
};
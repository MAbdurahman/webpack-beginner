import _ from 'lodash';
import './scss/main.scss';

const component = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['hello webpack ', ' from babel']);
  
  return element;
};

document.body.appendChild(component());

console.log('from webpack-5 for beginners');
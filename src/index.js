// import your function
import myName from './myName';

function component() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = myName('Cody');
  return element;
}

document.getElementById('content').appendChild(component());
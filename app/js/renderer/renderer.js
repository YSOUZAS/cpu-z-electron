const si = require('systeminformation');
const cpu = require('../comuns/cpu');


const update = () => {
  (cpu().data(si));
};

const inputName = document.querySelector('#input-name');

console.log(inputName)
const second = 1000;
setInterval(update, second);

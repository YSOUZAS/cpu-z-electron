const si = require('systeminformation');
const cpu = require('../comuns/cpu');
const system = require('../comuns/system');
const bios = require('../comuns/bios');
const bboard = require('../comuns/bboard');


const update = () => {
  (cpu().data(si));
  (system().data(si));
  (bios().data(si));
  (bboard().data(si));
};

const second = 1000;
setInterval(update, second);

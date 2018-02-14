const input = require('./input');

const cpu = () => ({
  data: (si) => {
    si.cpu()
      .then((data) => {
        const keys = Object.keys(data);
        keys.map(key => input.input('cpu', key, data[key]));
      })
      .catch(error => console.error(error));
  },
});

module.exports = cpu;

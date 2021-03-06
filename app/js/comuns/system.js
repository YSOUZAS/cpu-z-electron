const input = require('./input');

const system = () => ({
  data: (si) => {
    si.system()
      .then((data) => {
        const keys = Object.keys(data);
        keys.map(key => input.input('system', key, data[key]));
      })
      .catch(error => console.error(error));
  },
});

module.exports = system;

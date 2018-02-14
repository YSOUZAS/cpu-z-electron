const input = require('./input');

const bios = () => ({
  data: (si) => {
    si.bios()
      .then((data) => {
        const keys = Object.keys(data);
        keys.map(key => input.input('bios', key, data[key]));
      })
      .catch(error => console.error(error));
  },
});

module.exports = bios;

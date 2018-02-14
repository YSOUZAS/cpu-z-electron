const input = require('./input');

const bboard = () => ({
  data: (si) => {
    si.baseboard()
      .then((data) => {
        const keys = Object.keys(data);
        keys.map(key => input.input('bboard', key, data[key]));
      })
      .catch(error => console.error(error));
  },
});

module.exports = bboard;


module.exports = {
  input(tag, name, data) {
    if (name === 'cache') {
      const keys = Object.keys(data);
      keys.map(key => this.input(tag, key, data[key]));
    } else {
      const input = document.querySelector(`#input-${tag}-${name}`);
      if (data) input.value = data;
      else input.value = 'N/A';
    }
  },
};

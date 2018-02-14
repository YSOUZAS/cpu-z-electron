

module.exports = {
  input(tag, data) {
    console.log(tag);

    if (tag === 'cache') {
      const keys = Object.keys(data);
      keys.map((key) => {
        this.input(key, data[key]);
      });
    } else {
      const input = document.querySelector(`#input-${tag}`);
      if (data) input.value = data;
      else input.value = 'N/A';
    }
  },
};

const system = (si) => {
  si.system()
    .then((data) => {
      console.log(data);
    })
    .catch(error => console.error(error));
};

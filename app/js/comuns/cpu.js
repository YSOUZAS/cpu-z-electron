

const cpu = () => ({
  data: (si) => {
    si.cpu()
      .then((data) => {
        const inputName = document.querySelector('#input-name');
        const inputManufacturer = document.querySelector('#input-manufacturer');
        const inputSpeed = document.querySelector('#input-speed');
        const inputSpeedMin = document.querySelector('#input-speedmin');
        const inputSpeedMax = document.querySelector('#input-speedmax');
        const inputModel = document.querySelector('#input-model');
        const inputStepping = document.querySelector('#input-stepping');
        const inputRevision = document.querySelector('#input-revision');
        const inputVendor = document.querySelector('#input-vendor');
        const inputCores = document.querySelector('#input-cores');
        const inputFamily = document.querySelector('#input-family');

        inputName.value = data.brand;
        inputManufacturer.value = data.manufacturer;
        inputSpeed.value = data.speed;
        inputSpeedMin.value = data.speedmax;
        inputSpeedMax.value = data.speedmin;
        inputModel.value = data.model;
        inputStepping.value = data.stepping;
        inputRevision.value = data.revision;
        inputVendor.value = data.vendor;
        inputCores.value = data.cores;
        inputFamily.value = data.family;
      })
      .catch(error => console.error(error));
  },
});

module.exports = cpu;

const {
  app, BrowserWindow,
} = require('electron');

let mainWindow = null;


app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    nodeIntegration: false,
    contextIsolation: true,
    fullscreenable: false,
    resizable: false,
    webPreferences: {
      backgroundThrottling: false,
      devTools: false,
    },
  });
});

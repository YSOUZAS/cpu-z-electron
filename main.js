const {
  app, BrowserWindow,
} = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    nodeIntegration: false,
    contextIsolation: true,
    fullscreenable: true,
    resizable: false,
    frame: true,
    webPreferences: {
      backgroundThrottling: true,
      devTools: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

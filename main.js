const {
  app, BrowserWindow, Tray,
} = require('electron');

let mainWindow = null;
let tray = null;


const getWindowPosition = () => {
  const windowBounds = mainWindow.getBounds();
  const trayBounds = tray.getBounds();
  const x = Math.round((trayBounds.x + (trayBounds.width / 2)) - (windowBounds.width / 2));
  const y = Math.round(trayBounds.y + trayBounds.height + 4);

  return { x, y };
};

const showWindow = () => {
  const position = getWindowPosition();
  if (process.platform === 'darwin') mainWindow.setPosition(position.x, position.y, false);
  mainWindow.show();
  mainWindow.focus();
};

const toggleWindow = () => {
  if (mainWindow.isVisible()) {
    mainWindow.hide();
  } else {
    showWindow();
  }
};

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 650,
    height: 700,
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
  tray = new Tray(`${__dirname}/imgs/icon-16x16.png`);

  tray.on('right-click', toggleWindow);
  tray.on('double-click', toggleWindow);
  tray.on('click', () => {
    toggleWindow();
  });
  // if (process.platform === 'darwin') app.dock.hide();

  mainWindow.on('blur', () => {
    mainWindow.hide();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});

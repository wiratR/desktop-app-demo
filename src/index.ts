import { BrowserWindow, app } from "electron";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // this line is very important as it allows us to use `require` syntax in our html file.
    },
  });
  mainWindow.loadFile(`index.html`);
}

app.whenReady().then(createWindow);

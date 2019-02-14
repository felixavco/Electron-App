const { app, BrowserWindow } = require('electron')
const path = require('path');
const url = require('url');

//Reload during dev
require('electron-reload')(__dirname, {electron: path.join(__dirname, 'node_modules', '.bin', 'electron')});

const createWindow = () => {
  let win = new BrowserWindow({
    minWidth: 800, 
    minHeight:600
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'view','index.html'),
    protocol: 'file',
    slashes: true
  }));
}

app.on('ready', createWindow);
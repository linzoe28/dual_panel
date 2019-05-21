const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const applicationMenu=require('./menu.js');
let win
function createWindow() {
    win = new BrowserWindow({ windth: 800, height: 600 })
    win.loadFile('index.html')
    win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
    Menu.setApplicationMenu(applicationMenu);
    globalShortcut.register("F11",function(){
        win.setFullScreen(!win.isFullScreen());
    })
}

app.on('ready', createWindow)
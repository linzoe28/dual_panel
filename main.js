const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const applicationMenu=require('./menu.js');
const fs =require('fs');
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

function readFile(path){
    return fs.readFileSync(path).toString();
}

function writeFile(path,content){
    fs.writeFileSync(path,content);
}

app.on('ready', createWindow);
module.exports={readFile,writeFile};
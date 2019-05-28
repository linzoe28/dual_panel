const Menu = require('electron').Menu;
const dialog = require('electron').dialog;
const fs = require('fs');
let menuitem = [
    {
        label: "File",
        submenu: [
            {
                label: "New File",
                click: function (item, win) {
                    win.webContents.send("new-file");
                }
            },
            {
                label: "Open File",
                click: function (item, win) {
                    dialog.showOpenDialog(win, {
                        filters: [
                            { name: "Html Files", extensions: ["html", "htm"] }
                        ]
                    }, function (files) {
                        let str = fs.readFileSync(files[0]).toString();
                        win.webContents.send("open-file", str);
                        console.log(str);
                    });
                }
            },
            {
                label: "Save File",
                click: function (item, win) {
                    dialog.showSaveDialog(win, {
                        filters: [
                            { name: "html files", extensions: ["html", "htm"] }
                        ]
                    }, function (file) {
                        win.webContents.send("save-file", file);
                    });
                }
            },
            { type: "separator" },
            { role: "quit" }
        ]
    }, {
        label: "tool",
        submenu: [
            {
                label: "window",
                submenu: [
                    { role: "minimize" },
                    { label: "togglefullscreen" }
                ]
            },
            {
                label: "say hello",
                click: function () {
                    console.log("hello");
                }
            }
        ]
    }
];
module.exports = Menu.buildFromTemplate(menuitem);
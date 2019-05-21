const Menu=require('electron').Menu;
let menuitem = [
    {
        label: "File",
        submenu: [
            { label: "New File" },
            { label: "Open File" },
            { label: "Close File" },
            { type :"separator"},
            { role :"quit"}
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
                click:function(){
                    console.log("hello");
                }
            }
        ]
    }
];
module.exports = Menu.buildFromTemplate(menuitem);
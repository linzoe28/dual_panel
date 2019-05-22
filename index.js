window.$ = require('jquery');
const remote = require("electron").remote;
const { readFile, writeFile } = remote.require('./main.js');
const ipc = require('electron').ipcRenderer;

$(document).ready(function () {
    var editor = CKEDITOR.replace('source', {});
    ipc.on("new-file", function (ev, mg) {
        editor.setData("");
    });

    /*$("#source").keyup(function(){
        $("#result").html( $("#source").val());
    });*/

    ipc.on("open-file",function(ev, mg){
        editor.setData(mg);
    });

    editor.on('change', function (eve) {
        console.log(eve.editor.getData());
        $("#result").html(eve.editor.getData());
    });
});
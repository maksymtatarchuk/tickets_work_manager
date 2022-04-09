const path = require('path');
const url = require('url');
const express = require('express');
const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1500,
        height: 720,
        icon: __dirname + '/img/icon.png',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

        win.loadFile(path.join(__dirname, 'index.html'));

    win.webContents.openDevTools();

    win.on('close', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
})
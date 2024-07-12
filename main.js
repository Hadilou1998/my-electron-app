// Importation de modules ElectronJS
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Création de la fenêtre principale
const createWindow = () => {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    });

    // Chargement de la page d'accueil
    mainWindow.loadFile('index.html');

    app.whenReady(() => {
        createWindow();
    });

    // Quitte l'application lorsque toutes les fenêtres sont fermées
    app.on('window-all-closed', () => {
        if (process.platform!== 'darwin') {
            app.quit();
        }
    });

    // Écouteur d'événements pour le redémarrage de l'application
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
}
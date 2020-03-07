const { app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path')
const { NODE_ENV } = process.env
const dev = NODE_ENV === 'development'



if (dev) {
	require('electron-reload')(path.join(__dirname, '..', 'public'), {
		electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron')
	})
}

function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		icon: path.join(__dirname, '..', 'public', 'favicon.png'),
		webPreferences: {
			nodeIntegration: true
		}
	})

	// and load the index.html of the app.
	win.loadFile(path.join(__dirname, '../..', 'public', 'index.html'))

	if (dev) {
		win.webContents.openDevTools()
	}
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

let tray = null
app.on('ready', () => {
	const iconPath = path.join(__dirname, 'favicon.png');
	console.log(iconPath)
	tray = new Tray(iconPath)
	const contextMenu = Menu.buildFromTemplate([
		{ label: 'Item1', type: 'radio' },
		{ label: 'Item2', type: 'radio' },
		{ label: 'Item3', type: 'radio', checked: true },
		{ label: 'Item4', type: 'radio' }
	])
	tray.setToolTip('This is my application.')
	tray.setContextMenu(contextMenu)
})

const { app, BrowserWindow, Menu } = require('electron')

function createWindow () {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
	title: "",
	icon: null,
    width: 1280,
    height: 800,
	skipTaskbar: true,
    toolbar: false,
	minimizable: false,
	maximizable: false,
	resizable: false,
    webPreferences: {
      nodeIntegration: false
    }
  })
  
  const menu = Menu.buildFromTemplate([
    { role: 'appMenu' }
  ])
  
  mainWindow.setMenu(menu)
  mainWindow.setMenuBarVisibility(false)

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function js(x, y){
	x.webContents.executeJavaScript(y, function (result) {
	 return result;
  })
}

app.on('ready', createWindow)
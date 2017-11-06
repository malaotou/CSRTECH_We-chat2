const electron = require('electron')
//const {app, Menu, Tray,electron} = require('electron')

const app = electron.app
const Tray = electron.Tray
const Menu = electron.Menu
const ipc = electron.ipcMain
let tray = null
//const app=require('app')
const BrowserWindow = electron.BrowserWindow
let mainWindow


let appIcon = null

ipc.on('put-in-tray', function (event) {
  //const iconName = process.platform === 'win32' ? 'head1.jpg' : 'head1.jpg'
  const iconPath = path.join(__dirname, iconName)
  appIcon = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([{
    label: '移除',
    click: function () {
      event.sender.send('tray-removed')
    }
  }])
  appIcon.setToolTip('在托盘中的 Electron 示例.')
  appIcon.setContextMenu(contextMenu)
})

function createWindow () {

  mainWindow = new BrowserWindow({width: 800, height: 600,frame:true})

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // tray = new Tray('/assets/images/head1.jpg')
  // const contextMenu = Menu.buildFromTemplate([
  //   {label: 'Item1', type: 'radio'},
  //   {label: 'Item2', type: 'radio'},
  //   {label: 'Item3', type: 'radio', checked: true},
  //   {label: 'Item4', type: 'radio'}
  // ])
  // tray.setToolTip('This is my application.')
  // tray.setContextMenu(contextMenu)
}
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
/*

1. 檢測 server 本地及 NAS 上的 package.json version 是否相同
  1-2. 相同 > 2，不同 > 1-3
  1-3. 將 package.json 拉下來並執行 yarn 更新依賴 (log 發現到新的 server 版本，正在進行更新)
  1-4. 刪除本地 lib, !lib/main.js 以外的檔案後將 NAS 檔案更新至本地
       (更新後 log server 代碼已同步至最新版本)

2. 檢測 chrome-extension 本地的 manifest version 是否與 NAS 上相同
   2-2. 相同 > 3, 不同 > 2-3
   2-3. 將 chrome-extension 目錄移除並將 NAS 的 chrome-extension 移至本地 (log 發現到新的 chrome-extension 版本，正在進行更新)
        (完成後 log chrome-extension 已更新至最新版，麻煩重啟瀏覽器)

3. 運行 server，若有更新任一項將在運行的 confts 後顯示更新的版號及內容

*/
const path = require('path')
const fs = require('fs-extra')
const fg = require('fast-glob')
const { exec, execSync } = require('child_process')
const cliSpinners = require('cli-spinners');
const ora = require('ora');

const NAS_SERVER_FOLDER_PATH = 'C:\\Users\\COSH\\Downloads\\nas\\mhpic'
const NAS_CHROME_EXTENSION_FOLDER_PATH = `${NAS_SERVER_FOLDER_PATH}\\chrome-extension`
const NAS_VERSION_DATA_PATH = path.resolve(`${NAS_SERVER_FOLDER_PATH}`, '../version_data.json')
const LOCAL_SERVER_FOLDER_PATH = process.cwd()
const LOCAL_CHROME_EXTENSION_FOLDER_PATH = path.resolve(process.cwd(), './chrome-extension')
const serverVersionFileName = 'package.json'
const chromeExtensionVersionFileName = 'manifest.json'

;(async () => {
  const [
    { version: localServerVersion },
    { version: localChromeExtensionVersion },
  ] = [
    require(`../${serverVersionFileName}`),
    require(`../chrome-extension/${chromeExtensionVersionFileName}`)
  ]

  const [
    { version: nasServerVersion },
    { version: nasChromeExtensionVersion },
  ] =
    await Promise.all([
      fs.readJson(`${NAS_SERVER_FOLDER_PATH}/${serverVersionFileName}`),
      fs.readJson(`${NAS_CHROME_EXTENSION_FOLDER_PATH}/${chromeExtensionVersionFileName}`),
    ])

  let serverChangeVersion = undefined
  let chromeExtensionChangeVersion = undefined

  if (localServerVersion !== nasServerVersion) {
    serverChangeVersion = nasServerVersion

    console.log('檢測到新版 server，開始更新!!')

    const spinner = ora({
      spinner: cliSpinners.shark,
      text: 'server 更新中...',
      color: 'magenta'
    }).start();

    try {
      await fs.copy(
        path.resolve(`${NAS_SERVER_FOLDER_PATH}/package.json`),
        path.resolve(`${LOCAL_SERVER_FOLDER_PATH}/package.json`),
      )

      execSync('yarn')

      // TODO fast glob
    } catch (error) {
      console.error(error)
      console.error('server 自動更新失敗')
    }

    spinner.clear()
    console.log('server 已更新')
    console.log('=========')
  }

  if (localChromeExtensionVersion !== nasChromeExtensionVersion) {
    chromeExtensionChangeVersion = nasChromeExtensionVersion

    console.log('檢測到新版 chrome extension，開始更新!!')

    try {

    } catch (error) {
      console.error(error)
      console.error('chrome extension 自動更新失敗')
    }

    console.log('=========')
  }

  if (
    serverChangeVersion != null
    || chromeExtensionChangeVersion != null
  ) {
    try {
      const versionData = await fs.readJson(`${NAS_VERSION_DATA_PATH}`)

      if (serverChangeVersion != null) {
        console.log('TODO')
      }

      if (chromeExtensionChangeVersion != null) {
        console.log('TODO')
      }
    } catch (error) {
      console.error(error)
      console.error('讀取更新資訊失敗')
    }
  }

  // TODO cfonts

  require('./apps/download-server')
  require('./apps/file-watch')
})()

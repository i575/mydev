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


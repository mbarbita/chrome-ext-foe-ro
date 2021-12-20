chrome.runtime.onInstalled.addListener(() => {

  
  chrome.storage.sync.get(['sameTab'], function (result) {
    console.log('Value currently is ' + result.sameTab);
    
    if (result.sameTab == null) {
      chrome.storage.sync.set({ sameTab: false }, function () {
        console.log('Value is set to ' + false);
      });
    }
  });
});

chrome.runtime.onInstalled.addListener(() => {

  chrome.storage.sync.get(['sameTab1'], function (result) {
    console.log('sameTab1 (background) currently is ' + result.sameTab1);
    
    if (result.sameTab1 == null) {
      chrome.storage.sync.set({ sameTab1: false }, function () {
        console.log('sameTab1 (background) is set to ' + false);
      });
    }
  });

  chrome.storage.sync.get(['sameTab2'], function (result) {
    console.log('sameTab2 (background) currently is ' + result.sameTab2);
    
    if (result.sameTab2 == null) {
      chrome.storage.sync.set({ sameTab2: false }, function () {
        console.log('sameTab2 (background) is set to ' + false);
      });
    }
  });
});

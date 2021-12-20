let clearBtn = document.getElementById("clearBtn");
let r1 = document.getElementById("sametab");
let r2 = document.getElementById("newtab");

r1.addEventListener("click", handleRadioClick);
clearBtn.addEventListener("click", handleClearButtonClick);

chrome.storage.sync.get(['sameTab'], function (result) {
  console.log(`Value (options) currently is ${result.sameTab}`);
  
  if (result.sameTab == null) {
    chrome.storage.sync.set({ sameTab: false }, function () {
      console.log(`Value (options) is set to ${false}`);
    });
  }

  if (result.sameTab == true) {
    r1.checked = true;
  } else { 
    r2.checked = true;
  }
});

function handleRadioClick(event) {
  // Mark the radio as selected
  event.target.selected = true;
  chrome.storage.sync.set({ sameTab: true }, function () {
    console.log(`Value (options) is set to ${true}`);
  });
  console.log("Yeeeee!");
}

function handleClearButtonClick(event) {
  chrome.storage.sync.clear();
  console.log("Cleared!");
}
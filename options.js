let clearBtn = document.getElementById("clearBtn");
let r1_1 = document.getElementById("sametab1");
let r1_2 = document.getElementById("newtab1");

let r2_1 = document.getElementById("sametab2");
let r2_2 = document.getElementById("newtab2");

r1_1.addEventListener("click", handleRadioClick1);
r2_1.addEventListener("click", handleRadioClick2);

clearBtn.addEventListener("click", handleClearButtonClick);

chrome.storage.sync.get(['sameTab1'], function (result) {
  console.log(`sameTab1 (options) is ${result.sameTab1}`);
  
  if (result.sameTab1 == null) {
    chrome.storage.sync.set({ sameTab1: false }, function () {
      console.log(`sameTab1  (options) is set to ${false}`);
    });
  }

  if (result.sameTab1 == true) {
    r1_1.checked = true;
  } else { 
    r1_2.checked = true;
  }
});

chrome.storage.sync.get(['sameTab2'], function (result) {
  console.log(`sameTab2 (options) is ${result.sameTab2}`);
  
  if (result.sameTab2 == null) {
    chrome.storage.sync.set({ sameTab2: false }, function () {
      console.log(`sameTab2  (options) is set to ${false}`);
    });
  }

  if (result.sameTab2 == true) {
    r2_1.checked = true;
  } else { 
    r2_2.checked = true;
  }
});

function handleRadioClick1(event) {
  // Mark the radio as selected
  event.target.selected = true;
  chrome.storage.sync.set({ sameTab1: true }, function () {
    console.log(`sameTab1  (options) is set to ${true}`);
  });
  console.log("Yeeeee1!");
}

function handleRadioClick2(event) {
  // Mark the radio as selected
  event.target.selected = true;
  chrome.storage.sync.set({ sameTab2: true }, function () {
    console.log(`sameTab2  (options) is set to ${true}`);
  });
  console.log("Yeeeee2!");
}

function handleClearButtonClick(event) {
  chrome.storage.sync.clear();
  console.log("Cleared!");
}
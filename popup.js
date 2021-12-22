let page1 = document.getElementById("buttonDiv1");
let page2 = document.getElementById("buttonDiv2");
let selectedClassName = "current";
let mode1 = "";
let mode2 = "";

chrome.storage.sync.get(['sameTab1'], function (result) {
  console.log(`sameTab1 (popup) is ${result.sameTab1}`);
  mode1 = result.sameTab1;
  console.log(`mode1 is (popup):${mode1}`);
});

chrome.storage.sync.get(['sameTab2'], function (result) {
  console.log(`sameTab2 (popup) is ${result.sameTab2}`);
  mode2 = result.sameTab2;
  console.log(`mode2 is (popup):${mode2}`);
});


// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick1(event) {
  
  // Remove style from button
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
    );
    if (current && current !== event.target) {
      current.classList.remove(selectedClassName);
    }
    
    // Mark the button as selected
    let color = event.target.dataset.color;
    event.target.classList.add(selectedClassName);
    
    let url1 = "https://ro" + event.target.innerHTML + ".forgeofempires.com/game/index?";
    
    if (mode1 == true) {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
        chrome.tabs.update(tab.id, { url: url1 });
      });
    } else {
      chrome.tabs.create({ url: url1 });
    }
    
  }
  
  function handleButtonClick2(event) {
    
    // Remove style from button
    let current = event.target.parentElement.querySelector(
      `.${selectedClassName}`
      );
      if (current && current !== event.target) {
        current.classList.remove(selectedClassName);
      }
      
      // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  
  let url2 = "https://en" + event.target.innerHTML + ".forgeofempires.com/game/index?";
  
  if (mode2 == true) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
      chrome.tabs.update(tab.id, { url: url2 });
    });
  } else {
    chrome.tabs.create({ url: url2 });
  }
}

for (let i = 1; i < 6; i++) {
  let button = document.createElement("button");
  button.innerHTML = i;
  button.addEventListener("click", handleButtonClick1);
  page1.appendChild(button);
}

for (let i = 1; i < 19; i++) {
  let button = document.createElement("button");
  button.innerHTML = i;
  button.addEventListener("click", handleButtonClick2);
  page2.appendChild(button);
}
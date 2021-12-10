let page = document.getElementById("buttonDiv");
let selectedClassName = "current";

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {

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

  let url = "https://ro"+ event.target.innerHTML +".forgeofempires.com/game/index?";
  console.log(url);
  chrome.tabs.create({url: url});
  // chrome.currentTab.close();
}

for (let i = 1; i < 6; i++) {
  let button = document.createElement("button");
  button.innerHTML = i;
  button.addEventListener("click", handleButtonClick);
  page.appendChild(button);
}
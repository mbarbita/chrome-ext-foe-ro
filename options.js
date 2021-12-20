let r1 = document.getElementById("sametab");
r1.addEventListener("click", handleRadioClick);

function handleRadioClick(event) {
  // Mark the radio as selected
  event.target.selected = true;
  console.log("Yeeeee!");

}
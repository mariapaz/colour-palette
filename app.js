// All possible hex values
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Generate a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// Generate a single hex colour value
function randomHexColour() {
  let hexColourArr = [];
  let hexColour = "#";
  for (let i = 0; i < 6; i++) {
    hexColourArr.push(hexValues[getRandomInt(16)]);
  }
  return (hexColour += hexColourArr.join(""));
}
//let isLocked = false;
// Add the colours function
function addColours() {
  const c = document.querySelectorAll("[id^=c-]");
  const p = document.querySelectorAll("[id^=p-]");
  const hexColours = [];
  for (let i = 0; i < c.length; i++) {
    // todo: if locked the current colour will need to be saved in the array
    hexColours.push(randomHexColour());
    if (!c[i].getElementsByClassName("locked")[0]) {
      c[i].style.backgroundColor = hexColours[i];
      // why this won't work?? const l = c[i].getElementsByTagName("label");
      const l = c[i].querySelectorAll("[id^=l-]");
      l[0].textContent = hexColours[i].slice(1);
      p[i].setAttribute("value", hexColours[i]);
      // Bug? in Chrome, need to set the value too in order to have the color (not just att) changed
      p[i].value = hexColours[i];
      // Moved the Event Listener outside the function
      // p[i].addEventListener(
      //   "change",
      //   (e) => {
      //     c[i].style.backgroundColor = e.target.value;
      //     p[i].setAttribute("value", e.target.value);
      //   },
      //   false
      // );
    }
  }
}

// Colour input change
[...document.querySelectorAll("[id^=p-]")].forEach((x) =>
  x.addEventListener("change", function (e) {
    this.setAttribute("value", e.target.value);
    let myNum = this.id.slice(-1);
    myNum = "c-" + myNum;
    document.getElementById(myNum).style.backgroundColor = e.target.value;
    // Good practice to return false when nothing is returned?
    return false;
  })
);

// Padlock toggle
[...document.getElementsByClassName("padlock")].forEach((x) =>
  x.addEventListener("click", function () {
    this.getElementsByClassName("bi-lock-fill")[0].classList.toggle("d-none");
    this.getElementsByClassName("bi-unlock-fill")[0].classList.toggle("d-none");
    this.classList.toggle("locked");
    return false;
  })
);
// On load and Spacebar Event listeners
window.addEventListener("DOMContentLoaded", () => {
  addColours();
});

document.addEventListener(
  "keyup",
  (event) => {
    if (event.code === "Space") {
      addColours();
    }
    event.preventDefault();
  },
  false
);

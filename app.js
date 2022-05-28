// randomly generate hex colour
// what's the range of the random hex number? 0-9  A, B, C, D, E, and F.
// randomly genrate this 6 times and add bg color and hex colour number
// button to generate colours that are not locked

// all possible hex values
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// generate a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// generate a single hex colour value
function randomHexColour() {
  let hexColourArr = [];
  let hexColour = "#";
  for (let i = 0; i < 6; i++) {
    hexColourArr.push(hexValues[getRandomInt(16)]);
  }
  return (hexColour += hexColourArr.join(""));
}

function addColours() {
  const c = document.querySelectorAll("[id^=c-]");
  const p = document.querySelectorAll("[id^=p-]");
  const hexColours = [];
  for (let i = 0; i < c.length; i++) {
    // change to have an array with six different colours
    hexColours.push(randomHexColour());
    c[i].style.backgroundColor = hexColours[i];
    // why this won't work?? const l = c[i].getElementsByTagName("label");
    // const l = c[i].querySelectorAll("[id^=l-]");
    const l = c[i].querySelectorAll("[id^=l-]");
    l[0].textContent = hexColours[i].slice(1);

    console.log(l);
    // if (l) {
    //   l.innerHTML = "hola";
    // }

    p[i].setAttribute("value", hexColours[i]);
    p[i].addEventListener(
      "change",
      (e) => {
        c[i].style.backgroundColor = e.target.value;
        p[i].setAttribute("value", e.target.value);
      },
      false
    );
  }
}
window.addEventListener("DOMContentLoaded", () => {
  addColours();
});

document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    addColours();
  }
});

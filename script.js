let counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#lowerCountBtn");
let count = 0;

addCount.addEventListener("click", incrementCounter);
lowerCount.addEventListener("click", decrementCounter);

function incrementCounter() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > "0") {
    counter.style.color = "green";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "purple";
  }
  counter.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 500,
    fill: "forwards"
  });
}
function decrementCounter() {
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < "0") {
    counter.style.color = "red";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
  counter.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 100,
    fill: "forwards"
  });
}

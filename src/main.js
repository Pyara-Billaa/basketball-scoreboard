let homeCount = 0;
let guestCount = 0;

const homeDisplay = document.querySelector("#home-display");
const guestDisplay = document.querySelector("#guest-display");

const homeBtns = document.querySelectorAll(".home-btn");
const guestBtns = document.querySelectorAll(".guest-btn");
const newGameBtn = document.querySelector("#new-game");

homeBtns.forEach((button) => {
  button.addEventListener("click", () => {
    homeCount += Number(button.dataset.points);
    homeDisplay.textContent = homeCount;
  });
});

guestBtns.forEach((button) => {
  button.addEventListener("click", () => {
    guestCount += Number(button.dataset.points);
    guestDisplay.textContent = guestCount;
  });
});

newGameBtn.addEventListener("click", ()=>{
    homeCount = 0;
    guestCount = 0;
    homeDisplay.textContent = homeCount;
    guestDisplay.textContent = guestCount;
})
const bars = document.querySelector(".bars-div");
const nav = document.querySelector(".nav_menu");
const kataloq = document.querySelector(".kataloq");
function show(clickedIcon) {
  let sira = clickedIcon.querySelector(".children");
  sira.classList.toggle("open_up");
  clickedIcon.classList.toggle("rotate");
}
let flag = false;
function handleDogru() {
  flag = !flag;
  bars.classList.toggle("exit");
  nav.classList.toggle("open_up_nav_menu");
  kataloq.innerHTML = flag ? "Menu" : "Kataloq";
}
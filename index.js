let openMenu = document.getElementById('open-menu')
let closeMenu = document.getElementById('close-menu')
let sideBar =  document.getElementById('side-menu')
const collapsibles = document.querySelectorAll(".collapsible");

function openSlideMenu() {
    sideBar.style.width = '256px'
}
openMenu.addEventListener('click', openSlideMenu)

function closeSlideMenu() {
  sideBar.style.width = '0'
}

closeMenu.addEventListener('click', closeSlideMenu)

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
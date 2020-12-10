/*eslint-env browser*/

var deHamburger = document.querySelector(".toggle");

deHamburger.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("item.active");
}
const hamburger_btn = document.querySelector("#burger-btn");
const navbar = document.querySelector("#navbar");



hamburger_btn.addEventListener("click", _ => {
  toggleClass(navbar, "show-navbar");
})

function toggleClass(element, style) {
  element.classList.toggle(style);
}

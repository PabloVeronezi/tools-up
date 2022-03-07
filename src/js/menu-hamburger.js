const menu = document.querySelector(".navbar-menu");
const btn_burger = document.querySelector(".navbar-hamburger");
const closeMenu_btn = document.querySelector(".close-menu");
const login_area = document.querySelector(".navbar-login");

btn_burger.addEventListener("click", _ => {
  menu.classList.toggle("active");
  login_area.classList.toggle("active-login");
});

closeMenu_btn.addEventListener("click", _ => {
  menu.classList.toggle("active");
  login_area.classList.toggle("active-login");
})
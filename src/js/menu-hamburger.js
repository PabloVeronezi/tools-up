const menu = document.querySelector(".navbar-menu");
const btn_burger = document.querySelector(".navbar-hamburger");
const closeMenu_btn = document.querySelector(".close-menu");
const btn_cart = document.querySelector(".navbar-cart");
const login_area = document.querySelector(".navbar-login");

btn_burger.addEventListener("click", _ => {
  menu.classList.toggle("active");
  login_area.classList.toggle("active-login");
  btn_cart.classList.toggle("active-cart");
});

closeMenu_btn.addEventListener("click", _ => {
  menu.classList.toggle("active");
  login_area.classList.toggle("active-login");
  btn_cart.classList.toggle("active-cart");
})
const hamburger_btn = document.querySelector("#burger-btn");
const navbar = document.querySelector("#navbar");

hamburger_btn.addEventListener("click", _ => {
  navbar.classList.toggle("show-navbar")
})


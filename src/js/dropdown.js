const dropdown_btn = document.querySelector("#dropdown-btn");
const dropdown_content = document.querySelector("#dropdown-content");

dropdown_btn.addEventListener("click", _ => {
  dropdown_content.classList.toggle("show-dropdown");
  dropdown_btn.classList.toggle("dropdown-click");
})

window.addEventListener("click", event => {
  if (event.target !== dropdown_btn && dropdown_content.classList.contains("show-dropdown")) {
    dropdown_content.classList.remove("show-dropdown");
    dropdown_btn.classList.remove("dropdown-click");
  }
})
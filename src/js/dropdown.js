const dropdown_btn = document.querySelector("#dropdown-btn");
const dropdown_content = document.querySelector("#dropdown-content");

dropdown_btn.addEventListener("click", _ => {
  dropdown_content.classList.toggle("show-dropdown");
})
const menu = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const sidebar = document.getElementById("topbar");

menu.addEventListener("click", () => {
  sidebar.style.display = "flex";
});
closeMenu.addEventListener("click", () => {
  sidebar.style.display = "none";
});

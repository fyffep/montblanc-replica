//// Open/Close Navbar: Full credit to Thierry Mugisha https://codepen.io/r_e_d_ant/details/vYmKxPy ////

const navBar = document.querySelector(".navbar");
const openMenuToggle = document.querySelector(".bx-menu");
const closeMenuToggle = document.querySelector(".bx-x");
const homeImage = document.querySelector(".img_home");

// --- OPEN MENU

openMenuToggle.addEventListener("click", () => {
  if (navBar.classList.contains("show_navbar")) {
    navBar.classList.remove("show_navbar");
  } else {
    navBar.classList.add("show_navbar");
    openMenuToggle.classList.add("hide");
    closeMenuToggle.classList.add("show");
  }
});

// --- CLOSE MENU

closeMenuToggle.addEventListener("click", () => {
  if (navBar.classList.contains("show_navbar")) {
    navBar.classList.remove("show_navbar");
    openMenuToggle.classList.remove("hide");
    closeMenuToggle.classList.remove("show");
  }
});
//queryselector will pick first element if there are multiple then
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightnav");

burger.addEventListener("click", () => {
  console.log(navbar);
  rightNav.classList.toggle("v-class-resp");
  navList.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});

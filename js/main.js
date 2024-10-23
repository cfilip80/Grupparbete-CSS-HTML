let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function () {
   if(!isBurgerOpen) {
	burgerMenu.style.display = "block";
	burgerBtn.style.backgroundPosition = "center left 50px, center";
	isBurgerOpen = true;
   }
else if (isBurgerOpen) {
	burgerMenu.style.display = "none";
	burgerBtn.style.backgroundPosition = "center, center left 50px";
	isBurgerOpen = false;
    }

};

// Get all the links in the navbar
const navLinks = document.querySelectorAll('.links');

// Get the current page's URL path (excluding domain)
const currentPath = window.location.pathname;

// Loop through the links and add the 'active' class to the link that matches the current path
navLinks.forEach(link => {
  // Check if the link's href matches the current page's path
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});
/* Navbar */

// get the hamburger element
var hamburger = document.getElementById("hamburger");

// get the menu element
var menu = document.getElementById("menu");

// define toggle function
function toggleMenu() {
  // either adds or removes active class from element //
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

// execute toggle function from hamburger on click
hamburger.addEventListener("click", toggleMenu);

// execute toggle function from menu on click //
menu.addEventListener("click", toggleMenu);

/* Navbar */

/*FAQ Accordion*/
var acc = document.getElementsByClassName("faq button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*FAQ Accordion*/
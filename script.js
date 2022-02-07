
//  Dropdown menu styling
function openDropdown() {
    document.getElementById("menuLinks").classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.menuIcon')) {
      const dropdowns = document.getElementsByClassName("mobileLinks");
      for (let i = 0; i < dropdowns.length; i++) {
        let openMenu = dropdowns[i];
        if (openMenu.classList.contains('show')) {
          openMenu.classList.remove('show');
        }
      }
    }
  } 

// SideNav Styling
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  const bigScreen = window.matchMedia('(min-width: 768px)')
  const smallScreen = window.matchMedia('(max-width: 767px)')

  if (bigScreen.matches) {
    document.getElementById("sideNav").style.width = "275px";
    document.getElementById("mainContent").style.marginLeft = "275px";
    // Making sidebar extent on small screen
    
  } else if (smallScreen.matches) {
    document.getElementById("sideNav").style.width = "100%";
  }

}

function closeMobileNav () {
  const smallScreen = window.matchMedia('(max-width: 767px)')
  if (smallScreen.matches) {
    document.getElementById("sideNav").style.width = "0";
}
}

// Setting nav width to 0
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
  } 

  const skillItems = Array.from(document.getElementsByClassName('skillItem'));

// Highlighting current section on scroll
const sections = document.querySelectorAll("section");
const navSections = document.querySelectorAll("nav .sideNavLinks li a")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach(section => {
    // calculates the top of the sections from the top of the window
    const sectionTop = section.offsetTop;
    // Checks how much we've scrolled on the page
    const sectionHeight = section.clientHeight;

    if (scrollY >= (sectionTop - sectionHeight / 4)) {
      current = section.getAttribute("id");
    }
  })

  navSections.forEach (li => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  })
  
})


// Easter Egg
console.log("Hey thanks for being so thorough in your search! Hope you like what you see 😊")


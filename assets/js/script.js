function toggleMobileMenu() {
    const navMenuMobile = document.getElementById("navMenuMobile");
    const menuIcon = document.getElementById("menuIcon");
  
    // Toggle menu visibility
    navMenuMobile.classList.toggle("nav-menu-active");
  
    // Toggle the icon between hamburger and close
    if (navMenuMobile.classList.contains("nav-menu-active")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times"); // FontAwesome close icon
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars"); // FontAwesome hamburger icon
    }
  }
  
  // Close menu when a link is clicked
  document.querySelectorAll('.nav-menu-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      const navMenuMobile = document.getElementById("navMenuMobile");
      const menuIcon = document.getElementById("menuIcon");
      
      navMenuMobile.classList.remove("nav-menu-active");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    });
  });
  
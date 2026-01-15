const logo = document.getElementById("navbarLogo");

const mobileBreakpoint = window.matchMedia("(max-width: 991.98px)");

function swapLogo(e) {
  if (e.matches) {
    logo.src = "./assets/images/icon-menu.svg";
  } else {
    logo.src = "./assets/images/LogoIcon.svg";
  }
}

// Run on load
swapLogo(mobileBreakpoint);

// Listen for changes
mobileBreakpoint.addEventListener("change", swapLogo);

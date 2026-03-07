document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      setActiveNav();
    });

  function setActiveNav() {
    let currentPage = window.location.pathname;
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
      if(currentPage.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  }
});
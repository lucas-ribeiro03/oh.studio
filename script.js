const nav = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  const navItems = document.querySelectorAll("nav a");
  const url = window.location.pathname;
  const urlSliced = url.slice(0, -5);
  const urlItem = urlSliced.slice(1);
  console.log(urlItem);

  navItems.forEach((item) => {
    const itemContent = item.textContent;
    if (urlItem === itemContent.toLowerCase()) {
      item.classList.add(`${itemContent.toLowerCase()}-active`);
    }
  });

  window.addEventListener("scroll", () => {
    if (scrollY > 135) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  });
});

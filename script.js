const nav = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  window.addEventListener("scroll", () => {
    if (scrollY > 135) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  });
});

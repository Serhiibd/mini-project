document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".header_mobile--menu--list");
  const btn = document.querySelector(".header_mobile--menu--btn");

  btn.addEventListener("click", (event) => {
    if (mobileMenu.style.transform === "translateX(0%)") {
      mobileMenu.style.transform = "translateX(100%)";
    } else {
      mobileMenu.style.transform = "translateX(0%)";
    }
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && !btn.contains(event.target)) {
      mobileMenu.style.transform = "translateX(100%)";
    }
  });
});

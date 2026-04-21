(() => {
  const refs = {
    openMenuBtn: document.querySelector(".js-open-menu"),
    closeMenuBtn: document.querySelector(".js-close-menu"),
    menu: document.querySelector(".js-menu-container"),
  };

  if (!refs.openMenuBtn || !refs.closeMenuBtn || !refs.menu) {
    console.warn("Елементи меню не знайдено!");
    return;
  }

  const toggleMenu = () => {
    refs.menu.classList.toggle("is-open");
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
})();

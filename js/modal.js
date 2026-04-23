(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) return;

  const toggleModal = () => {
    refs.modal.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
})();

document.addEventListener("DOMContentLoaded", () => {

  /* ================= MODAL PENGUMUMAN ================= */
  const pengumumanCards = document.querySelectorAll(".pengumuman-card[data-img]");
  const modal = document.getElementById("modalPengumuman");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalClose = modal.querySelector(".close");

  pengumumanCards.forEach(card => {
    card.addEventListener("click", () => {
      modalImg.src = card.dataset.img;
      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;
      modal.classList.add("show");
    });
  });

  modalClose.addEventListener("click", () => modal.classList.remove("show"));
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
  });

  /* ================= LIGHTBOX GALERI ================= */
  const galeriImages = document.querySelectorAll(".galeri-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");

  galeriImages.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      modal.classList.remove("show");
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  }
});

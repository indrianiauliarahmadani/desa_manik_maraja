document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     NAVBAR MOBILE
  ========================= */
  const navbar = document.querySelector(".navbar .container");
  const navMenu = document.querySelector(".nav-menu");

  if (navbar && navMenu && window.innerWidth <= 768) {
    const navToggle = document.createElement("div");
    navToggle.className = "nav-toggle";
    navToggle.innerHTML = "☰";
    navbar.appendChild(navToggle);

    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  /* =========================
     ANIMASI CARD ORGANISASI
  ========================= */
  const orgCards = document.querySelectorAll(".org-card");

  if (orgCards.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    orgCards.forEach(card => observer.observe(card));
  }

  /* =========================
     AKTIF KLIK CARD
  ========================= */
  orgCards.forEach(card => {
    card.addEventListener("click", () => {
      orgCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

  /* =========================
     MODAL FOTO PEJABAT
  ========================= */
  const modalPejabat = document.getElementById("modalPejabat");
  const modalImg = document.getElementById("modalPejabatImg");
  const modalNama = document.getElementById("modalPejabatNama");
  const modalJabatan = document.getElementById("modalPejabatJabatan");
  const closePejabat = document.querySelector(".close-pejabat");

  const fotoPejabat = document.querySelectorAll(".foto-pejabat");

  if (modalPejabat && fotoPejabat.length) {
    fotoPejabat.forEach(img => {
      img.addEventListener("click", e => {
        e.stopPropagation();
        modalImg.src = img.src;
        modalNama.textContent = img.dataset.nama;
        modalJabatan.textContent = img.dataset.jabatan;
        modalPejabat.style.display = "flex";
      });
    });

    closePejabat.addEventListener("click", () => {
      modalPejabat.style.display = "none";
    });

    modalPejabat.addEventListener("click", e => {
      if (e.target === modalPejabat) {
        modalPejabat.style.display = "none";
      }
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        modalPejabat.style.display = "none";
      }
    });
  }

});
document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modalPejabat");
  const modalImg = document.getElementById("modalPejabatImg");
  const modalNama = document.getElementById("modalPejabatNama");
  const modalJabatan = document.getElementById("modalPejabatJabatan");
  const closeBtn = document.querySelector(".close-modal");

  document.querySelectorAll(".foto-pejabat").forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modalNama.textContent = img.dataset.nama;
      modalJabatan.textContent = img.dataset.jabatan;
      modal.classList.add("show");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      modal.classList.remove("show");
    }
  });

});

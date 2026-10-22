/**
 * Asas da Beleza - Embelezamento & Estética
 * WhatsApp Integration, Interactive Budget/Booking Builder, Gallery Filtering & Lightbox
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIconOpen = document.getElementById("menuIconOpen");
  const menuIconClose = document.getElementById("menuIconClose");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function toggleMobileMenu() {
    const isHidden = mobileMenu.classList.contains("hidden");
    if (isHidden) {
      mobileMenu.classList.remove("hidden");
      menuIconOpen.classList.add("hidden");
      menuIconClose.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
      menuIconOpen.classList.remove("hidden");
      menuIconClose.classList.add("hidden");
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuIconOpen.classList.remove("hidden");
      menuIconClose.classList.add("hidden");
    });
  });

  // 2. Sticky Navbar Scroll Effect & Back to Top
  const navbar = document.getElementById("mainNavbar");
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("shadow-md", "bg-[#fdfbf9]/95");
      navbar.classList.remove("bg-[#fdfbf9]/85");
    } else {
      navbar.classList.remove("shadow-md", "bg-[#fdfbf9]/95");
      navbar.classList.add("bg-[#fdfbf9]/85");
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
        backToTopBtn.classList.add("opacity-100", "pointer-events-auto");
      } else {
        backToTopBtn.classList.add("opacity-0", "pointer-events-none");
        backToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 3. Interactive Gallery Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("bg-[#d48386]", "text-white", "shadow-md");
        b.classList.add("bg-white", "text-[#6e5d5e]", "border", "border-[#d48386]/30");
      });
      btn.classList.add("bg-[#d48386]", "text-white", "shadow-md");
      btn.classList.remove("bg-white", "text-[#6e5d5e]", "border", "border-[#d48386]/30");

      const filterValue = btn.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 50);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.95)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // 4. Image Lightbox
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeLightbox = document.getElementById("closeLightbox");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const title = item.querySelector(".item-title")?.innerText || "Asas da Beleza";
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxCaption) lightboxCaption.innerText = title;
        lightbox.classList.remove("hidden");
        lightbox.classList.add("flex");
        document.body.style.overflow = "hidden";
      }
    });
  });

  if (closeLightbox && lightbox) {
    closeLightbox.addEventListener("click", () => {
      lightbox.classList.add("hidden");
      lightbox.classList.remove("flex");
      document.body.style.overflow = "auto";
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add("hidden");
        lightbox.classList.remove("flex");
        document.body.style.overflow = "auto";
      }
    });
  }

  // 5. Interactive Express Booking Builder (Simulador de Agendamento Asas da Beleza)
  const serviceCheckboxes = document.querySelectorAll(".booking-service-check");
  const selectedCountSpan = document.getElementById("selectedCount");
  const selectedServicesList = document.getElementById("selectedServicesList");
  const sendBookingBtn = document.getElementById("sendBookingBtn");
  const clientNameInput = document.getElementById("clientNameInput");
  const clientDayInput = document.getElementById("clientDayInput");
  const clientTimeInput = document.getElementById("clientTimeInput");

  function updateBookingSummary() {
    const selected = [];
    serviceCheckboxes.forEach((cb) => {
      if (cb.checked) {
        selected.push(cb.value);
      }
    });

    if (selectedCountSpan) {
      selectedCountSpan.innerText = selected.length.toString();
    }

    if (selectedServicesList) {
      if (selected.length === 0) {
        selectedServicesList.innerHTML = `<li class="text-sm text-gray-400 italic">Nenhum procedimento selecionado ainda. Marque as opções desejadas acima.</li>`;
      } else {
        selectedServicesList.innerHTML = selected
          .map(
            (srv) =>
              `<li class="flex items-center gap-2 text-sm text-[#241c1d] font-medium"><span class="w-2 h-2 rounded-full bg-[#d48386]"></span>${srv}</li>`
          )
          .join("");
      }
    }
  }

  serviceCheckboxes.forEach((cb) => {
    cb.addEventListener("change", updateBookingSummary);
  });

  if (sendBookingBtn) {
    sendBookingBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const selected = [];
      serviceCheckboxes.forEach((cb) => {
        if (cb.checked) {
          selected.push(cb.value);
        }
      });

      const clientName = clientNameInput?.value.trim() || "";
      const clientDay = clientDayInput?.value || "";
      const clientTime = clientTimeInput?.value || "";

      let message = `Olá, equipe Asas da Beleza! Gostaria de agendar um horário no salão. ✨🕊️\n\n`;

      if (clientName) {
        message += `👤 *Meu nome:* ${clientName}\n`;
      }

      if (selected.length > 0) {
        message += `💆‍♀️ *Serviços de interesse:*\n${selected.map((s) => `• ${s}`).join("\n")}\n`;
      } else {
        message += `💆‍♀️ *Serviço de interesse:* Gostaria de consultar os horários e serviços disponíveis.\n`;
      }

      if (clientDay || clientTime) {
        message += `📅 *Preferência:* ${clientDay ? `Dia ${clientDay}` : ""}${clientTime ? ` às ${clientTime}` : ""}\n`;
      }

      message += `\nVocês têm horário disponível para mim no Residencial Itaipu? Aguardo retorno com carinho! 🤍`;

      const whatsappUrl = `https://wa.me/5562992957335?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  // 6. Accordion FAQ
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".accordion-icon");
      const isOpen = content.classList.contains("open");

      document.querySelectorAll(".accordion-content").forEach((c) => {
        c.classList.remove("open");
        c.style.maxHeight = null;
      });
      document.querySelectorAll(".accordion-icon").forEach((i) => {
        i.style.transform = "rotate(0deg)";
      });

      if (!isOpen) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + 30 + "px";
        if (icon) icon.style.transform = "rotate(180deg)";
      }
    });
  });

  if (accordionHeaders.length > 0) {
    accordionHeaders[0].click();
  }
});

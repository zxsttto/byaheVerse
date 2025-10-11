document.addEventListener("DOMContentLoaded", () => {
  // Redirect to destination page on card click
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      let destination = card.dataset.destination || card.querySelector(".card-label")?.textContent;
      if (!destination) return;
      const destinationFile = destination.toLowerCase().replace(/\s+/g, "-") + ".html";
      window.location.href = destinationFile;
    });
  });

  // Hamburger menu toggle (if still in use)
  const hamburger = document.querySelector(".hamburger");
  hamburger?.addEventListener("click", () => {
    document.querySelector(".navbar")?.classList.toggle("active");
  });

  // Contact form submission popup
  const contactForm = document.getElementById("contact-form");
  const contactPopup = document.getElementById("thank-you-popup");

  if (contactForm && contactPopup) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactPopup.style.display = "flex";
      contactPopup.classList.add("show");

      setTimeout(() => {
        contactPopup.style.display = "none";
        contactPopup.classList.remove("show");
        contactForm.reset();
      }, 3000);
    });
  }

  // Booking form submission popup
  const bookingForm = document.getElementById("booking-form");
  const bookingPopup = document.getElementById("booking-popup");
  const bookingDetails = document.getElementById("booking-details");

  if (bookingForm && bookingPopup && bookingDetails) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const destination = document.getElementById("destination")?.value;
      const date = document.getElementById("date")?.value;
      const passengers = document.getElementById("passengers")?.value;

      const details = `
        Destination: <strong>${destination}</strong><br>
        Date: <strong>${date}</strong><br>
        Passengers: <strong>${passengers}</strong>
      `;

      bookingDetails.innerHTML = details;
      bookingPopup.style.display = "flex";
      bookingForm.reset();
    });
  }

  // Optional: Always-show popup (welcome or reminder) on page load
  const autoPopup = document.getElementById("auto-popup");
  if (autoPopup) {
    autoPopup.style.display = "flex";
    autoPopup.classList.add("show");

    setTimeout(() => {
      autoPopup.style.display = "none";
      autoPopup.classList.remove("show");
    }, 3000);
  }
});

// Close booking popup globally
function closeBookingPopup() {
  const bookingPopup = document.getElementById("booking-popup");
  if (bookingPopup) bookingPopup.style.display = "none";
}

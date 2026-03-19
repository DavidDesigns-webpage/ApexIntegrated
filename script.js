const menuBtn = document.getElementById("menuBtn");
const header = document.getElementById("header");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", () => {
    // Toggle menu open/close
    header.classList.toggle("open");

    // Swap icon
    if(header.classList.contains("open")) {
        menuIcon.src = "image/closeX.svg"; // X icon
    } else {
        menuIcon.src = "image/apexBars.svg"; // burger icon
    }
});
const navLinks = document.querySelectorAll("#header a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        header.classList.remove("open");
        menuIcon.src = "image/apexBars.svg"; // reset to burger icon
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".getQuoteO");
  const select = document.getElementById("serviceS");

  button.addEventListener("click", () => {
      const service = select.value;
      const subject = encodeURIComponent(`Quote Request: ${service}`);
      const body = encodeURIComponent(
        `Hi,\n\nI would like a quote for: ${service}\n\nName:\nContact:\n`
      );

      window.location.href = `mailto:info@apexintegrated.co.za?subject=${subject}&body=${body}`;
  });
});
const year = document.getElementById("year");
    if (year){
        year.textContent = new Date().getFullYear();
    };
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(el => observer.observe(el));

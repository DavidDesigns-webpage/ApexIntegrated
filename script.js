document.body.classList.add('loading');
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hide');
    document.body.classList.remove('loading');
});
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
document.addEventListener("DOMContentLoaded", () => {
  const buttonw = document.querySelector(".getQuoteW");
  const select = document.getElementById("serviceS");

  buttonw.addEventListener("click", () => {

      const message = encodeURIComponent(
        `Hi,\n\nI would like to ask about your service.\n\nName:`
      );

      const phone = "27632112172"; // IMPORTANT: no +, no spaces

      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
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
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const hero = document.querySelector(".sectionBody");

    hero.style.backgroundPositionY = scrollY * 0.3 + "px";
});


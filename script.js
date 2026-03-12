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

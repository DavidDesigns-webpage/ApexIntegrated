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
        `Hi,\n\nI would like to ask about your service.`
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

const links = document.querySelectorAll(".serviceBttn");
const panel = document.getElementById("servicePanel");

const title = document.getElementById("panelTitle");
const desc = document.getElementById("panelDescription");
const img = document.getElementById("panelImage");

const closeBtn = document.getElementById("closePanel");

/* DATA */
const serviceData = {
    cctv: {
        title: "CCTV Installation",
        desc: `
    <p>Security is no longer a luxury—it's a necessity. Our CCTV installation service is designed to provide you with complete peace of mind by giving you full visibility and control over your property at all times. Whether you're protecting your home, office, warehouse, or retail space, we offer advanced surveillance solutions tailored to your specific needs.</p>

    <p>We specialize in both HD analog and IP-based camera systems, ensuring that you receive crystal-clear video quality regardless of your environment. Our systems are equipped with features such as night vision, motion detection, remote viewing, and intelligent alerts. This means you can monitor your property in real-time from your smartphone, tablet, or computer—no matter where you are in the world.</p>

    <p>Our process begins with a thorough on-site assessment. We evaluate entry points, blind spots, lighting conditions, and overall layout to design a system that maximizes coverage and efficiency. Every camera is strategically placed to ensure optimal visibility while maintaining a clean and professional appearance.</p>

    <p>One of the key advantages of working with us is our commitment to quality. We use only trusted, high-performance equipment that is built to last and withstand various environmental conditions. Whether it's extreme heat, dust, or rain, your system will continue to operate reliably.</p>

    <p>From deterring crime to providing valuable evidence when needed, a professionally installed CCTV system is one of the most effective investments you can make. Let us help you protect what matters most with a solution that is smart, scalable, and built for the future.</p>
`,
        img: "image/cctvIcon.webp"
    },
    automation: {
        title: "Home Automation",
        desc: `<p>Make your home smarter, more convenient and more secure with intelligent home automation solutions from Apex Integrated Systems.</p>

               <p>Home automation connects compatible devices and systems, allowing you to control and manage various aspects of your home through your smartphone, remote controls or automated settings.</p>

                <p>Whether you want to operate your garage door remotely, automate lighting or improve access to your property, we design practical solutions that simplify everyday living.</p>
`,
        img: "image/homeIcon.webp"
    },
    wired: {
        title: "Wired Networks",
        desc: `<p>A reliable network starts with the right infrastructure. Apex Integrated Systems provides wired networking solutions designed to deliver stable, secure and consistent connectivity throughout your home or business.</p>

                <p>We design and install structured network infrastructure to connect computers, servers, CCTV systems, access points, printers and other network-enabled devices.</p>

                <p>Whether you require a new network installation or an upgrade to an existing infrastructure, we focus on organised cabling, reliable connections and a network built around your requirements.</p>`,
        img: "image/wiredIcon.webp"
    },
    wireless: {
        title: "Wireless Networks",
        desc: `<p>Mesh Wi-Fi and long-distance wireless bridging for seamless coverage.Enjoy reliable wireless connectivity where you need it most. Apex Integrated Systems specialises in designing and implementing wireless networking solutions that improve Wi-Fi coverage, performance and connectivity.</p>

                <p>Poor Wi-Fi coverage, dead zones and unstable connections can affect productivity and everyday convenience. We assess your environment and implement suitable wireless solutions to provide better coverage and more consistent connectivity.</p>

               <p> From residential Wi-Fi improvements to larger commercial wireless deployments, our solutions are designed around your property's layout and connectivity requirements</p>`,
        img: "image/wifiIcon.webp"
    },
    support: {
        title: "Maintenance & Support",
        desc:`<p>System monitoring, upgrades, and rapid-response troubleshooting. In addition, we provide support after installation. We make sure you understand how to use your system, review footage, and adjust settings. Our goal is to empower you with both security and confidence.</p>
            <p> Technology requires ongoing maintenance to remain reliable, secure and effective. Apex Integrated Systems provides technical maintenance and support services to help keep your security, automation and networking infrastructure operating as intended.</p>

            <p>We assist with diagnosing faults, resolving connectivity issues, maintaining installed equipment and improving the performance of existing systems.</p>

           <p>Whether you are experiencing a technical problem, require assistance with an existing installation or need routine system maintenance, our goal is to minimise downtime and keep your systems running smoothly.</p>`,

        img: "image/mainsupIcon.webp"
    },
    security: {
        title: "Security Systems",
        desc: `<p>Our security systems are designed to protect your property, assets, and the people who matter most. We provide reliable security solutions tailored to residential, commercial, and industrial environments.</p>

                <p>Combining modern technology with dependable performance, our systems help detect and prevent potential security threats while keeping you in control.</p>

               <p> At Apex Integrated Systems, we deliver professional security solutions that provide lasting protection and peace of mind.</p>`,
        img: "image/securityIcon.webp"
    }
};

/* CLICK HANDLER */
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const service = link.dataset.service;

        title.innerHTML = serviceData[service].title;
        desc.innerHTML = serviceData[service].desc;
        img.src = serviceData[service].img;

        panel.classList.add("active");
        document.querySelector(".sectionBody").classList.add("noScroll");
        /* update URL */
        history.pushState(null, "", "#" + service);
       
    });
});

/* CLOSE */
closeBtn.addEventListener("click", () => {
    panel.classList.remove("active");
    document.querySelector(".sectionBody").classList.remove("noScroll");
    history.pushState("", document.title, window.location.pathname);
});

/* BACK BUTTON SUPPORT */
window.addEventListener("popstate", () => {
    panel.classList.remove("active");
    document.querySelector(".sectionBody").classList.remove("noScroll");
});

window.addEventListener("load", () => {
    const hash = window.location.hash.replace("#", "");

    if (serviceData[hash]) {
        title.innerHTML = serviceData[hash].title;
        desc.innerHTML = serviceData[hash].desc;
        img.src = serviceData[hash].img;

        panel.classList.add("active");
    }
});

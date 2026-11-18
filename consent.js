(function () {
    var GTM_ID = "GTM-KVCVS4QS";
    var KEY = "apexConsent";
    var MAX_AGE = 365 * 24 * 60 * 60 * 1000; // ask again after 12 months

    function read() {
        try {
            var d = JSON.parse(localStorage.getItem(KEY));
            if (d && Date.now() - d.t < MAX_AGE) return d.v;
        } catch (e) {}
        return null;
    }
    function save(v) {
        try { localStorage.setItem(KEY, JSON.stringify({ v: v, t: Date.now() })); } catch (e) {}
    }

    function loadGTM() {
        if (window.__gtmLoaded) return;
        window.__gtmLoaded = true;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
        var s = document.createElement("script");
        s.async = true;
        s.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
        document.head.appendChild(s);
    }

    function clearAnalyticsCookies() {
        var host = location.hostname;
        document.cookie.split(";").forEach(function (c) {
            var name = c.split("=")[0].trim();
            if (/^(_ga|_gid|_gat|_gcl)/.test(name)) {
                var past = "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                document.cookie = name + past;
                document.cookie = name + past + "; domain=" + host;
                document.cookie = name + past + "; domain=." + host.replace(/^www\./, "");
            }
        });
    }

    var css =
        "#cookieBanner{position:fixed;left:16px;right:16px;bottom:16px;max-width:720px;margin:0 auto;z-index:10000;background:#111522;border:1px solid #409afb55;border-radius:16px;padding:16px 20px;box-shadow:0 0 20px rgba(70,159,255,.35);font-family:'Inter',sans-serif;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;box-sizing:border-box}" +
        "#cookieBanner p{margin:0;flex:1 1 300px;color:rgb(228,233,240);font-size:.9rem;line-height:1.5}" +
        "#cookieBanner p a{color:#409bfb;text-decoration:underline}" +
        ".cbBtns{display:flex;gap:10px;flex:0 0 auto}" +
        ".cbBtn{position:relative;overflow:hidden;isolation:isolate;cursor:pointer;min-width:100px;padding:10px 20px;border-radius:14px;border:2px solid #409bfb;background:transparent;color:rgb(228,233,240);font-family:'Inter',sans-serif;font-weight:600;font-size:.9rem;transition:color .3s ease,box-shadow .3s ease}" +
        ".cbBtn::before{content:'';position:absolute;top:0;left:0;width:0;height:100%;background:#d67c0d;z-index:-1;transition:width .4s ease}" +
        ".cbBtn:hover::before,.cbBtn:focus-visible::before{width:100%}" +
        ".cbBtn:hover,.cbBtn:focus-visible{color:#000;box-shadow:0 0 10px #f4850e,0 0 20px #f4850e}" +
        "@media(max-width:480px){.cbBtns{width:100%}.cbBtn{flex:1}}";

    function injectStyle() {
        if (document.getElementById("cookieStyle")) return;
        var st = document.createElement("style");
        st.id = "cookieStyle";
        st.textContent = css;
        document.head.appendChild(st);
    }

    function hideBanner() {
        var b = document.getElementById("cookieBanner");
        if (b) b.remove();
    }

    function choose(value) {
        var wasLoaded = window.__gtmLoaded;
        save(value);
        hideBanner();
        if (value === "accepted") {
            loadGTM();
        } else if (wasLoaded) {
            clearAnalyticsCookies();
            location.reload(); // stops tracking scripts already running on this page
        }
    }

    function showBanner() {
        if (document.getElementById("cookieBanner")) return;
        injectStyle();
        var b = document.createElement("div");
        b.id = "cookieBanner";
        b.setAttribute("role", "dialog");
        b.setAttribute("aria-label", "Cookie consent");
        b.innerHTML =
            '<p>We use Google Tag Manager to understand how visitors use our site. It only loads if you accept. Our reviews widget may also set cookies. See our <a href="privacy-policy.html">Privacy Policy</a>.</p>' +
            '<div class="cbBtns"><button type="button" class="cbBtn" id="cbDecline">Decline</button><button type="button" class="cbBtn" id="cbAccept">Accept</button></div>';
        document.body.appendChild(b);
        document.getElementById("cbAccept").addEventListener("click", function () { choose("accepted"); });
        document.getElementById("cbDecline").addEventListener("click", function () { choose("declined"); });
    }

    function init() {
        var v = read();
        if (v === "accepted") loadGTM();
        else if (v === null) showBanner();
        document.querySelectorAll(".cookieSettings").forEach(function (el) {
            el.addEventListener("click", function (e) { e.preventDefault(); showBanner(); });
        });
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
(function () {
  "use strict";

  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  };

  function openDialog(d) {
    if (!d) return;
    if (typeof d.showModal === "function") d.showModal();
    else d.setAttribute("open", "");
  }
  function closeDialog(d) {
    if (!d) return;
    if (typeof d.close === "function") d.close();
    else d.removeAttribute("open");
  }

  // Booking: the online agenda loads only when someone asks for it.
  var booking = document.getElementById("booking");
  var frame = document.getElementById("t-booking");
  document.querySelectorAll("[data-book]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (frame && !frame.getAttribute("src")) frame.setAttribute("src", frame.dataset.src);
      openDialog(booking);
    });
  });

  // Close buttons and backdrop clicks for every dialog.
  document.querySelectorAll("dialog").forEach(function (d) {
    d.addEventListener("click", function (e) {
      if (e.target === d) closeDialog(d);
    });
    d.querySelectorAll("[data-close]").forEach(function (b) {
      b.addEventListener("click", function () { closeDialog(d); });
    });
  });

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Header shadow once the page moves
  var header = document.querySelector(".site-header");
  function onScrollHeader() {
    if (header) header.classList.toggle("is-stuck", window.scrollY > 8);
  }

  // Altimeter: Aubonne (502 m) at the top of the page, the lake (372 m) at the bottom.
  var alti = document.querySelector(".altimeter");
  var altValue = alti && alti.querySelector(".alt-value");
  var links = alti ? Array.prototype.slice.call(alti.querySelectorAll("a")) : [];
  var sections = links.map(function (a) { return document.getElementById(decodeURIComponent(a.getAttribute("href").slice(1))); });
  var ticking = false;

  function update() {
    ticking = false;
    onScrollHeader();
    if (!alti || !altValue) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    altValue.textContent = Math.round(502 - p * 130);
    var hero = document.querySelector(".hero");
    alti.classList.toggle("is-away", !!hero && hero.getBoundingClientRect().bottom > window.innerHeight * 0.5);

    var mid = window.innerHeight * 0.45;
    var current = -1;
    sections.forEach(function (s, i) {
      if (s && s.getBoundingClientRect().top <= mid) current = i;
    });
    links.forEach(function (a, i) { a.classList.toggle("is-here", i === current); });

    // Read the ground under the gauge to pick light or dark ink.
    alti.style.visibility = "hidden";
    var r = alti.getBoundingClientRect();
    var under = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
    alti.style.visibility = "";
    var dark = under && under.closest && under.closest(".terrace-vine, .lake, .rdv-home, .plot-sign");
    alti.classList.toggle("on-dark", !!dark);
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();

  // Cookie notice
  var cookie = document.getElementById("cookie");
  var privacy = document.getElementById("privacy");
  var nonNecessary = document.getElementById("wt-cli-checkbox-non-necessary");
  var consent = store.get("mos-cookie-consent");
  if (cookie && !consent) cookie.hidden = false;
  if (nonNecessary) nonNecessary.checked = consent === "all";
  function accept(value) {
    store.set("mos-cookie-consent", value);
    if (cookie) cookie.hidden = true;
  }
  var acceptBtn = document.getElementById("cookie_action_close_header");
  if (acceptBtn) acceptBtn.addEventListener("click", function () { accept("all"); });
  document.querySelectorAll("[data-cookie-settings]").forEach(function (b) {
    b.addEventListener("click", function () { openDialog(privacy); });
  });
  var saveBtn = document.getElementById("wt-cli-privacy-save-btn");
  if (saveBtn) saveBtn.addEventListener("click", function () {
    accept(nonNecessary && nonNecessary.checked ? "all" : "necessary");
    closeDialog(privacy);
  });
})();

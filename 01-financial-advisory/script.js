/* CARRACK ADVISORY — fictional demo. No tracking, no chat widget, no exit-intent, no count-up. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header condenses 88px -> 56px past 120px of scroll
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero, .page-head');
  var bar = document.querySelector('.sticky-bar');
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle('condensed', y > 120);
    if (bar && hero) bar.classList.toggle('show', reduce || hero.getBoundingClientRect().bottom < 0);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile overlay menu
  var openBtn = document.querySelector('.menu-btn');
  var overlay = document.querySelector('.overlay');
  if (openBtn && overlay) {
    var closeBtn = overlay.querySelector('.overlay-close');
    openBtn.addEventListener('click', function () {
      overlay.classList.add('open'); openBtn.setAttribute('aria-expanded', 'true');
      closeBtn.focus();
    });
    closeBtn.addEventListener('click', function () {
      overlay.classList.remove('open'); openBtn.setAttribute('aria-expanded', 'false'); openBtn.focus();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeBtn.click();
    });
  }

  // Reveals: 10px rise + fade, 50ms stagger down a column. Spines and fee tables run once.
  var targets = document.querySelectorAll('.reveal, .spine, .table-wrap');
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('.fee tbody tr').forEach(function (tr) { tr.style.opacity = 1; });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var sibs = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
        if (el.classList.contains('reveal')) el.style.transitionDelay = Math.min(sibs, 6) * 50 + 'ms';
        el.classList.add('in');
        if (el.classList.contains('table-wrap')) {
          el.querySelectorAll('tbody tr').forEach(function (tr, i) { tr.style.transitionDelay = i * 35 + 'ms'; });
        }
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  // Introductory-call slot picker: single-select, echoed into the persistent summary
  var slots = document.querySelectorAll('.slot');
  var echo = document.getElementById('slot-echo');
  var hidden = document.getElementById('chosen-slot');
  slots.forEach(function (b) {
    b.addEventListener('click', function () {
      slots.forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      if (echo) echo.textContent = b.getAttribute('data-slot');
      if (hidden) hidden.value = b.getAttribute('data-slot');
    });
  });
  var reason = document.getElementById('reason');
  var reasonEcho = document.getElementById('reason-echo');
  if (reason && reasonEcho) reason.addEventListener('change', function () { reasonEcho.textContent = reason.value || '—'; });

  // Forms: unticked consent required; nothing is sent anywhere in the demo
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = f.querySelector('.error');
      if (!f.checkValidity()) { f.reportValidity(); return; }
      if (hidden && f.contains(hidden) && !hidden.value) {
        if (err) { err.textContent = 'Pick a call slot in step 1 first.'; err.focus(); }
        return;
      }
      if (err) err.textContent = '';
      var ok = document.getElementById(f.getAttribute('data-success'));
      f.hidden = true;
      if (ok) { ok.classList.add('show'); ok.focus(); }
    });
  });
})();

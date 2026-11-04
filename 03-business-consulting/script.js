/* DRAWKNIFE CONSULTING — fictional demo. No tracking, chat widget, exit-intent, count-up or file upload. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header condenses 84px -> 54px past 130px; sticky bar once the hero leaves
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero, .page-head');
  var bar = document.querySelector('.sticky-bar');
  function onScroll() {
    if (header) header.classList.toggle('condensed', window.scrollY > 130);
    if (bar && hero) bar.classList.toggle('show', reduce || hero.getBoundingClientRect().bottom < 0);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var openBtn = document.querySelector('.menu-btn');
  var overlay = document.querySelector('.overlay');
  if (openBtn && overlay) {
    var closeBtn = overlay.querySelector('.overlay-close');
    openBtn.addEventListener('click', function () { overlay.classList.add('open'); openBtn.setAttribute('aria-expanded', 'true'); closeBtn.focus(); });
    closeBtn.addEventListener('click', function () { overlay.classList.remove('open'); openBtn.setAttribute('aria-expanded', 'false'); openBtn.focus(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && overlay.classList.contains('open')) closeBtn.click(); });
  }

  // Reveals: 10px rise, 55ms stagger; finding build, heading underline and tags each run once
  var targets = document.querySelectorAll('.reveal, .finding, .em, .tags');
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        if (el.classList.contains('reveal')) {
          var i = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
          el.style.transitionDelay = Math.min(i, 6) * 55 + 'ms';
        }
        if (el.classList.contains('tags')) {
          el.querySelectorAll('li').forEach(function (li, n) { li.style.transitionDelay = n * 25 + 'ms'; });
        }
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  // Diagnostic index: the current entry crossfades to oxide. An index, not a progress track.
  var links = document.querySelectorAll('.index a[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('current'); a.removeAttribute('aria-current'); });
        var a = map[en.target.id];
        if (a) { a.classList.add('current'); a.setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) spy.observe(el); });
  }

  // ?finding=[n] carried into the intake summary
  var params = new URLSearchParams(window.location.search);
  var f = params.get('finding');
  var arrived = document.getElementById('arrived');
  var arrivedField = document.getElementById('arrived-field');
  if (f && /^\d{1,2}$/.test(f)) {
    var label = 'Finding ' + ('0' + f).slice(-2) + ' — [FINDING TITLE — CLIENT TO SUPPLY]';
    if (arrived) arrived.textContent = label;
    if (arrivedField) arrivedField.value = label;
  }

  // Multi-step scoping intake: each step a block; the active block wipes oxide once
  var steps = document.querySelectorAll('.step[data-step]');
  function activate(n) {
    steps.forEach(function (s) {
      var k = +s.getAttribute('data-step');
      s.classList.toggle('is-active', k === n);
      s.classList.toggle('is-done', k < n);
      var body = s.querySelector('.step-body');
      if (body && s.hasAttribute('data-collapsible')) body.hidden = k !== n;
    });
  }
  if (steps.length) {
    activate(1);
    document.querySelectorAll('[data-next]').forEach(function (b) {
      b.addEventListener('click', function () {
        var cur = b.closest('.step');
        var bad = cur && Array.prototype.find.call(cur.querySelectorAll('input,select,textarea'), function (i) { return !i.checkValidity(); });
        if (bad) { bad.reportValidity(); return; }
        var n = +b.getAttribute('data-next');
        activate(n);
        var next = document.querySelector('.step[data-step="' + n + '"] input, .step[data-step="' + n + '"] select, .step[data-step="' + n + '"] textarea');
        if (next) next.focus();
      });
    });
    document.querySelectorAll('[data-back]').forEach(function (b) {
      b.addEventListener('click', function () { activate(+b.getAttribute('data-back')); });
    });
  }

  // Forms: unticked consent required; nothing is sent in the demo
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        var bad = form.querySelector(':invalid');
        var st = bad && bad.closest('.step');
        if (st) activate(+st.getAttribute('data-step'));
        if (bad) bad.reportValidity();
        return;
      }
      form.hidden = true;
      var ok = document.getElementById(form.getAttribute('data-success'));
      if (ok) { ok.classList.add('show'); ok.focus(); }
    });
  });
})();

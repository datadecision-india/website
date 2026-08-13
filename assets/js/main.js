// Mobile nav toggle
(function () {
  var menuToggle = document.getElementById('menu-toggle');
  var navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      var isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      navLinks.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active');
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Copy-to-clipboard on contact page
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      var card = btn.closest('.contact-method');
      var valueEl = card ? card.querySelector('.value') : null;
      var textToCopy = valueEl ? valueEl.getAttribute('data-value') : null;

      if (textToCopy && navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(function () {
          var copyIcon = btn.querySelector('.copy-icon');
          var checkIcon = btn.querySelector('.check-icon');
          if (copyIcon) copyIcon.classList.add('hidden');
          if (checkIcon) checkIcon.classList.remove('hidden');
          setTimeout(function () {
            if (copyIcon) copyIcon.classList.remove('hidden');
            if (checkIcon) checkIcon.classList.add('hidden');
          }, 2000);
        });
      }
    });
  });
})();

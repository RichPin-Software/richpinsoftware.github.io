/*
  Author: Richard Pinegar | Rich Pin Software
  Date: February 2026
  Site Info: Rich Pin Software Official Website
  Content: Main JS
*/

const body = document.body;
const navButton = document.querySelector('.nav-button');

// Toggle Navigation Menu
if (navButton) {
  navButton.addEventListener('click', function() {
    body.classList.toggle('nav-open');
    navButton.setAttribute('aria-expanded', true);
  });

  document.addEventListener('click', function(e) {
    const navOpen = body.classList.contains('nav-open');
    const navButtonClicked = e.target.closest('nav, .nav-button');

    if (navOpen && !navButtonClicked) {
      body.classList.remove('nav-open');
      navButton.setAttribute('aria-expanded', false);
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      navButton.setAttribute('aria-expanded', false);
      navButton.focus(); // return focus to the button
    }
  });
}
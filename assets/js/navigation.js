/**
 * @author Richard Pinegar | Rich Pin Software
 * @date April 2026
 * @site Rich Pin Software Official Website
 * @content Navigation Logic
 * 
 * - Opens on hover/focus, closes on mouse leave
 * - Toggles on click for mobile
 * - Closes on outside click, Escape key, and scroll
 */

const body = document.body;
const navElement = document.querySelector('nav');
const navButton = document.querySelector('.nav-button');
let closeTimer = null;

export function initNavigation() {
  if (navButton) {
    navButton.addEventListener('mouseenter', openNavigation);
    navButton.addEventListener('mouseleave', scheduleClose);
    navButton.addEventListener('focus', openNavigation);
    navElement.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    navElement.addEventListener('mouseleave', closeNavigation);

    // Toggle navigation on button click (for mobile)
    navButton.addEventListener('click', function() {
      body.classList.contains('nav-open') ? closeNavigation() : openNavigation();
    });

    // Close navigation on outside click
    document.addEventListener('click', function(e) {
      var navOpen = body.classList.contains('nav-open');
      var navButtonClicked = e.target.closest('nav, .nav-button');

      if (navOpen && !navButtonClicked) {
        closeNavigation();
      }
    });

    // Close navigation on Escape key
    document.addEventListener('keydown', function(e) {
      var navOpen = body.classList.contains('nav-open');

      if (e.key === 'Escape' && navOpen) {
        closeNavigation();
        navButton.focus(); // return focus to the button
      }
    });

    // Close navigation on scroll
    window.addEventListener('scroll', function() {
      var navOpen = body.classList.contains('nav-open');

      if (navOpen) {
        closeNavigation();
      }
    }, { passive: true });
  }
}

function openNavigation() {
  clearTimeout(closeTimer);
  body.classList.add('nav-open');
  navButton.setAttribute('aria-expanded', true);
}

function closeNavigation() {
  body.classList.remove('nav-open');
  navButton.setAttribute('aria-expanded', false);
}

function scheduleClose() {
  closeTimer = setTimeout(closeNavigation, 500); // Delay to allow for mouse movement
}
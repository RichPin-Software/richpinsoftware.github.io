/*
  Author: Richard Pinegar | Rich Pin Software
  Date: February 2026
  Site Info: Rich Pin Software Official Website
  Content: Main JS
*/

// Update text from strings.json
function updateContent() {
  const setText = (id, text) => {
    const element = document.getElementById(id);
    if (element) element.textContent = text;
  };

  setText('header-logo', strings.header?.logo || '');
  setText('header-title', strings.header?.title || '');

  // 'services.web' is now an object with description and types
  setText('webServiceDescription', strings.services?.web?.description || '');
  const typesEl = document.getElementById('webServiceTypes');
  if (typesEl && Array.isArray(strings.services?.web?.types)) {
    typesEl.innerHTML = strings.services.web.types.map(t => `<li>${t}</li>`).join('');
  }

  setText('softwareService', strings.services?.software || '');

  setText('copyright', strings.footer?.copyright || '');
  const emailEl = document.getElementById('email');
  if (emailEl) {
    emailEl.textContent = strings.footer?.email || '';
    emailEl.href = 'mailto:' + (strings.footer?.email || '');
  }
}

// Update content when strings are loaded
document.addEventListener('DOMContentLoaded', () => {
  // Try to update immediately if strings already loaded
  if (Object.keys(strings).length) updateContent();
});

// Update when strings are fetched
document.addEventListener('stringsLoaded', updateContent);

function toggleMenu() {
  const dropdown = document.getElementById('hamburger-dropdown');
  // This toggles the 'show' class we just created in CSS
  dropdown.classList.toggle('show');
}

function closeMenu() {
  const dropdown = document.getElementById('hamburger-dropdown');
  // This ensures the menu hides after a link is clicked
  dropdown.classList.remove('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.fa-bars')) {
    const dropdown = document.getElementById('hamburger-dropdown');
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}
let strings = {};

async function loadStrings() {
  try {
    const response = await fetch('./strings.json');
    strings = await response.json();
    console.log('Strings loaded successfully');
    document.dispatchEvent(new Event('stringsLoaded'));
  } catch (error) {
    console.error('Error loading strings:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadStrings);
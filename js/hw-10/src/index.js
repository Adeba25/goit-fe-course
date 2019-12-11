import './styles.css';

import elements from './menu.json';
import template from './template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuElements = document.querySelector('.js-menu');

function createMenu() {
  const createdMenu = elements.map(e => template(e)).join('');
  menuElements.insertAdjacentHTML('beforeend', createdMenu);
}

createMenu(elements);

const themeSwhitcher = document.querySelector('.js-switch-input');

themeSwhitcher.addEventListener('change', changeTheme);

const themeMode = localStorage.getItem('theme');
document.body.classList.add(themeMode);

const themeModeSwitcher = localStorage.getItem('checked');
// console.log(themeModeSwitcher);

document.getElementById('theme-switch-control').checked = JSON.parse(
  themeModeSwitcher,
);

function changeTheme(e) {
  if (e.target.checked === true) {
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    localStorage.setItem('checked', true);
    document.body.classList.add(Theme.DARK);
  } else if (e.target.checked !== true) {
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    localStorage.setItem('checked', false);
    document.body.classList.add(Theme.LIGHT);
  }
}

// console.log(document.getElementById('theme-switch-control').checked);

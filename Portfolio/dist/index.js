const button = document.querySelector('#menu-button'); // hamburger icon
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

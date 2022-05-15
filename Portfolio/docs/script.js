const Button = document.querySelector('#menu-button'); // hamburger icon
const NavLink = document.querySelector('.nav-link');

Button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


NavLink.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

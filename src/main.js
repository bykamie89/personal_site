import './style.css';

const CV = document.querySelector('.CV');
const menuItems = document.querySelectorAll('.menuItem');
const menubtn = document.querySelector('.menu_toggle_btn');
const closeIcon = document.querySelector('.closeIcon');
const openTag = document.querySelector('.openTag');

function toggleMenu() {
  if (CV.classList.contains('showMenu')) {
    CV.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    openTag.style.display = 'block';
  } else {
    CV.classList.add('showMenu');
    closeIcon.style.display = 'block';
    openTag.style.display = 'none';
  }
}

menubtn.addEventListener('click', toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});

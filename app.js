const menuList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

function buildMenu() {
  sections.forEach(section => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    
    link.href = `#${section.id}`;
    link.textContent = section.dataset.nav;
    link.classList.add('menu__link');
    
    item.appendChild(link);
    menuList.appendChild(item);
  });
}

function smoothScroll(event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}

function highlightSection() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const inView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    
    if (inView) {
      section.classList.add('your-active-class');
      document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
    } else {
      section.classList.remove('your-active-class');
      document.querySelector(`a[href="#${section.id}"]`).classList.remove('active');
    }
  });
}

function init() {
  buildMenu();
  document.addEventListener('scroll', highlightSection);
  menuList.addEventListener('click', smoothScroll);
}

init();

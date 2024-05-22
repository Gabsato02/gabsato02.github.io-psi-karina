const toggler = document.getElementById('menu-toggler');
const menu = document.getElementById('toggle-menu');

toggler.addEventListener('click', handleToggleMenu);

function handleToggleMenu() {
  toggler.classList.toggle('is-active');
  menu.classList.toggle('is-visible');
}

function handleAnchorLinks() {
  const menuItems = document.querySelectorAll('#toggle-menu a');

  menuItems.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      
      handleToggleMenu();

      setTimeout(() => {
        const targetId = e.target.getAttribute('href').substring(1);

        const targetElement = document.getElementById(targetId);

        const headerElement = document.getElementById('header');

        const targetPosition = targetElement.offsetTop - headerElement.offsetHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }, 600);
    });
  });
}

handleAnchorLinks();
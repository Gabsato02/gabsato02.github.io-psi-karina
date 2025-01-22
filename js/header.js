const toggler = document.getElementById('menu-toggler');
const menu = document.getElementById('toggle-menu');
const floatingCta = document.getElementById('floating-cta');
const bannerCta = document.getElementById('cta');

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

var prevScrollpos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  const hasToggleMenuVisible = document.querySelector('.toggle-menu.is-visible');

  if (!floatingCta.classList.contains('show')) floatingCta.classList.add('show');
  if (!bannerCta.classList.contains('show')) bannerCta.classList.add('show');

  if (prevScrollpos > currentScrollPos || hasToggleMenuVisible) {
    document.getElementById("header").style.opacity = 1;
  } else {
    document.getElementById("header").style.opacity = 0;
  }
  prevScrollpos = currentScrollPos;
}

handleAnchorLinks();
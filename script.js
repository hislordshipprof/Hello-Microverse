const menuButton = document.getElementById("menu-hamburg");
const mobileButton = document.getElementById('menu-wrapper');
const menuButtonClose = document.getElementById('menu-close');
const menuButtonLinks = document.querySelectorAll('.menu-link');
const menuHeader = document.querySelector('.header-container');

function togglemobileButton(element) {
  element.addEventListener('click', (e) => {
    mobileButton.classList.toggle('display-none');
    menuHeader.classList.toggle('display-none');
    menuHeader.classList.toggle('position-fixed');
    document.body.classList.toggle('no-scroll');

    e.preventDefault();
  });
}

togglemobileButton(menuButton);
togglemobileButton(menuButtonClose);

menuButtonLinks.forEach((link) => {
  togglemobileButton(link);
});

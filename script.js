const mainContainer = document.querySelector('.main-container');
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('menu-wrapper');
const menuClose = document.getElementById('menu-close');
const menuLinks = document.querySelectorAll('.menu-link');
const header = document.querySelector('.header-container');

function toggleMobileMenu(element) {
  element.addEventListener('click', () => {
    mobileMenu.classList.toggle('display-none');
    header.classList.toggle('display-none');
    header.classList.toggle('position-fixed');
    mainContainer.classList.toggle('no-scroll');
  });
}

toggleMobileMenu(hamburgerMenu);
toggleMobileMenu(menuClose);

menuLinks.forEach((link) => {
  toggleMobileMenu(link);
});

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  
    $(document).ready(function () {
      $("a").on('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {
            window.location.hash = hash;
          });
        }
      });
    });
  </script>
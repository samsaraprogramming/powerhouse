var prevScroll = 0;

window.addEventListener('scroll', function () {
  var scroll = window.scrollY;
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;

  if (scroll < 50) {
    navbar.classList.remove('navbar-hide');
  } else if (scroll - prevScroll >= 20) {
    navbar.classList.add('navbar-hide');
    prevScroll = scroll;
  } else if (prevScroll - scroll >= 20) {
    navbar.classList.remove('navbar-hide');
    prevScroll = scroll;
  }
});

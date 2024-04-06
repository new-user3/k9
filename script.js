document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const closeBtn = document.querySelector('.close-btn');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  closeBtn.addEventListener('click', function() {
    navLinks.classList.remove('active');
  });
});

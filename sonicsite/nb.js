
document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('check');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar a');

  // Close menu when any nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        checkbox.checked = false;
      }
    });
  });

  // Close menu when clicking outside navbar
  document.addEventListener('click', (e) => {
    const isClickInside = navbar.contains(e.target) || e.target.id === 'check' || e.target.closest('.icons');
    if (!isClickInside && checkbox.checked && window.innerWidth <= 768) {
      checkbox.checked = false;
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuBar = document.querySelector('.menu-bar');
  const menu = document.querySelector('.menu');

  menuBar.addEventListener('click', () => {
      menu.classList.toggle('active');
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolling-active');
      } else {
          navbar.classList.remove('scrolling-active');
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const certificateImages = document.querySelectorAll('.pantai .box img');

  certificateImages.forEach(img => {
      img.addEventListener('click', function() {
          const modal = document.createElement('div');
          modal.classList.add('modal');
          modal.innerHTML = `
              <div class="modal-content">
                  <span class="close-btn">&times;</span>
                  <img src="${img.src}" alt="Certificate" />
              </div>
          `;
          document.body.appendChild(modal);

          const closeBtn = modal.querySelector('.close-btn');
          closeBtn.addEventListener('click', function() {
              document.body.removeChild(modal);
          });

          modal.addEventListener('click', function(e) {
              if (e.target === modal) {
                  document.body.removeChild(modal);
              }
          });
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu a");
    const menuBar = document.querySelector(".menu-bar");
    const menu = document.querySelector(".menu");

    // Function to close the menu
    function closeMenu() {
        menuBar.classList.remove("open");
        menu.classList.remove("open");
    }

    // Close the menu when a menu link is clicked
    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener("click", closeMenu);
    });

    // Toggle the menu when the menu bar is clicked
    menuBar.addEventListener("click", function(event) {
        event.stopPropagation();  // Prevent the event from bubbling up to the document
        menuBar.classList.toggle("open");
        menu.classList.toggle("open");
    });

    // Close the menu when clicking outside the menu and menu bar
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuBar.contains(event.target)) {
            closeMenu();
        }
    });
});

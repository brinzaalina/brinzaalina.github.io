// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("img01").alt = element.alt;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      var home = document.querySelector(".bgimg-1");
      var scrollPosition = window.scrollY;
      var homeHeight = home.offsetHeight;
      var viewportHeight = window.innerHeight;
      var threshold = Math.max(homeHeight, viewportHeight) * 0.6;
      if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " custom-pale-blue";
          if (scrollPosition > threshold) {
              home.style.opacity = "1";
          } else {
              home.style.opacity = "";
          }
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top custom-pale-blue", "");
          home.style.opacity = "";
      }
      
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }

  document.querySelectorAll('img[role="button"]').forEach(img => {
    img.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        onClick(img);
      }
    });
  });

  ocument.querySelectorAll('p[role="button"]').forEach(img => {
    img.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        onClick(img);
      }
    });
  });
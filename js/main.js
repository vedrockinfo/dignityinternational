document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY > 300) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});

jQuery(document).ready(function () {
  jQuery(".dropdown").click(function () {
    jQuery(".dropdown-menu").toggleClass("dd-active");
  });
});

jQuery(document).ready(function () {
  jQuery('.form-control').on('focus', function () {
    jQuery(this).parent().addClass('focused');
  }).on('blur', function () {
    jQuery(this).parent().removeClass('focused');
  }).on('input', function () {
    jQuery(this).parent().addClass('inputted');
  });

});

function showTabFromHash() {
  const hash = window.location.hash;
  const tabContents = document.querySelectorAll('.tab-content-wrapper');
  const tabLinks = document.querySelectorAll('.tab-link');

  tabContents.forEach(tab => tab.classList.remove('active'));
  tabLinks.forEach(link => link.classList.remove('active'));

  if (hash) {
    const activeTab = document.querySelector(hash);
    const activeLink = document.querySelector(`#link-${hash.substring(1)}`);
    if (activeTab && activeLink) {
      activeTab.classList.add('active');
      activeLink.classList.add('active');
    }
  } else {
    if (tabContents.length > 0) {
      tabContents[0].classList.add('active');
    }
    if (tabLinks.length > 0) {
      tabLinks[0].classList.add('active');
    }
  }
}

window.addEventListener('hashchange', showTabFromHash);
document.addEventListener('DOMContentLoaded', showTabFromHash);




document.addEventListener('DOMContentLoaded', () => {
  const map = document.getElementById('chronological-graph');
  const popups = {
      'growth': document.getElementById('growth-popup'),
      'crisis': document.getElementById('crisis-popup'),
      'expansion': document.getElementById('expansion-popup'),
      'international': document.getElementById('international-popup'),
  };

  // Display the growth popup when the page loads and hide others
  popups['growth'].style.display = 'block';
  Object.keys(popups).forEach(key => {
      if (key !== 'growth') {
          popups[key].style.display = 'none';
      }
  });

  map.addEventListener('click', (event) => {
      const stateId = event.target.id;

      if (stateId === 'poineering') {
          // Scroll to the section with ID 'ministry'
          const sectionMinistry = document.getElementById('ministry');
          sectionMinistry.scrollIntoView({
              behavior: 'smooth' // Optional: adds smooth scrolling effect
          });
      } else if (popups[stateId]) {
          // Hide all popups
          Object.values(popups).forEach(popup => popup.style.display = 'none');

          // Show the clicked state's popup
          const popup = popups[stateId];
          popup.style.display = 'block';

          // Calculate position
          const rect = event.target.getBoundingClientRect();
          const offsetX = 10; // Adjust if needed
          const offsetY = 10; // Adjust if needed
          popup.style.left = `${rect.left + window.scrollX + offsetX}px`;
          popup.style.top = `${rect.top + window.scrollY + offsetY}px`;
      }
  });

  // Optionally, add a click listener to the document to hide popups when clicking outside
  document.addEventListener('click', (event) => {
      if (!event.target.closest('#chronological-graph') && !event.target.closest('.popup')) {
          Object.values(popups).forEach(popup => popup.style.display = 'none');
      }
  });

  // Prevent event propagation to document when clicking on a popup
  Object.values(popups).forEach(popup => {
      popup.addEventListener('click', (event) => {
          event.stopPropagation();
      });
  });
});



const video = document.getElementById('myVideo');
    const volumeButton = document.getElementById('volumeButton');

    document.addEventListener('click', (event) => {
      if (video.muted) {
        video.muted = false;
        volumeButton.textContent = '🔇';
      } else {
        video.muted = true;
        volumeButton.textContent = '🔊';
      }
    });

    // $(document).ready(function () {
    //   var path = window.location.pathname.split("/").pop();
    //   if (path == '') {
    //     path = 'index.html';
    //   }
    //   $('.navbar-nav a[href="' + path + '"]').addClass('active');
    // });

  document.addEventListener('DOMContentLoaded', function () {
    // Function to update active class
    function updateActiveClass() {
      var path = window.location.pathname.split("/").pop();
      
      // If path is empty, set it to 'index.html'
      if (path == '') {
        path = 'index.html';
      }

      // Remove active class from all nav links
      document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
        link.classList.remove('active');
      });

      // Add active class to the current nav link
      var activeLink = document.querySelector('.navbar-nav .nav-link[href="' + path + '"]');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }

    // Initial update on page load
    updateActiveClass();

    // Update active class on link click
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
          link.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });


  $('.volunteers-slide').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  })

  $('.gcommittee').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  })

  $('.engagement-grid').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  })

  $('.internal-global-team').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  })
  $('.literacry-ss-grid').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 5
      }
    }
  })

  $('.impact-carousing').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })

  $('.my-reports').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  })

  $('.newspaper').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  })
  
  $('.videos').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })

  

  $('.hjhu').each(function() {
    var dataImage = $(this).attr('data-image');
    if (dataImage) {
        $(this).attr('src', dataImage);
    }
});


function handleRadioSelection(radio) {
  var parentElement = document.getElementById('partnerwithus');

  if (radio.value === 'no') {
    // Add the 'highlight' class to the parent element when 'No' is selected
    parentElement.classList.add('highlight');
  } else {
    // Remove the 'highlight' class when 'Yes' is selected
    parentElement.classList.remove('highlight');
  }
}

jQuery(document).ready(function () {
  jQuery(".dropdown-toggle").click(function () {
    jQuery(".dropdown-toggle + ul.dropdown-menu").slideToggle();
  })
})

jQuery(".w-org input#no").click(function () {
  jQuery(".oth-int").hide();
});

jQuery(".w-org input#yes").click(function () {
  jQuery(".oth-int").show();
});

jQuery(document).ready(function () {
  jQuery('input[value="Other"]').change(function () {
    if (jQuery(this).is(":checked")) {
      jQuery(this).closest(".intersted-grid").addClass('other-checked');
    } else {
      jQuery(this).closest(".intersted-grid").removeClass('other-checked');
    }
  });
});
jQuery(document).ready(function () {
  jQuery('input[value="Other"]').change(function () {
    if (jQuery(this).is(":checked")) {
      jQuery(this).closest(".expertise-grid").addClass('other-checked');
    } else {
      jQuery(this).closest(".expertise-grid").removeClass('other-checked');
    }
  });
});



document.addEventListener('DOMContentLoaded', function () {
  function updateHeroContent(innerSectionId) {
      const heroSection = document.querySelector('.hero-section .bg-video');
      const newContent = document.querySelector(`#${innerSectionId}`).innerHTML;
      heroSection.innerHTML = newContent;

      // Save the current tab in localStorage
      localStorage.setItem('activeTab', innerSectionId);
  }

  const abts = document.querySelectorAll('.abts .abt');
  abts.forEach(abt => {
      abt.addEventListener('click', function () {
          const targetSectionId = this.getAttribute('data-tab');
          updateHeroContent(targetSectionId);
      });
  });

  // Load the last active tab from localStorage, or default to "story"
  const savedTab = localStorage.getItem('activeTab') || 'story';
  updateHeroContent(savedTab);
});

(function () {
  'use strict';

  // Load event
  window.addEventListener('load', function () {
    document.querySelector('.loader').style.display = 'none';

    var imgElements = document.querySelectorAll('.bg_img');
    imgElements.forEach(function (img) {
      var bg = 'url(' + img.getAttribute('data-img') + ')';
      img.style.backgroundImage = bg;
    });

    var gallery = document.querySelector('.grid-area');
    if (gallery) {
      new Isotope(gallery, {
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: 1,
        },
      });
    }
  });

  // Ready event
  document.addEventListener('DOMContentLoaded', function () {
    // NiceSelect (if needed)
    // Replace .niceSelect() if you have alternative JS for custom select

    // MagnificPopup initialization
    var magnificPopups = document.querySelectorAll('.magnific_popup');
    magnificPopups.forEach(function (popup) {
      // Initialize magnificPopup using JS alternative
    });

    document.querySelectorAll('.magnific_img_popup').forEach(function (popup) {
      // Initialize image popup with gallery support
    });

    // Event handling for opening/closing event items
    document
      .querySelectorAll('.events-area .event-item')
      .forEach(function (item) {
        item.addEventListener('click', function () {
          if (!item.classList.contains('open')) {
            document
              .querySelectorAll('.event-item.open')
              .forEach(function (openItem) {
                openItem.querySelector('.extra-cont').style.display = 'none';
                openItem.classList.remove('open');
              });

            item.classList.add('open');
            item.querySelector('.extra-cont').style.display = 'block';
          }
        });
      });

    // Menu item hover handling
    document.querySelectorAll('ul>li>.submenu').forEach(function (submenu) {
      submenu.parentNode.classList.add('menu-item-has-children');
    });

    document.querySelectorAll('ul').forEach(function (ul) {
      ul.parentElement.addEventListener('mouseenter', function () {
        var menu = this.querySelector('ul');
        if (menu) {
          var menuPos = menu.getBoundingClientRect();
          if (menuPos.right > window.innerWidth) {
            menu.style.left = -menu.offsetWidth + 'px';
          }
        }
      });
    });

    // Mobile menu toggle
    document.querySelector('.header').addEventListener('click', function () {
      this.classList.toggle('active');
      document.querySelector('.mobile').classList.toggle('active');
    });

    document
      .querySelector('.close-mobile-menu')
      .addEventListener('click', function () {
        document.querySelector('.mobile').classList.remove('active');
        document.querySelector('.header').classList.remove('active');
      });

    // Scroll to top button
    var scrollTop = document.querySelector('.go-top');
    window.addEventListener('scroll', function () {
      if (window.scrollY < 500) {
        scrollTop.classList.remove('active');
      } else {
        scrollTop.classList.add('active');
      }
    });

    scrollTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Header active on scroll
    var header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
      if (window.scrollY < 1) {
        header.classList.remove('active');
      } else {
        header.classList.add('active');
      }
    });

    // Sponsor slider (replace with a vanilla JS carousel library)
    var sponsorSlider = document.querySelector(
      '.sponsor-slider, .sponsor-slider-2',
    );
    if (sponsorSlider) {
      // Initialize OwlCarousel replacement for sponsor slider
    }

    // Testimonial slider
    var testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
      // Initialize OwlCarousel replacement for testimonial slider
    }

    // Blog slider
    var blogSlider = document.querySelector('.blog-slider');
    if (blogSlider) {
      // Initialize OwlCarousel replacement for blog slider
    }

    // Custom events for carousel navigation
    document
      .querySelector('.testimoni-prev')
      .addEventListener('click', function () {
        // Trigger previous slide
      });

    document
      .querySelector('.testimoni-next')
      .addEventListener('click', function () {
        // Trigger next slide
      });

    // Social icons hover effect
    document
      .querySelectorAll('.social-icons li a')
      .forEach(function (socialIcon) {
        socialIcon.addEventListener('mouseover', function () {
          document
            .querySelectorAll('.social-icons li a')
            .forEach(function (sibling) {
              sibling.classList.remove('active');
            });
          this.classList.add('active');
        });
      });
    const odometers = document.querySelectorAll('.odometer');

    function animateValue(odometer, start, end, duration) {
      let startTime = null;

      // Hàm hoạt động mỗi khi frame mới của animation được gọi
      function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const percentage = Math.min(progress / duration, 1); // Tính tỷ lệ phần trăm hoàn thành
        const currentValue = Math.floor(percentage * (end - start) + start);
        odometer.textContent = currentValue; // Cập nhật giá trị cho phần tử

        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }

    odometers.forEach((odometer) => {
      const endValue = parseInt(odometer.getAttribute('data-odo'), 10);
      animateValue(odometer, 0, endValue, 2000);
    });
  });
  new Swiper('.sponsor-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      750: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1500: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
    },
  });
  new Swiper('.testimoni-swiper', {
    direction: 'horizontal',
    breakpoints: {
      750: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: '.testimoni-slider__item--next',
      prevEl: '.testimoni-slider__item--prev',
    },
  });
})();

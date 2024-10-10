/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/template/D326M3E/assets/js/home-v1.js":
/*!******************************************************!*\
  !*** ./public/template/D326M3E/assets/js/home-v1.js ***!
  \******************************************************/
/***/ (() => {

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
          columnWidth: 1
        }
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
    document.querySelectorAll('.events-area .event-item').forEach(function (item) {
      item.addEventListener('click', function () {
        if (!item.classList.contains('open')) {
          document.querySelectorAll('.event-item.open').forEach(function (openItem) {
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
    document.querySelector('.close-mobile-menu').addEventListener('click', function () {
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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
    var sponsorSlider = document.querySelector('.sponsor-slider, .sponsor-slider-2');
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
    document.querySelector('.testimoni-prev').addEventListener('click', function () {
      // Trigger previous slide
    });
    document.querySelector('.testimoni-next').addEventListener('click', function () {
      // Trigger next slide
    });

    // Social icons hover effect
    document.querySelectorAll('.social-icons li a').forEach(function (socialIcon) {
      socialIcon.addEventListener('mouseover', function () {
        document.querySelectorAll('.social-icons li a').forEach(function (sibling) {
          sibling.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
    var odometers = document.querySelectorAll('.odometer');
    function animateValue(odometer, start, end, duration) {
      var startTime = null;

      // Hàm hoạt động mỗi khi frame mới của animation được gọi
      function step(currentTime) {
        if (!startTime) startTime = currentTime;
        var progress = currentTime - startTime;
        var percentage = Math.min(progress / duration, 1); // Tính tỷ lệ phần trăm hoàn thành
        var currentValue = Math.floor(percentage * (end - start) + start);
        odometer.textContent = currentValue; // Cập nhật giá trị cho phần tử

        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }
      requestAnimationFrame(step);
    }
    odometers.forEach(function (odometer) {
      var endValue = parseInt(odometer.getAttribute('data-odo'), 10);
      animateValue(odometer, 0, endValue, 2000);
    });
  });
  new Swiper('.sponsor-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    breakpoints: {
      750: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      1500: {
        slidesPerView: 7,
        spaceBetween: 50
      }
    }
  });
  new Swiper('.testimoni-swiper', {
    direction: 'horizontal',
    breakpoints: {
      750: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
    navigation: {
      nextEl: '.testimoni-slider__item--next',
      prevEl: '.testimoni-slider__item--prev'
    }
  });
})();

/***/ }),

/***/ "./public/assets/global.scss":
/*!***********************************!*\
  !*** ./public/assets/global.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/template/D326M3E/assets/sass/global.scss":
/*!*********************************************************!*\
  !*** ./public/template/D326M3E/assets/sass/global.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/template/D326M3E/assets/sass/common.scss":
/*!*********************************************************!*\
  !*** ./public/template/D326M3E/assets/sass/common.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/template/D326M3E/assets/sass/home-v1.scss":
/*!**********************************************************!*\
  !*** ./public/template/D326M3E/assets/sass/home-v1.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/template/D326M3E/dist/js/home-v1": 0,
/******/ 			"public/template/D326M3E/dist/css/common": 0,
/******/ 			"public/template/D326M3E/dist/css/home-v1": 0,
/******/ 			"public/template/D326M3E/dist/css/global": 0,
/******/ 			"public/dist/global": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp"] = self["webpackChunkapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/template/D326M3E/dist/css/common","public/template/D326M3E/dist/css/home-v1","public/template/D326M3E/dist/css/global","public/dist/global"], () => (__webpack_require__("./public/template/D326M3E/assets/js/home-v1.js")))
/******/ 	__webpack_require__.O(undefined, ["public/template/D326M3E/dist/css/common","public/template/D326M3E/dist/css/home-v1","public/template/D326M3E/dist/css/global","public/dist/global"], () => (__webpack_require__("./public/assets/global.scss")))
/******/ 	__webpack_require__.O(undefined, ["public/template/D326M3E/dist/css/common","public/template/D326M3E/dist/css/home-v1","public/template/D326M3E/dist/css/global","public/dist/global"], () => (__webpack_require__("./public/template/D326M3E/assets/sass/global.scss")))
/******/ 	__webpack_require__.O(undefined, ["public/template/D326M3E/dist/css/common","public/template/D326M3E/dist/css/home-v1","public/template/D326M3E/dist/css/global","public/dist/global"], () => (__webpack_require__("./public/template/D326M3E/assets/sass/common.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/template/D326M3E/dist/css/common","public/template/D326M3E/dist/css/home-v1","public/template/D326M3E/dist/css/global","public/dist/global"], () => (__webpack_require__("./public/template/D326M3E/assets/sass/home-v1.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
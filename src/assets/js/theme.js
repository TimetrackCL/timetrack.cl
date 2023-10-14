/*
Template Name: Prompt - Tailwind CSS Multipurpose Landing Page Template
Version: 1.1.0
Author: coderthemes
Email: support@coderthemes.com
*/

function init() {

    // Animation on Scroll (Plugin)
    AOS.init();

    // Topnav Active Menu
    function initTopnav() {

        // Menu Active
        const pageUrl = window.location.href.split(/[?#]/)[0];
        const navbarLinks = Array.from(document.querySelectorAll('#navbar .navbar-nav a'));

        navbarLinks.forEach((link) => {
            if (link.href === pageUrl) {
                link.classList.add('active');

                const parentMenu = link.parentElement.parentElement.parentElement;
                if (parentMenu?.classList.contains('nav-item')) {
                    const dropdownElement = parentMenu.querySelector('[data-fc-type="dropdown"]');
                    dropdownElement?.classList.add('active');
                }

                const parentParentMenu = link.parentElement.parentElement.parentElement.parentElement.parentElement;
                if (parentParentMenu?.classList.contains('nav-item')) {
                    const dropdownElement = parentParentMenu.querySelector('[data-fc-type="dropdown"]');
                    dropdownElement?.classList.add('active');
                }
            }
        });
    }

    // Mobile Menu Active
    function initMobileNav() {
        const pageUrl = window.location.href.split(/[?#]/)[0];
        const navbarLinks = Array.from(document.querySelectorAll('#mobileMenu .navbar-nav a'));

        navbarLinks.forEach((link) => {
            
            link.addEventListener('click', () => {
                const closeButton = document.querySelector('[data-fc-dismiss]');
                closeButton.click();  // Desencadena un clic en el botón de cerrar
    
            });
    
            if (link.href === pageUrl) {
                link.classList.add('active');
                const parentMenu = link.parentElement.parentElement.parentElement;
                const parentCollapse = link.parentElement.parentElement;
                if (parentMenu?.classList.contains('nav-item')) {
                    const collapseElement = parentMenu.querySelector('[data-fc-type="collapse"]');
                    collapseElement.classList.add('active');
                    if (collapseElement) {
                        const collapse = frost.Collapse.getInstanceOrCreate(collapseElement);
                        collapse.show();
                        if (parentCollapse) {
                            parentCollapse.style.height = null;
                        }
                    }
                }
            }
        });
    }

    // Topbar Sticky
    function initStickyNav() {
        // Sticky Navbar
        function windowScroll() {
            const navbar = document.getElementById("navbar");
            if (navbar) {
                if (document.body.scrollTop >= 75 || document.documentElement.scrollTop >= 75) {
                    navbar.classList.add("nav-sticky");

                } else {
                    navbar.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", (ev) => {
            ev.preventDefault();
            windowScroll();
        });

    }

    // Back To Top
    function initBacktoTop() {

        const mybutton = document.querySelector('[data-toggle="back-to-top"]');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 72) {
                mybutton.classList.add('flex');
                mybutton.classList.remove('hidden');

            } else {
                mybutton.classList.remove('flex');
                mybutton.classList.add('hidden');
            }
        });

        if (mybutton) {
            mybutton.addEventListener('click', function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // Swiper ( One card ) (Plugin)
    function initswiperOne() {
        new Swiper("#swiper_one", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            rewind: true,
            navigation: {
                nextEl: ".button-next",
                prevEl: ".button-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
            },
        });
    };

    // Swiper ( Two card ) (Plugin)
    function initswiperTwo() {
        new Swiper("#swiper_two", {
            slidesPerView: 1,
            loop: true,
            autoHeight: true,
            spaceBetween: 30,
            navigation: {
                nextEl: ".button-next",
                prevEl: ".button-prev",
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
            },
        });
    };

    // Text Animation 
    function initTypewrite() {
        var TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
            var that = this;
            var delta = 200 - Math.random() * 100;
            if (this.isDeleting) {
                delta /= 2;
            }
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }
            setTimeout(function () {
                that.tick();
            }, delta);
        };

        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    }
    function ajustLogoScroll() {
        const logo_light = document.querySelector('.logo-light');
        const logo_dark = document.querySelector('.logo-dark');
    
        window.addEventListener('scroll', () => {
            const addClass = window.scrollY > 0 ? 'h-10' : 'h-16';
            const removeClass = window.scrollY > 0 ? 'h-16' : 'h-10';
    
            [logo_light, logo_dark].forEach(logo => {
                logo.classList.remove(removeClass);
                logo.classList.add(addClass);
            });
        });
    }
    
    function activeItemMenuWithScroll() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
              document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
              link.classList.add('active');
            });
          });

          let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                let id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
                } else {
                    document.querySelector(`.nav-link[href="#${id}"]`).classList.remove('active');
                }
            });
        });
        
        // Observar todas las secciones
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        
    }
    activeItemMenuWithScroll();
    ajustLogoScroll();

    initMobileNav();
    initTopnav();
    initStickyNav();
    initBacktoTop();
    initswiperOne();
    initswiperTwo();
    window.onload = initTypewrite();

};

init();
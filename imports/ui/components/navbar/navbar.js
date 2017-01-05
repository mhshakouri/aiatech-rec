import './navbar.html';
Template.myNavbar.helpers({
    categories: function() {
        return Categories.find({}, {
            sort: {
                order: 1
            }
        });
    },
    switchText: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'English'
        }
        return 'فارسی';
    },
    switchClass: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'js-switch-to-en';
        }
        return 'js-switch-to-fa';
    },
    homeText: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'صفحه نخست';
        }
        return 'Home';
    },
    productsText: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'محصولات';
        }
        return 'Products';
    },
    aboutusText: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'درباره ما';
        }
        return 'About Us';
    },
    optionalFeaturesText: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'امکانات جانبی';
        }
        return 'Optional Features';
    },
    partnersText: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'همکاران';
        }
        return 'Partners';
    },
    contactusText: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'تماس با ما';
        }
        return 'Contact Us';
    }
});
Template.myNavbar.onRendered(function(){

    Meteor.setTimeout(function() {
        pageStackNavigation = (function(window) {
            var support = stack = document.querySelector('.pages-stack'),
                pages = [].slice.call(stack.children),
                pagesTotal = pages.length;
                frame = document.querySelector('.pages-stack .page'),
                current = 0,
                menuCtrl = document.querySelector('button.menu-button'),
                nav = document.querySelector('.pages-nav'),
                navItems = [].slice.call(nav.querySelectorAll('.link--page')),
                isMenuOpen = false;
            function initEvents() {
                menuCtrl.addEventListener('click', toggleMenu);
                navItems.forEach(function(item) {
                    var target = item.getAttribute('href');
                    item.addEventListener('click', function(event) {
                        if (isMenuOpen) {
                            event.preventDefault();
                            var activeMenu = nav.querySelector('.active');
                            openPage();
                            isMenuOpen = false;
                            Router.go(target);
                            classie.remove(activeMenu, 'active');
                            classie.add(ev.target, 'active');
                        }
                    });
                });
                frame.addEventListener('click', function(ev) {
                    if (isMenuOpen) {
                        ev.preventDefault();
                        openPage();
                        isMenuOpen = false;
                    }
                });
                document.addEventListener('keydown', function(ev) {
                    if (!isMenuOpen) return;
                    var keyCode = ev.keyCode || ev.which;
                    if (keyCode === 27) {
                        closeMenu();
                    }
                });
            }
            function toggleMenu() {
                if (isMenuOpen) {
                    closeMenu();
                    isMenuOpen = false;
                } else {
                    openMenu();
                    isMenuOpen = true;
                }
            }
            function openMenu() {
                classie.add(menuCtrl, 'menu-button--open')
                classie.add(stack, 'pages-stack--open');
                classie.add(nav, 'pages-nav--open');
            }
            function closeMenu() {
                openPage();
            }
            function openPage() {
                isMenuOpen = false;
                classie.remove(menuCtrl, 'menu-button--open');
                classie.remove(nav, 'pages-nav--open');
                classie.remove(stack, 'pages-stack--open');
            }
            initEvents();

        })(window);
    }, 500); 
});
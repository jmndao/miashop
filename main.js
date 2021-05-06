// sidenav
var sidenav = document.querySelector(".sidenav");
M.Sidenav.init(sidenav, {});

// carousel
var slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators: false,
});

// Sidenav dropdown
var dropdown_trigger = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdown_trigger, {
    coverTrigger: false,
    inDuration: 300,
    outDuration: 250,
    hover: true,
});

// Carousel
var carousel = document.querySelector('.carousel');
M.Carousel.init(carousel, {
    indicators: false,
});
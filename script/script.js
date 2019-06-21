const lineDrawing = anime({
    targets: '.main-title .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 9000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

  let typed = new Typed('.typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 110,
    startDelay: 500,
		backSpeed: 40
  });


  function toggleNav() {
    $('.nav-icon').toggleClass('open');
    if ($('.nav-icon').hasClass('open')) {
      setTimeout(function(){
        $('.nav-content').toggleClass('visible-content')
      },400);
    } else {
      $('.nav-content').toggleClass('visible-content');
    }
    $('.nav-overlay').toggleClass('visible-nav');
    $('.visible-nav').css('width', '100%');
  }

  $('li').click(function(){
    $('.visible-nav').css('width', '0');
    toggleNav();
  });


$(document).ready(function(){
    $('.nav-icon').click(function(){
      toggleNav();
    });
    AOS.init();

    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800
    });

let controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        duration: 800,  
        triggerElement: ".about-intro" 
    })
    .addTo(controller)
    .setClassToggle(".about-intro", "typewriter");
});
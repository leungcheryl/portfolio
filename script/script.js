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
    typeSpeed: 120,
    startDelay: 1200,
		backSpeed: 50
  });

  function toggleNav() {
    $('.nav-icon').toggleClass('open');
    if ($('.nav-icon').hasClass('open')) {
      setTimeout(function(){
        $('.nav-content').toggleClass('visible-content')
      },400);
    } else {
      $('.nav-content').toggleClass('visible-content')
    }
    $('.nav-overlay').toggleClass('visible');
    $('.visible').css('width', '100%');
  }

  $('li').click(function(){
    $('.visible').css('width', '0');
    toggleNav();
  });

$(document).ready(function(){
    $('.nav-icon').click(function(){
      toggleNav();
    });
  
});
const lineDrawing = anime({
    targets: '.main-title .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 9000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

  const typed = new Typed('.typed', {
    stringsElement: '.typed-strings'
  });

$(document).ready(function(){

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

    $('.nav-icon').click(function(){
      toggleNav();
    });


    
});
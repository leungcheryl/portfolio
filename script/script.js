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
    typeSpeed: 180,
    startDelay: 1200,
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



  // DEMOS
  // drive-solo 
  $('.ds-static').click(function(){
    $('.gifs-ds').removeClass('show-desktop').removeClass('show-mobile');
    $('.gifs-ds').hide();
    $('.gifs-ds').toggleClass('show-static');
    demoStaticDs();
  })

  $('.ds-desktop').click(function(){
    $('.gifs-ds').removeClass('show-static').removeClass('show-mobile');
    $('.gifs-ds').hide();
    $('.gifs-ds').toggleClass('show-desktop');
    demoDesktopDs();
  });
  
  $('.ds-mobile').click(function(){
    $('.gifs-ds').removeClass('show-static').removeClass('show-deskop');
    $('.gifs-ds').hide();
    $('.gifs-ds').toggleClass('show-mobile');
    demoMobileDs();
  });

  function demoStaticDs() {
    if ($('.gifs-ds').hasClass('show-static')) {
      $('.static-ds').fadeIn('slow');
      $('.static-txt.ds').css('color','#9EBED0');
      $('.mobile-txt.ds').css('color','white');
      $('.desktop-txt.ds').css('color','white');
    } else {
      $('.static-ds').show();
      $('.static-txt.ds').css('color','#9EBED0');
      $('.mobile-txt.ds').css('color','white');
      $('.desktop-txt.ds').css('color','white');
    }
  }

  function demoDesktopDs() {
    if ($('.gifs-ds').hasClass('show-desktop')) {
      $('.desktop-ds').fadeIn('slow');
      $('.desktop-txt.ds').css('color','#96D7C8');
      $('.mobile-txt.ds').css('color','white');
      $('.static-txt.ds').css('color','white');
    } else {
      $('.desktop-ds').show();
      $('.desktop-txt.ds').css('color','#96D7C8');
      $('.mobile-txt.ds').css('color','white');
      $('.static-txt.ds').css('color','white');
    }
  }
  
  function demoMobileDs() {
    if ($('.gifs-ds').hasClass('show-mobile')) {
      $('.mobile-ds').fadeIn('slow');
      $('.mobile-txt.ds').css('color','#A995DE');
      $('.desktop-txt.ds').css('color','white');
      $('.static-txt.ds').css('color','white');
    } else {
      $('.mobile-ds').show();
      $('.mobile-txt.ds').css('color','#A995DE');
      $('.desktop-txt.ds').css('color','white');
      $('.static-txt.ds').css('color','white');
    }
  }

// cute killer robots

$('.ckr-static').click(function(){
  $('.gifs-ckr').removeClass('show-desktop').removeClass('show-mobile');
  $('.gifs-ckr').hide();
  $('.gifs-ckr').toggleClass('show-static');
  demoStaticCkr();
})

$('.ckr-desktop').click(function(){
  $('.gifs-ckr').removeClass('show-static').removeClass('show-mobile');
  $('.gifs-ckr').hide();
  $('.gifs-ckr').toggleClass('show-desktop');
  demoDesktopCkr();
});

$('.ckr-mobile').click(function(){
  $('.gifs-ckr').removeClass('show-static').removeClass('show-deskop');
  $('.gifs-ckr').hide();
  $('.gifs-ckr').toggleClass('show-mobile');
  demoMobileCkr();
});

function demoStaticCkr() {
  if ($('.gifs-ckr').hasClass('show-static')) {
    $('.static-ckr').fadeIn('slow');
    $('.static-txt.ckr').css('color','#9EBED0');
    $('.mobile-txt.ckr').css('color','white');
    $('.desktop-txt.ckr').css('color','white');
  } else {
    $('.static-ckr').show();
    $('.static-txt.ckr').css('color','#9EBED0');
    $('.mobile-txt.ckr').css('color','white');
    $('.desktop-txt.ckr').css('color','white');
  }
}

function demoDesktopCkr() {
  if ($('.gifs-ckr').hasClass('show-desktop')) {
    $('.desktop-ckr').fadeIn('slow');
    $('.desktop-txt.ckr').css('color','#96D7C8');
    $('.mobile-txt.ckr').css('color','white');
    $('.static-txt.ckr').css('color','white');
  } else {
    $('.desktop-ckr').show();
    $('.desktop-txt.ckr').css('color','#96D7C8');
    $('.mobile-txt.ckr').css('color','white');
    $('.static-txt.ckr').css('color','white');
  }
}

function demoMobileCkr() {
  if ($('.gifs-ckr').hasClass('show-mobile')) {
    $('.mobile-ckr').fadeIn('slow');
    $('.mobile-txt.ckr').css('color','#A995DE');
    $('.desktop-txt.ckr').css('color','white');
    $('.static-txt.ckr').css('color','white');
  } else {
    $('.mobile-ckr').show();
    $('.mobile-txt.ckr').css('color','#A995DE');
    $('.desktop-txt.ckr').css('color','white');
    $('.static-txt.ckr').css('color','white');
  }
}

// fashion and art


$('.static-demo').click(function(){
  $('.gifs-faa').removeClass('show-desktop').removeClass('show-mobile');
  $('.gifs-faa').hide();
  $('.gifs-faa').toggleClass('show-static');
  demoStaticFaa();
})

$('.desktop-demo').click(function(){
  $('.gifs-faa').removeClass('show-static').removeClass('show-mobile');
  $('.gifs-faa').hide();
  $('.gifs-faa').toggleClass('show-desktop');
  demoDesktopFaa();
});

$('.mobile-demo').click(function(){
  $('.gifs-faa').removeClass('show-static').removeClass('show-deskop');
  $('.gifs-faa').hide();
  $('.gifs-faa').toggleClass('show-mobile');
  demoMobileFaa();
});

$('.lookbook-demo').click(function(){
  $('.gifs-faa').removeClass('show-static').removeClass('show-deskop');
  $('.gifs-faa').hide();
  $('.gifs-faa').toggleClass('show-lookbook');
  demoLookbookFaa();
});

function demoStaticFaa() {
  if ($('.gifs-faa').hasClass('show-static')) {
    $('.static-faa').fadeIn('slow');
    $('.static-txt.faa').css('color','#9EBED0');
    $('.mobile-txt.faa').css('color','white');
    $('.desktop-txt.faa').css('color','white');
    $('.lookbook-txt.faa').css('color','#E6C0C2');
  } else {
    $('.static-faa').show();
  }
}

function demoDesktopFaa() {
  if ($('.gifs-ckr').hasClass('show-desktop')) {
    $('.desktop-faa').fadeIn('slow');
    $('.desktop-txt.faa').css('color','#96D7C8');
    $('.mobile-txt.faa').css('color','white');
    $('.static-txt.faa').css('color','white');
    $('.lookbook-txt.faa').css('color','white');
  } else {
    $('.desktop-faa').show();
  }
}

function demoMobileFaa() {
  if ($('.gifs-faa').hasClass('show-mobile')) {
    $('.mobile-faa').fadeIn('slow');
    $('.mobile-txt.faa').css('color','#A995DE');
    $('.desktop-txt.faa').css('color','white');
    $('.static-txt.faa').css('color','white');
    $('.lookbook-txt.faa').css('color','white');
  } else {
    $('.mobile-faa').show();
  }
}

function demoLookbookFaa() {
  if ($('.gifs-faa').hasClass('show-lookbook')) {
    $('.lookbook-faa').fadeIn('slow');
    $('.mobile-txt.faa').css('color','white');
    $('.desktop-txt.faa').css('color','white');
    $('.static-txt.faa').css('color','white');
    $('.lookbook-txt.faa').css('color','#E6C0C2');
  } else {
    $('.lookbook-faa').show();
  }
}


$(document).ready(function(){
    $('.nav-icon').click(function(){
      toggleNav();
    });
    AOS.init();

    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1100
    });


  let controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
        duration: 800,  
        triggerElement: ".about-intro" 
    })
    .addTo(controller)
    .setClassToggle(".about-intro", "typewriter");

    $('.vid').on('loadstart', function (event) {
      $(this).addClass('loading');
    });
    $('.vid').on('canplay', function (event) {
      $(this).removeClass('loading');
    });
  
  
});
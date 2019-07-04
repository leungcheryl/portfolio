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
    typeSpeed: 100,
    startDelay: 2500,
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


$('.faa-static').click(function(){
  $('.gifs-faa').removeClass('show-desktop').removeClass('show-mobile').removeClass('show-lookbook');
  $('.gifs-faa').hide();
  $('.gifs-faa').toggleClass('show-static');
  demoStaticFaa();
})

$('.faa-desktop').click(function(){
  $('.gifs-faa').removeClass('show-static').removeClass('show-mobile').removeClass('show-lookbook');
  $('.gifs-faa').hide();
  $('.gifs-faa').toggleClass('show-desktop');
  demoDesktopFaa();
});

$('.faa-mobile').click(function(){
  $('.gifs-faa').removeClass('show-static').removeClass('show-deskop').removeClass('show-lookbook');
  $('.gifs-faa').hide();
  $('.gifs-faa').toggleClass('show-mobile');
  demoMobileFaa();
});

$('.faa-lookbook').click(function(){
  $('.gifs-faa').removeClass('show-static').removeClass('show-deskop').removeClass('show-mobile');
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
  if ($('.gifs-faa').hasClass('show-desktop')) {
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



// woo-commerce 

$('.zw-static').click(function(){
  $('.gifs-zw').removeClass('show-desktop');
  $('.gifs-zw').hide();
  $('.gifs-zw').toggleClass('show-static');
  demoStaticZw();
})

$('.zw-desktop').click(function(){
  $('.gifs-zw').removeClass('show-static')
  $('.gifs-zw').hide();
  $('.gifs-zw').toggleClass('show-desktop');
  demoDesktopZw();
});

function demoStaticZw() {
  if ($('.gifs-zw').hasClass('show-static')) {
    $('.static-zw').fadeIn('slow');
    $('.static-txt.zw').css('color','#9EBED0');
    $('.desktop-txt.zw').css('color','white');
  } else {
    $('.static-ckr').show();
    $('.static-txt.zw').css('color','#9EBED0');
    $('.desktop-txt.zw').css('color','white');
  }
}

function demoDesktopZw() {
  if ($('.gifs-zw').hasClass('show-desktop')) {
    $('.desktop-zw').fadeIn('slow');
    $('.desktop-txt.zw').css('color','#96D7C8');
    $('.static-txt.zw').css('color','white');
  } else {
    $('.desktop-zw').show();
    $('.desktop-txt.zw').css('color','#96D7C8');
    $('.static-txt.zw').css('color','white');
  }
}

//

// animal collectives 


$('.ac-static').click(function(){
  $('.gifs-ac').removeClass('show-desktop').removeClass('show-mobile');
  $('.gifs-ac').hide();
  $('.gifs-ac').toggleClass('show-static');
  demoStaticAc();
})

$('.ac-desktop').click(function(){
  $('.gifs-ac').removeClass('show-static').removeClass('show-mobile');
  $('.gifs-ac').hide();
  $('.gifs-ac').toggleClass('show-desktop');
  demoDesktopAc();
});

$('.ac-mobile').click(function(){
  $('.gifs-ac').removeClass('show-static').removeClass('show-deskop');
  $('.gifs-ac').hide();
  $('.gifs-ac').toggleClass('show-mobile');
  demoMobileAc();
});

function demoStaticAc() {
  if ($('.gifs-ac').hasClass('show-static')) {
    $('.static-ac').fadeIn('slow');
    $('.static-txt.ac').css('color','#9EBED0');
    $('.mobile-txt.ac').css('color','white');
    $('.desktop-txt.ac').css('color','white');
  } else {
    $('.static-ac').show();
    $('.static-txt.ac').css('color','#9EBED0');
    $('.mobile-txt.ac').css('color','white');
    $('.desktop-txt.ac').css('color','white');
  }
}

function demoDesktopAc() {
  if ($('.gifs-ac').hasClass('show-desktop')) {
    $('.desktop-ac').fadeIn('slow');
    $('.desktop-txt.ac').css('color','#96D7C8');
    $('.mobile-txt.ac').css('color','white');
    $('.static-txt.ac').css('color','white');
  } else {
    $('.desktop-ac').show();
    $('.desktop-txt.ac').css('color','#96D7C8');
    $('.mobile-txt.ac').css('color','white');
    $('.static-txt.ac').css('color','white');
  }
}

function demoMobileAc() {
  if ($('.gifs-ac').hasClass('show-mobile')) {
    $('.mobile-ac').fadeIn('slow');
    $('.mobile-txt.ac').css('color','#A995DE');
    $('.desktop-txt.ac').css('color','white');
    $('.static-txt.ac').css('color','white');
  } else {
    $('.mobile-ac').show();
    $('.mobile-txt.ac').css('color','#A995DE');
    $('.desktop-txt.ac').css('color','white');
    $('.static-txt.ac').css('color','white');
  }
}

//

// does the dog die?

$('.dtdd-static').click(function(){
  $('.gifs-dtdd').removeClass('show-desktop').removeClass('show-mobile');
  $('.gifs-dtdd').hide();
  $('.gifs-dtdd').toggleClass('show-static');
  demoStaticDtdd();
})

$('.dtdd-desktop').click(function(){
  $('.gifs-dtdd').removeClass('show-static').removeClass('show-mobile');
  $('.gifs-dtdd').hide();
  $('.gifs-dtdd').toggleClass('show-desktop');
  demoDesktopDtdd();
});

$('.dtdd-mobile').click(function(){
  $('.gifs-dtdd').removeClass('show-static').removeClass('show-deskop');
  $('.gifs-dtdd').hide();
  $('.gifs-dtdd').toggleClass('show-mobile');
  demoMobileDtdd();
});

function demoStaticDtdd() {
  if ($('.gifs-dtdd').hasClass('show-static')) {
    $('.static-dtdd').fadeIn('slow');
    $('.static-txt.dtdd').css('color','#9EBED0');
    $('.mobile-txt.dtdd').css('color','white');
    $('.desktop-txt.dtdd').css('color','white');
  } else {
    $('.static-dtdd').show();
    $('.static-txt.dtdd').css('color','#9EBED0');
    $('.mobile-txt.dtdd').css('color','white');
    $('.desktop-txt.dtdd').css('color','white');
  }
}

function demoDesktopDtdd() {
  if ($('.gifs-dtdd').hasClass('show-desktop')) {
    $('.desktop-dtdd').fadeIn('slow');
    $('.desktop-txt.dtdd').css('color','#96D7C8');
    $('.mobile-txt.dtdd').css('color','white');
    $('.static-txt.dtdd').css('color','white');
  } else {
    $('.desktop-dtdd').show();
    $('.desktop-txt.dtdd').css('color','#96D7C8');
    $('.mobile-txt.dtdd').css('color','white');
    $('.static-txt.dtdd').css('color','white');
  }
}

function demoMobileDtdd() {
  if ($('.gifs-dtdd').hasClass('show-mobile')) {
    $('.mobile-dtdd').fadeIn('slow');
    $('.mobile-txt.dtdd').css('color','#A995DE');
    $('.desktop-txt.dtdd').css('color','white');
    $('.static-txt.dtdd').css('color','white');
  } else {
    $('.mobile-dtdd').show();
    $('.mobile-txt.dtdd').css('color','#A995DE');
    $('.desktop-txt.dtdd').css('color','white');
    $('.static-txt.dtdd').css('color','white');
  }
}

//

// Average joe

$('.aj-static').click(function(){
  $('.gifs-aj').removeClass('show-desktop').removeClass('show-mobile');
  $('.gifs-aj').hide();
  $('.gifs-aj').toggleClass('show-static');
  demoStaticAj();
})

$('.aj-desktop').click(function(){
  $('.gifs-aj').removeClass('show-static').removeClass('show-mobile');
  $('.gifs-aj').hide();
  $('.gifs-aj').toggleClass('show-desktop');
  demoDesktopAj();
});

$('.aj-mobile').click(function(){
  $('.gifs-aj').removeClass('show-static').removeClass('show-deskop');
  $('.gifs-aj').hide();
  $('.gifs-aj').toggleClass('show-mobile');
  demoMobileAj();
});

function demoStaticAj() {
  if ($('.gifs-aj').hasClass('show-static')) {
    $('.static-aj').fadeIn('slow');
    $('.static-txt.aj').css('color','#9EBED0');
    $('.mobile-txt.aj').css('color','white');
    $('.desktop-txt.aj').css('color','white');
  } else {
    $('.static-aj').show();
    $('.static-txt.aj').css('color','#9EBED0');
    $('.mobile-txt.aj').css('color','white');
    $('.desktop-txt.aj').css('color','white');
  }
}

function demoDesktopAj() {
  if ($('.gifs-aj').hasClass('show-desktop')) {
    $('.desktop-aj').fadeIn('slow');
    $('.desktop-txt.aj').css('color','#96D7C8');
    $('.mobile-txt.aj').css('color','white');
    $('.static-txt.aj').css('color','white');
  } else {
    $('.desktop-aj').show();
    $('.desktop-txt.aj').css('color','#96D7C8');
    $('.mobile-txt.aj').css('color','white');
    $('.static-txt.aj').css('color','white');
  }
}

function demoMobileAj() {
  if ($('.gifs-aj').hasClass('show-mobile')) {
    $('.mobile-aj').fadeIn('slow');
    $('.mobile-txt.aj').css('color','#A995DE');
    $('.desktop-txt.aj').css('color','white');
    $('.static-txt.aj').css('color','white');
  } else {
    $('.mobile-aj').show();
    $('.mobile-txt.aj').css('color','#A995DE');
    $('.desktop-txt.aj').css('color','white');
    $('.static-txt.aj').css('color','white');
  }
}

// hello is this updating. 


if (detector.mobile() === null) {
  let sources = document.querySelectorAll('video source');
  let video = document.querySelector('video');
  for (let i = 0; i < sources.length;i++) {
    sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
  }

  $('video').load();
  $('source').load();
  video.load();
  console.log('desktop')
} else {
  console.log('mobile')
}

// 
$(document).ready(function(){

  pic = new Image();
  pic.src="../assets/img-1.jpg";

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
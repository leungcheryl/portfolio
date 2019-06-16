const lineDrawing = anime({
    targets: '.main-title .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 5000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });


  $(document).ready(function(){
	console.log('ready')
});
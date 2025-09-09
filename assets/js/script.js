
$(document).ready(function(){

	
var owl = $(".urunSlider").owlCarousel({
  items: 1,
  loop: true,
  dots: true,
  nav: true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  navText: ["",""]
});

$(document).on('click', '.galeryImage', function(){
  var key = $(this).index();

  $(owl).trigger('to.owl.carousel', key);
});

$("#video-volume").click( function (){
  if( $("video").prop('muted') ) {
        $("video").prop('muted', false);
    $('#video-volume').toggleClass('fa-volume-off fa-volume-up');
  } else {
    $("video").prop('muted', true);
    $('#video-volume').toggleClass('fa-volume-up fa-volume-off');
  }
});










});
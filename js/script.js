$(window).scroll(function(){
  let scrolling = $(this).scrollTop();
  if( scrolling > 40){
    $("#navbar").addClass("navbarFixed");
  }
  else{
    $("#navbar").removeClass("navbarFixed");
  }
});
// ScrollFunction

var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
   event.preventDefault();
   $('html,body').animate({
     scrollTop: $(this.hash).offset().top - 48
   }, 300);
});
 // NavbarJs


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
});
// tooltip js end

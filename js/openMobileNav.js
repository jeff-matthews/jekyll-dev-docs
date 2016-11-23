// Show the TOC for API referencetopics after clicking the mobile-nav hamburger menu
$("#mobile-nav").click(function() {
  $(".tocify-wrapper").toggleClass("open");
});

/*hide the TOC when clicking outside of TOC element; instead of stopping event propogation and potentially breaking something else (https://css-tricks.com/dangers-stopping-event-propagation/)
$(document).on('click', function(event) {
  if (!$(event.target).closest('#tocify-wrapper').length) {
 // Hide the mobile-nav.
 $(".tocify-wrapper").removeClass('open');
 }
});*/

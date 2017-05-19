//The jquery.tocify.js plugin needs this to dynamically generate the API reference TOC.
$("#toc").tocify({ selectors: "h1, h2, h3, h4" }).data("toc-tocify")

// Preloading animation for the API reference page layout. Wait until tocify generates the TOC before showing page content.
document.addEventListener("DOMContentLoaded", function(){
  $('.preloader-background').delay(350).fadeOut('slow');
  $('.preloader-wrapper')
    .delay(350)
    .fadeOut();
  });

//Enable highlightJS syntax highlighting for code exmaples.
$('pre code').each(function(i, block) {
  hljs.highlightBlock(block);
});

// openMobileNav.js
//Show the TOC for API referencetopics after clicking the mobile-nav hamburger menu
$("#mobile-nav").click(function() {
  $(".tocify-wrapper").toggleClass("open");
});

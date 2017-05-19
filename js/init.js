$(document).ready(function(){
  $(".scrollspy").scrollSpy(),
  $(".dropdown-button").dropdown(),
  //Enable the parallax effect on the landing page graphic.
  $(".parallax").parallax(),
  $(".button-collapse").sideNav(),
  $(".sidebar-module").pushpin(),
  //Enable hover text using the materialize.js/css plugin.
  $('.tooltipped').tooltip({delay: 50}),
  //Enable highlightJS syntax highlighting for code exmaples.
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
}),
(function($){})(jQuery);

/* scrollspy.js
* Enables scrollspy on topic pages by:
* 1) wrapping h2s in a div
* 2) adding the requisite div class
* 3) inserting h2 IDs into the div
* Tried using a Gulp task to do this, but it kept inserting errant HTML tags in the header that caused formatting issues. It's easier to link to this script in the page layout.
*/
$('div.main h2').each(function(scrollspy){
    $(this).nextUntil("h2").andSelf().wrapAll('<div class="section scrollspy" />');
    var scrollspyClassName = $(this).text().split(' ').join('-').split('\/').join('-').replace(/[|&;$%@"<>()+,.:?']/g, "").toLowerCase();
    $(this).parent('div').attr('id', scrollspyClassName);
  });

/* preventDefault.js
Prevent page from refreshing if a TOC entry is already active:
http://stackoverflow.com/questions/21359948/how-to-avoid-page-refreshing-on-anchor-a-a-tag-click
*/

/*this sort of works
$(document).on('click', '.level2.active',function(e){
e.preventDefault();
});
*/
/* this works just as well as the above i think, except when it comes to level3 headings; they don't work b/c i think they're considered active when the parent drop-down is active
http://stackoverflow.com/questions/9032033/disable-click-if-class-x-jquery
*/
//Prevent page from refreshing when clicking on an active TOC link
$('li').click(function(event) {
    if($(this).hasClass('level2 active'))
        event.preventDefault();
});

$('li').click(function(event) {
    if($(this).hasClass('level3 active'))
        event.preventDefault();
});

//Enable li.level3 links by removing active class from ul.li.level2 parent
$('ul#toc.collapsible.collapsible-accordion li.level3').on('click', function() {
    $('ul#toc.collapsible.collapsible-accordion li.level2').removeClass('active');
});

/*hide the TOC when clicking outside of TOC element; instead of stopping event propogation and potentially breaking something else (https://css-tricks.com/dangers-stopping-event-propagation/)
$(document).on('click', function(event) {
  if (!$(event.target).closest('#tocify-wrapper').length) {
 // Hide the mobile-nav.
 $(".tocify-wrapper").removeClass('open');
 }
});*/

/*
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
//prevent page from refreshing when clicking on an active TOC link
$('li').click(function(event) {
    if($(this).hasClass('level2 active'))
        event.preventDefault();
});

$('li').click(function(event) {
    if($(this).hasClass('level3 active'))
        event.preventDefault();
});

//enable li.level3 links by removing active class from ul.li.level2 parent
$('ul#toc.collapsible.collapsible-accordion li.level3').on('click', function() {
    $('ul#toc.collapsible.collapsible-accordion li.level2').removeClass('active');
});

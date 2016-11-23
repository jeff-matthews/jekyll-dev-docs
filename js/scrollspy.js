/*
* Enables scrollspy on topic pages by:
* 1) wrapping h2s in a div
* 2) adding the requisite div class
* 3) inserting h2 IDs into the div
* Tried using a Gulp task to do this, but it kept inserting errant HTML tags in the header that caused formatting issues. It's easier to link to this script in the page layout.
*/
$('div.main h2').each(function(){
    $(this).nextUntil("h2").andSelf().wrapAll('<div class="section scrollspy" />');
    var scrollspyClassName = $(this).text().split(' ').join('-').split('\/').join('-').replace(/[|&;$%@"<>()+,.:?']/g, "").toLowerCase();
    $(this).parent('div').attr('id', scrollspyClassName);
  });

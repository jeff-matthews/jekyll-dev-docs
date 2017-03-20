//Instantiate the script by passing it a list of HTML elements. Required to ensure multiple copy buttons on a page will work.
var btns = document.querySelectorAll('button');
var clipboard = new Clipboard(btns);

clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  // showTooltip(e.trigger, 'Copied!');
  //prevent click action from highlighting text
  // e.clearSelection();
});

clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});
// add attributes to the button element
// function showTooltip(elem, msg) {
//     elem.setAttribute('class', ['btn tooltip copy']);
//     elem.setAttribute('aria-label', msg);
// }

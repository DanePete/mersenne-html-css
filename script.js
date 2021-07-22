console.log('got here');

// THE INCANTATION
// Wait for the DOM to load

$(document).ready(onReady); // onReady is a "callback"

// Function to call when the DOM is loaded
function onReady() {
  console.log('So ready');

  let h1 = $('h1');
  console.log('h1', h1);

  h1.text('jQuery FTW');
  h1.css('transform', 'rotate(180)');
  h1.css('color', 'green');

  let yoloImg = $('#yoloImg');
  console.log(yoloImg);

  let fancyImages = $('.fancyImg');
  console.log('fancyImgs', fancyImages);
  fancyImages.hide().fadeIn(4000);

  // Complex selectors
  // just like css
  let lotsOfThings = $('li > button, th');
  lotsOfThings.css('background', 'lightblue');

  let yoloDiv = $('#yoloDiv');
  yoloDiv.hide().slideDown(2000);

  let em = yoloDiv.find('em');
  em.text('You only linguini once');

  // Traverse the DOM
  let input = em.parent().siblings('input');
  console.log('input', input);
}
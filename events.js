console.log('got here');

// The Incantation

$(document).ready(onReady);

function onReady() {
  console.log('so ready');

  $('#addBtn').on('click', addToList);
  $('#clearList').on('click', clearList);
}

function addToList() {
  console.log('button got clicked!');
  $('ul').append('<li>hello</li>');
}

function clearList() {
  $('ul').empty();
}
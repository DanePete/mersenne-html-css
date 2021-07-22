console.log('got here');

// The Incantation

$(document).ready(onReady);

function onReady() {
  $('#addBtn').on('click', addToList);
  $('#clearList').on('click', clearList);
}

function addToList() {
  console.log('button got clicked!');
  let inputVal = $('#about-yourself').val();
  $('ul').append(`<li> ${inputVal} </li>`);
}

function clearList() {
  $('ul').empty();
}
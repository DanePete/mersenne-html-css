console.log('got here');

// The Incantation

$(document).ready(onReady);

function onReady() {
  $('#addBtn').on('click', addToList);
  $('#clearList').on('click', clearList);
  console.log('.deteBtn', $('.removeBtn'));
  // This wont work!
  // does not exist yet
  $('.removeBtn').on('click', deleteIndividualItem);

  // Use a trick to work around this
  // Event Delegation
  // HOW TO HANDLE dynamic elements that come in after the dom is loaded
  // Just always use this syntax
  $(document).on('click', '.removeBtn', deleteIndividualItem);
}

function addToList() {
  console.log('button got clicked!');
  let inputVal = $('#about-yourself').val();
  $('ul').append(`<li> ${inputVal} <button class="removeBtn">Remove me</button> </li>`);

  // Clear my input
  $('#about-yourself').val('').focus();
}


/***
 * clears the ul list
 */

function clearList() {
  $('ul').empty();
}

/**
 * delete item from list 
*/

function deleteIndividualItem() {
  $(this).parent().remove();
}
$(document).ready(function(){
    $('#menu-content, #book-content').hide();
  }
);

$('#presentation-title').on('click', function(){
  $('#presentation-content').show();
  $('#menu-content, #book-content').hide();
});

$('#menu-title').on('click', function(){
  $('#menu-content').show();
  $('#presentation-content, #book-content').hide();
});

$('#book-title').on('click', function(){
  $('#book-content').show();
  $('#presentation-content, #menu-content').hide();
});

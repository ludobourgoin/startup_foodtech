$(document).ready(function() {
  $('#menu-content, #book-content').hide();
console.log("ready")

  $('#presentation-title').on('click', function() {
    console.log(1)
    $('#menu-content, #book-content').hide();
    $('#presentation-content').show();

  });

  $('#menu-title').on('click', function() {
    console.log(2)

    $('#presentation-content, #book-content').hide();
    $('#menu-content').show();
  });

  $('#book-title').on('click', function() {
    $('#presentation-content, #menu-content').hide();
    $('#book-content').show();
  });
});

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validateForm() {
  var z = document.forms["Subscribe"]["email"].value;
  if (z == "") {
    alert("Email must be filled out");
    return false;
  }
}
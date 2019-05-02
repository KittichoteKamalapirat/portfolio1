// // express router



// responsive navigation

// turn 3 stripes to X
$("#hamburger").click(function(){
  $("#hamburger").toggleClass("is-active")
});

// toggle nav bar
$("#hamburger").click(function(){
  $("ul").toggleClass("active")
});

$("#hamburger").click(function(){
  $(".backtohome").toggleClass("not-active")
});

function popupFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

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

// randomly recommend projects
const projects = ['gochiso','junction','portfolio-website','tedx-flyer','tedx-website','thirty-logo-challenge']
const randomNum = Math.floor(Math.random() * projects.length);
const randomProject = projects[randomNum]

console.log(randomNum)
console.log(randomProject)

